import * as ASTInterfaces from '../../generated/ast.js';
import * as fs from 'fs';
import { Assignement, Deplacement, EntrySimple, Expression, FunctionCall, FunctionDec, GetRotation, Loop, RoboMLProgram, RoboMLVisitor, Rotation, Statement, VariableDef, VariableFunDef, VariableRef } from '../../visitor.js';

export class CompilerVisitor implements RoboMLVisitor {
    pathInitFile: string = "src/language/semantics/compiler/ArduinoExample/program/RB0021_Omni4WD_PID/RB0021_Omni4WD_PID.ino";
    pathOutputFile: string = "src/language/semantics/compiler/ArduinoExample/program/RB0021_Omni4WD_PID/output.ino";
    codeProgram: string = "\n\n";

    visitRoboMLProgram(node: RoboMLProgram){
        this.codeProgram += "hello world";
        fs.readFile(this.pathInitFile, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }

            let finalProgram = data + this.codeProgram;

            fs.writeFile(this.pathOutputFile, finalProgram, 'utf8', (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log("Compilation terminée");
            });
        });
        return this.codeProgram;
    }

    visitAssignement(node: Assignement) {
        // TODO: assignement
    }

    visitCondition(node: ASTInterfaces.Condition) {
        // TODO: condition
    }

    visitDeplacement(node: Deplacement) {
        // TODO: deplacement
    }

    visitEntry(node: ASTInterfaces.Entry) {
        // TODO: entry
    }

    visitEntrySimple(node: EntrySimple) {
        //TODO
    }

    visitExpression(node: Expression) {
        //TODO
    }

    visitFunctionCall(node: FunctionCall) {
        //TODO
    }

    visitFunctionDec(node: FunctionDec) {
        //TODO
    }

    visitGetRotation(node: GetRotation) {
        //TODO
    }

    visitGetSpeed(node: ASTInterfaces.GetSpeed) {
        //TODO
    }

    visitLoop(node: Loop) {
        //TODO
    }

    visitRotation(node: Rotation) {
        //TODO
    }

    visitSetRotation(node: ASTInterfaces.SetRotation) {
        //TODO
    }

    visitSetSpeed(node: ASTInterfaces.SetSpeed) {
        //TODO
    }

    visitStatement(node: Statement) {
        //TODO
    }

    visitVariableDef(node: VariableDef) {
        //TODO
    }

    visitVariableFunDef(node: VariableFunDef) {
        //TODO
    }

    visitVariableRef(node: VariableRef) {
        //TODO
    }

}