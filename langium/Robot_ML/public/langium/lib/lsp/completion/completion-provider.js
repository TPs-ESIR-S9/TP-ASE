/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/
import { CompletionItemKind, CompletionList, Position } from 'vscode-languageserver';
import * as ast from '../../grammar/generated/ast.js';
import { getExplicitRuleType } from '../../grammar/internal-grammar-util.js';
import { getContainerOfType } from '../../utils/ast-util.js';
import { findDeclarationNodeAtOffset, findLeafNodeAtOffset } from '../../utils/cst-util.js';
import { getEntryRule } from '../../utils/grammar-util.js';
import { stream } from '../../utils/stream.js';
import { findFirstFeatures, findNextFeatures } from './follow-element-computation.js';
export function mergeCompletionProviderOptions(options) {
    const triggerCharacters = Array.from(new Set(options.flatMap(option => { var _a; return (_a = option === null || option === void 0 ? void 0 : option.triggerCharacters) !== null && _a !== void 0 ? _a : []; })));
    const allCommitCharacters = Array.from(new Set(options.flatMap(option => { var _a; return (_a = option === null || option === void 0 ? void 0 : option.allCommitCharacters) !== null && _a !== void 0 ? _a : []; })));
    return {
        triggerCharacters: triggerCharacters.length > 0 ? triggerCharacters : undefined,
        allCommitCharacters: allCommitCharacters.length > 0 ? allCommitCharacters : undefined
    };
}
export class DefaultCompletionProvider {
    constructor(services) {
        this.scopeProvider = services.references.ScopeProvider;
        this.grammar = services.Grammar;
        this.completionParser = services.parser.CompletionParser;
        this.nameProvider = services.references.NameProvider;
        this.lexer = services.parser.Lexer;
        this.nodeKindProvider = services.shared.lsp.NodeKindProvider;
        this.fuzzyMatcher = services.shared.lsp.FuzzyMatcher;
        this.grammarConfig = services.parser.GrammarConfig;
    }
    async getCompletion(document, params) {
        const items = [];
        const contexts = this.buildContexts(document, params.position);
        const acceptor = (context, value) => {
            const completionItem = this.fillCompletionItem(context, value);
            if (completionItem) {
                items.push(completionItem);
            }
        };
        const distinctionFunction = (element) => {
            if (ast.isKeyword(element.feature)) {
                return element.feature.value;
            }
            else {
                return element.feature;
            }
        };
        const completedFeatures = [];
        for (const context of contexts) {
            await Promise.all(stream(context.features)
                .distinct(distinctionFunction)
                .exclude(completedFeatures)
                .map(e => this.completionFor(context, e, acceptor)));
            // Do not try to complete the same feature multiple times
            completedFeatures.push(...context.features);
            // We might want to stop computing completion results
            if (!this.continueCompletion(items)) {
                break;
            }
        }
        return CompletionList.create(this.deduplicateItems(items), true);
    }
    /**
     * The completion algorithm could yield the same reference/keyword multiple times.
     *
     * This methods deduplicates these items afterwards before returning to the client.
     * Unique items are identified as a combination of `kind`, `label` and `detail`.
     */
    deduplicateItems(items) {
        return stream(items).distinct(item => `${item.kind}_${item.label}_${item.detail}`).toArray();
    }
    findFeaturesAt(document, offset) {
        const text = document.getText({
            start: Position.create(0, 0),
            end: document.positionAt(offset)
        });
        const parserResult = this.completionParser.parse(text);
        const tokens = parserResult.tokens;
        // If the parser didn't parse any tokens, return the next features of the entry rule
        if (parserResult.tokenIndex === 0) {
            const parserRule = getEntryRule(this.grammar);
            const firstFeatures = findFirstFeatures({
                feature: parserRule.definition,
                new: true,
                type: getExplicitRuleType(parserRule)
            });
            if (tokens.length > 0) {
                // We have to skip the first token
                // The interpreter will only look at the next features, which requires every token after the first
                tokens.shift();
                return findNextFeatures(firstFeatures.map(e => [e]), tokens);
            }
            else {
                return firstFeatures;
            }
        }
        const leftoverTokens = [...tokens].splice(parserResult.tokenIndex);
        const features = findNextFeatures([parserResult.elementStack.map(feature => ({ feature }))], leftoverTokens);
        return features;
    }
    *buildContexts(document, position) {
        var _a, _b, _c, _d, _e;
        const cst = document.parseResult.value.$cstNode;
        if (!cst) {
            return;
        }
        const textDocument = document.textDocument;
        const text = textDocument.getText();
        const offset = textDocument.offsetAt(position);
        const partialContext = {
            document,
            textDocument,
            offset,
            position
        };
        // Data type rules need special handling, as their tokens are irrelevant for completion purposes.
        // If we encounter a data type rule at the current offset, we jump to the start of the data type rule.
        const dataTypeRuleOffsets = this.findDataTypeRuleStart(cst, offset);
        if (dataTypeRuleOffsets) {
            const [ruleStart, ruleEnd] = dataTypeRuleOffsets;
            const parentNode = (_a = findLeafNodeAtOffset(cst, ruleStart)) === null || _a === void 0 ? void 0 : _a.astNode;
            const previousTokenFeatures = this.findFeaturesAt(textDocument, ruleStart);
            yield Object.assign(Object.assign({}, partialContext), { node: parentNode, tokenOffset: ruleStart, tokenEndOffset: ruleEnd, features: previousTokenFeatures });
        }
        // For all other purposes, it's enough to jump to the start of the current/previous token
        const { nextTokenStart, nextTokenEnd, previousTokenStart, previousTokenEnd } = this.backtrackToAnyToken(text, offset);
        let astNode;
        if (previousTokenStart !== undefined && previousTokenEnd !== undefined && previousTokenEnd === offset) {
            astNode = (_b = findLeafNodeAtOffset(cst, previousTokenStart)) === null || _b === void 0 ? void 0 : _b.astNode;
            const previousTokenFeatures = this.findFeaturesAt(textDocument, previousTokenStart);
            yield Object.assign(Object.assign({}, partialContext), { node: astNode, tokenOffset: previousTokenStart, tokenEndOffset: previousTokenEnd, features: previousTokenFeatures });
        }
        astNode = (_d = (_c = findLeafNodeAtOffset(cst, nextTokenStart)) === null || _c === void 0 ? void 0 : _c.astNode) !== null && _d !== void 0 ? _d : (previousTokenStart === undefined ? undefined : (_e = findLeafNodeAtOffset(cst, previousTokenStart)) === null || _e === void 0 ? void 0 : _e.astNode);
        if (!astNode) {
            const parserRule = getEntryRule(this.grammar);
            const firstFeatures = findFirstFeatures(parserRule.definition);
            yield Object.assign(Object.assign({}, partialContext), { tokenOffset: nextTokenStart, tokenEndOffset: nextTokenEnd, features: firstFeatures });
        }
        else {
            const nextTokenFeatures = this.findFeaturesAt(textDocument, nextTokenStart);
            yield Object.assign(Object.assign({}, partialContext), { node: astNode, tokenOffset: nextTokenStart, tokenEndOffset: nextTokenEnd, features: nextTokenFeatures });
        }
    }
    findDataTypeRuleStart(cst, offset) {
        var _a, _b;
        let containerNode = findDeclarationNodeAtOffset(cst, offset, this.grammarConfig.nameRegexp);
        // Identify whether the element was parsed as part of a data type rule
        let isDataTypeNode = Boolean((_a = getContainerOfType(containerNode === null || containerNode === void 0 ? void 0 : containerNode.grammarSource, ast.isParserRule)) === null || _a === void 0 ? void 0 : _a.dataType);
        if (isDataTypeNode) {
            while (isDataTypeNode) {
                // Use the container to find the correct parent element
                containerNode = containerNode === null || containerNode === void 0 ? void 0 : containerNode.container;
                isDataTypeNode = Boolean((_b = getContainerOfType(containerNode === null || containerNode === void 0 ? void 0 : containerNode.grammarSource, ast.isParserRule)) === null || _b === void 0 ? void 0 : _b.dataType);
            }
            if (containerNode) {
                return [containerNode.offset, containerNode.end];
            }
        }
        return undefined;
    }
    /**
     * Indicates whether the completion should continue to process the next completion context.
     *
     * The default implementation continues the completion only if there are currently no proposed completion items.
     */
    continueCompletion(items) {
        return items.length === 0;
    }
    /**
     * This method returns two sets of token offset information.
     *
     * The `nextToken*` offsets are related to the token at the cursor position.
     * If there is none, both offsets are simply set to `offset`.
     *
     * The `previousToken*` offsets are related to the last token before the current token at the cursor position.
     * They are `undefined`, if there is no token before the cursor position.
     */
    backtrackToAnyToken(text, offset) {
        const tokens = this.lexer.tokenize(text).tokens;
        if (tokens.length === 0) {
            // If we don't have any tokens in our document, just return the offset position
            return {
                nextTokenStart: offset,
                nextTokenEnd: offset
            };
        }
        let previousToken;
        for (const token of tokens) {
            if (token.startOffset >= offset) {
                // We are between two tokens
                // Return the current offset as the next token index
                return {
                    nextTokenStart: offset,
                    nextTokenEnd: offset,
                    previousTokenStart: previousToken ? previousToken.startOffset : undefined,
                    previousTokenEnd: previousToken ? previousToken.endOffset + 1 : undefined
                };
            }
            if (token.endOffset >= offset) {
                // We are within a token
                // Return the current and previous token offsets as normal
                return {
                    nextTokenStart: token.startOffset,
                    nextTokenEnd: token.endOffset + 1,
                    previousTokenStart: previousToken ? previousToken.startOffset : undefined,
                    previousTokenEnd: previousToken ? previousToken.endOffset + 1 : undefined
                };
            }
            previousToken = token;
        }
        // We have run into the end of the file
        // Return the current offset as the next token index
        return {
            nextTokenStart: offset,
            nextTokenEnd: offset,
            previousTokenStart: previousToken ? previousToken.startOffset : undefined,
            previousTokenEnd: previousToken ? previousToken.endOffset + 1 : undefined
        };
    }
    async completionForRule(context, rule, acceptor) {
        if (ast.isParserRule(rule)) {
            const firstFeatures = findFirstFeatures(rule.definition);
            await Promise.all(firstFeatures.map(next => this.completionFor(context, next, acceptor)));
        }
    }
    completionFor(context, next, acceptor) {
        if (ast.isKeyword(next.feature)) {
            return this.completionForKeyword(context, next.feature, acceptor);
        }
        else if (ast.isCrossReference(next.feature) && context.node) {
            return this.completionForCrossReference(context, next, acceptor);
        }
    }
    completionForCrossReference(context, crossRef, acceptor) {
        const assignment = getContainerOfType(crossRef.feature, ast.isAssignment);
        let node = context.node;
        if (assignment && node) {
            if (crossRef.type && (crossRef.new || node.$type !== crossRef.type)) {
                node = {
                    $type: crossRef.type,
                    $container: node,
                    $containerProperty: crossRef.property
                };
            }
            if (!context) {
                return;
            }
            const refInfo = {
                reference: {},
                container: node,
                property: assignment.feature
            };
            try {
                const scope = this.scopeProvider.getScope(refInfo);
                const duplicateStore = new Set();
                scope.getAllElements().forEach(e => {
                    if (!duplicateStore.has(e.name) && this.filterCrossReference(e)) {
                        acceptor(context, this.createReferenceCompletionItem(e));
                        duplicateStore.add(e.name);
                    }
                });
            }
            catch (err) {
                console.error(err);
            }
        }
    }
    /**
     * Override this method to change how reference completion items are created.
     * To change the `kind` of a completion item, override the `NodeKindProvider` service instead.
     *
     * @param nodeDescription The description of a reference candidate
     * @returns A partial completion item
     */
    createReferenceCompletionItem(nodeDescription) {
        return {
            nodeDescription,
            kind: this.nodeKindProvider.getCompletionItemKind(nodeDescription),
            detail: nodeDescription.type,
            sortText: '0'
        };
    }
    filterCrossReference(_nodeDescription) {
        return true;
    }
    completionForKeyword(context, keyword, acceptor) {
        // Filter out keywords that do not contain any word character
        if (!keyword.value.match(/[\w]/)) {
            return;
        }
        acceptor(context, {
            label: keyword.value,
            kind: CompletionItemKind.Keyword,
            detail: 'Keyword',
            sortText: '1'
        });
    }
    fillCompletionItem(context, item) {
        var _a, _b;
        let label;
        if (typeof item.label === 'string') {
            label = item.label;
        }
        else if ('node' in item) {
            const name = this.nameProvider.getName(item.node);
            if (!name) {
                return undefined;
            }
            label = name;
        }
        else if ('nodeDescription' in item) {
            label = item.nodeDescription.name;
        }
        else {
            return undefined;
        }
        let insertText;
        if (typeof ((_a = item.textEdit) === null || _a === void 0 ? void 0 : _a.newText) === 'string') {
            insertText = item.textEdit.newText;
        }
        else if (typeof item.insertText === 'string') {
            insertText = item.insertText;
        }
        else {
            insertText = label;
        }
        const textEdit = (_b = item.textEdit) !== null && _b !== void 0 ? _b : this.buildCompletionTextEdit(context, label, insertText);
        if (!textEdit) {
            return undefined;
        }
        // Copy all valid properties of `CompletionItem`
        const completionItem = {
            additionalTextEdits: item.additionalTextEdits,
            command: item.command,
            commitCharacters: item.commitCharacters,
            data: item.data,
            detail: item.detail,
            documentation: item.documentation,
            filterText: item.filterText,
            insertText: item.insertText,
            insertTextFormat: item.insertTextFormat,
            insertTextMode: item.insertTextMode,
            kind: item.kind,
            labelDetails: item.labelDetails,
            preselect: item.preselect,
            sortText: item.sortText,
            tags: item.tags,
            textEditText: item.textEditText,
            textEdit,
            label
        };
        return completionItem;
    }
    buildCompletionTextEdit(context, label, newText) {
        const content = context.textDocument.getText();
        const identifier = content.substring(context.tokenOffset, context.offset);
        if (this.fuzzyMatcher.match(identifier, label)) {
            const start = context.textDocument.positionAt(context.tokenOffset);
            const end = context.position;
            return {
                newText,
                range: {
                    start,
                    end
                }
            };
        }
        else {
            return undefined;
        }
    }
}
//# sourceMappingURL=completion-provider.js.map