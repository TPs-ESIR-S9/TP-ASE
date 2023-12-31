import type { ValidationAcceptor } from 'langium';
import * as InterfaceAST from '../generated/ast.js';
import type { RoboMlServices } from '../robo-ml-module.js';

// 1. Checker qu'une variable existe au moment de son assignation ou son appel
// 2. Checker qu'une fonction existe 

export class RoboMLValidator {

    validateAssignement(node: InterfaceAST.Assignement, acceptor: ValidationAcceptor): void {
        
        if (!this.isValidEntry((node.entry as InterfaceAST.EntrySimple))) {
            console.log("Erreur : non");
        }
        
    }

    validateCondition(node: InterfaceAST.Condition, acceptor: ValidationAcceptor): void {
                
        if (!node.statementIf || !node.statementElse) {
            console.log("Erreur : non");
        }

    }

    private isValidEntry(entry: InterfaceAST.Entry): boolean {
        
        return entry !== null;
    }

    /*
    private isValidExpression(expression: InterfaceAST.Expression): boolean {

        return expression.elementA !== null && expression.elementB !== null;
    }
    */

}


export function registerValidationChecks(services: RoboMlServices): void {
    const registry = services.validation.ValidationRegistry;
    const validator = new RoboMLValidator();

    registry.register({
        Assignement: (node: InterfaceAST.Assignement, acceptor: ValidationAcceptor) => validator.validateAssignement(node, acceptor),
        Condition: (node: InterfaceAST.Condition, acceptor: ValidationAcceptor) => validator.validateCondition(node, acceptor),

    });
}