/******************************************************************************
 * Copyright 2022 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/
import * as vscodeUri from 'vscode-uri';
// Node.js and some bundlers don't deal well with the type information in `vscode-uri`
// This is a workaround to support all runtimes and bundlers
let uri = vscodeUri;
if ('default' in uri) {
    uri = uri.default;
}
const URI = uri.URI;
export { URI };
export var UriUtils;
(function (UriUtils) {
    UriUtils.basename = uri.Utils.basename;
    UriUtils.dirname = uri.Utils.dirname;
    UriUtils.extname = uri.Utils.extname;
    UriUtils.joinPath = uri.Utils.joinPath;
    UriUtils.resolvePath = uri.Utils.resolvePath;
    function equals(a, b) {
        return (a === null || a === void 0 ? void 0 : a.toString()) === (b === null || b === void 0 ? void 0 : b.toString());
    }
    UriUtils.equals = equals;
    function relative(from, to) {
        const fromPath = typeof from === 'string' ? from : from.path;
        const toPath = typeof to === 'string' ? to : to.path;
        const fromParts = fromPath.split('/').filter(e => e.length > 0);
        const toParts = toPath.split('/').filter(e => e.length > 0);
        let i = 0;
        for (; i < fromParts.length; i++) {
            if (fromParts[i] !== toParts[i]) {
                break;
            }
        }
        const backPart = '../'.repeat(fromParts.length - i);
        const toPart = toParts.slice(i).join('/');
        return backPart + toPart;
    }
    UriUtils.relative = relative;
})(UriUtils = UriUtils || (UriUtils = {}));
/**
 * @deprecated Use `UriUtils.equals` instead.
 */
export const equalURI = UriUtils.equals;
/**
 * @deprecated Use `UriUtils.relative` instead.
 */
export const relativeURI = UriUtils.relative;
//# sourceMappingURL=uri-util.js.map