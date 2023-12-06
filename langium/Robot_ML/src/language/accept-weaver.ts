import type { ValidationAcceptor, ValidationChecks } from 'langium';
import type { RoboMlAstType } from './generated/ast.js';
import * as InterfaceAST from './generated/ast.js';
import * as ClassAST from './visitor.js';
import { RoboMLVisitor } from './visitor.js';
import type { RoboMlServices } from './robo-ml-module.js';

/**
 * Register custom validation checks.
 * TODO : Call this function in the language module.ts file (see registerValidationChecks(...);)
 */
export function weaveAcceptMethods(services: RoboMlServices) {
    const registry = services.validation.ValidationRegistry;
    const weaver = services.validation.RoboMlValidator;
    registry.register(weaver.checks, weaver);
}

/**
 * TODO :
 * You must implement a weaving function for each concrete concept of the language.
 * you will also need to fill the check data structure to map the weaving function to the Type of node
 */
export class RoboMlAcceptWeaver {
    
    weaveAssignement(node : InterfaceAST.Assignement, accept : ValidationAcceptor) : void{
        (<any> node).accept = (visitor: RoboMLVisitor) => {return visitor.visitAssignement(node as unknown as ClassAST.Assignement);}
    }

    weaveCondition(node: InterfaceAST.Condition, accept: ValidationAcceptor): void {
        (node as any).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitCondition(node as unknown as ClassAST.Condition);
        };
    }

    weaveDeplacement(node: InterfaceAST.Deplacement, accept: ValidationAcceptor): void {
        (node as any).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitDeplacement(node as unknown as ClassAST.Deplacement);
        };
    }

    weaveEntry(node: InterfaceAST.Entry, accept: ValidationAcceptor): void {
        (node as any).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitEntry(node as unknown as ClassAST.Entry);
        };
    }
    
    weaveEntrySimple(node: InterfaceAST.EntrySimple, accept: ValidationAcceptor): void {
        (node as any).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitEntrySimple(node as unknown as ClassAST.EntrySimple);
        };
    }
    
    weaveExpression(node: InterfaceAST.Expression, accept: ValidationAcceptor): void {
        (node as any).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitExpression(node as unknown as ClassAST.Expression);
        };
    }
    
    weaveFunctionCall(node: InterfaceAST.FunctionCall, accept: ValidationAcceptor): void {
        (node as any).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitFunctionCall(node as unknown as ClassAST.FunctionCall);
        };
    }

    weaveFunctionDec(node: InterfaceAST.FunctionDec, accept: ValidationAcceptor): void {
        (node as any).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitFunctionDec(node as unknown as ClassAST.FunctionDec);
        };
    }
    
    weaveGetRotation(node: InterfaceAST.GetRotation, accept: ValidationAcceptor): void {
        (node as any).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitGetRotation(node as unknown as ClassAST.GetRotation);
        };
    }
    
    weaveGetSpeed(node: InterfaceAST.GetSpeed, accept: ValidationAcceptor): void {
        (node as any).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitGetSpeed(node as unknown as ClassAST.GetSpeed);
        };
    }
    
    weaveLoop(node: InterfaceAST.Loop, accept: ValidationAcceptor): void {
        (node as any).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitLoop(node as unknown as ClassAST.Loop);
        };
    }
    
    weaveRoboMLProgram(node: InterfaceAST.RoboMLProgram, accept: ValidationAcceptor): void {
        (node as any).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitRoboMLProgram(node as unknown as ClassAST.RoboMLProgram);
        };
    }
    
    weaveRotation(node: InterfaceAST.Rotation, accept: ValidationAcceptor): void {
        (node as any).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitRotation(node as unknown as ClassAST.Rotation);
        };
    }
    
    weaveSetRotation(node: InterfaceAST.SetRotation, accept: ValidationAcceptor): void {
        (node as any).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitSetRotation(node as unknown as ClassAST.SetRotation);
        };
    }
    
    weaveSetSpeed(node: InterfaceAST.SetSpeed, accept: ValidationAcceptor): void {
        (node as any).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitSetSpeed(node as unknown as ClassAST.SetSpeed);
        };
    }
    
    weaveStatement(node: InterfaceAST.Statement, accept: ValidationAcceptor): void {
        (node as any).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitStatement(node as unknown as ClassAST.Statement);
        };
    }
    
    weaveUnit(node: InterfaceAST.Unit, accept: ValidationAcceptor): void {
        (node as any).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitUnit(node as unknown as ClassAST.Unit);
        };
    }
    
    weaveVariableDef(node: InterfaceAST.VariableDef, accept: ValidationAcceptor): void {
        (node as any).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitVariableDef(node as unknown as ClassAST.VariableDef);
        };
    }
    
    weaveVariableFunDef(node: InterfaceAST.VariableFunDef, accept: ValidationAcceptor): void {
        (node as any).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitVariableFunDef(node as unknown as ClassAST.VariableFunDef);
        };
    }
    
    weaveVariableRef(node: InterfaceAST.VariableRef, accept: ValidationAcceptor): void {
        (node as any).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitVariableRef(node as unknown as ClassAST.VariableRef);
        };
    }


    checks: ValidationChecks<RoboMlAstType> = {
        Assignement: this.weaveAssignement,
        Condition: this.weaveCondition,
        Deplacement: this.weaveDeplacement,
        Entry: this.weaveEntry,
        EntrySimple: this.weaveEntrySimple,
        Expression: this.weaveExpression,
        FunctionCall: this.weaveFunctionCall,
        FunctionDec: this.weaveFunctionDec,
        GetRotation: this.weaveGetRotation,
        GetSpeed: this.weaveGetSpeed,
        Loop: this.weaveLoop,
        RoboMLProgram: this.weaveRoboMLProgram,
        Rotation: this.weaveRotation,
        SetRotation: this.weaveSetRotation,
        SetSpeed: this.weaveSetSpeed,
        Statement: this.weaveStatement,
        Unit: this.weaveUnit,
        VariableDef: this.weaveVariableDef,
        VariableFunDef: this.weaveVariableFunDef,
        VariableRef: this.weaveVariableRef,
    };

}