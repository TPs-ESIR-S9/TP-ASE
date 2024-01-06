import type { ValidationAcceptor, ValidationChecks } from 'langium';
import type { RoboMlAstType } from './generated/ast.js';
import * as InterfaceAST from './generated/ast.js';
import { Assignement, Condition, Deplacement, Entry, EntrySimple, Expression, FunctionCall, FunctionDec, GetRotation, GetSpeed, Loop, RoboMLProgram, RoboMLVisitor, Rotation, SetRotation, SetSpeed, Statement, VariableDef, VariableFunDef, VariableRef } from './visitor.js';
import type { RoboMlServices } from './robo-ml-module.js';

/**
 * Register custom validation checks.
 * TODO : Call this function in the language module.ts file (see registerValidationChecks(...);)
 */
export function weaveAcceptMethods(services: RoboMlServices) {
    const registry = services.validation.ValidationRegistry;
    const weaver = new RoboMlAcceptWeaver();
    registry.register(weaver.checks, weaver);
}

/**
 * TODO :
 * You must implement a weaving function for each concrete concept of the language.
 * you will also need to fill the check data structure to map the weaving function to the Type of node
 */
export class RoboMlAcceptWeaver {
    
    weaveAssignement(node : InterfaceAST.Assignement, accept : ValidationAcceptor) : void{
        (<any> node).accept = (visitor: RoboMLVisitor) => {return visitor.visitAssignement(node as Assignement);}
    }

    weaveCondition(node: InterfaceAST.Condition, accept: ValidationAcceptor): void {
        (<any> node).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitCondition(node as Condition);
        };
    }

    weaveDeplacement(node: InterfaceAST.Deplacement, accept: ValidationAcceptor): void {
        (<any> node).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitDeplacement(node as Deplacement);
        };
    }

    weaveEntry(node: InterfaceAST.Entry, accept: ValidationAcceptor): void {
        (<any> node).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitEntry(node as Entry);
        };
    }
    
    weaveEntrySimple(node: InterfaceAST.EntrySimple, accept: ValidationAcceptor): void {
        (<any> node).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitEntrySimple(node as EntrySimple);
        };
    }
    
    weaveExpression(node: InterfaceAST.Expression, accept: ValidationAcceptor): void {
        (<any> node).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitExpression(node as Expression);
        };
    }
    
    weaveFunctionCall(node: InterfaceAST.FunctionCall, accept: ValidationAcceptor): void {
        (<any> node).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitFunctionCall(node as FunctionCall);
        };
    }

    weaveFunctionDec(node: InterfaceAST.FunctionDec, accept: ValidationAcceptor): void {
        (<any> node).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitFunctionDec(node as FunctionDec);
        };
    }
    
    weaveGetRotation(node: InterfaceAST.GetRotation, accept: ValidationAcceptor): void {
        (<any> node).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitGetRotation(node as GetRotation);
        };
    }
    
    weaveGetSpeed(node: InterfaceAST.GetSpeed, accept: ValidationAcceptor): void {
        (<any> node).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitGetSpeed(node as GetSpeed);
        };
    }
    
    weaveLoop(node: InterfaceAST.Loop, accept: ValidationAcceptor): void {
        (<any> node).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitLoop(node as Loop);
        };
    }
    
    weaveRoboMLProgram(node: InterfaceAST.RoboMLProgram, accept: ValidationAcceptor): void {
        (<any> node).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitRoboMLProgram(node as RoboMLProgram);
        };
    }
    
    weaveRotation(node: InterfaceAST.Rotation, accept: ValidationAcceptor): void {
        (<any> node).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitRotation(node as Rotation);
        };
    }
    
    weaveSetRotation(node: InterfaceAST.SetRotation, accept: ValidationAcceptor): void {
        (<any> node).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitSetRotation(node as SetRotation);
        };
    }
    
    weaveSetSpeed(node: InterfaceAST.SetSpeed, accept: ValidationAcceptor): void {
        (<any> node).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitSetSpeed(node as SetSpeed);
        };
    }
    
    weaveStatement(node: InterfaceAST.Statement, accept: ValidationAcceptor): void {
        (<any> node).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitStatement(node as Statement);
        };
    }
    
    
    weaveVariableDef(node: InterfaceAST.VariableDef, accept: ValidationAcceptor): void {
        (<any> node).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitVariableDef(node as VariableDef);
        };
    }
    
    weaveVariableFunDef(node: InterfaceAST.VariableFunDef, accept: ValidationAcceptor): void {
        (<any> node).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitVariableFunDef(node as VariableFunDef);
        };
    }
    
    weaveVariableRef(node: InterfaceAST.VariableRef, accept: ValidationAcceptor): void {
        (<any> node).accept = (visitor: RoboMLVisitor) => {
            return visitor.visitVariableRef(node as VariableRef);
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
        VariableDef: this.weaveVariableDef,
        VariableFunDef: this.weaveVariableFunDef,
        VariableRef: this.weaveVariableRef,
    };

}