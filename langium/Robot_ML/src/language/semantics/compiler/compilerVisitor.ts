import * as fs from 'fs';
import { Assignement, Condition, Deplacement, Entry, EntrySimple, Expression, FunctionCall, FunctionDec, GetRotation, GetSpeed, Loop, RoboMLProgram, RoboMLVisitor, Rotation, SetRotation, SetSpeed, Statement, VariableDef, VariableFunDef, VariableRef } from '../../visitor.js';

export class CompilerVisitor implements RoboMLVisitor {
    pathInitFile: string = "src/language/semantics/compiler/ArduinoExample/program/RB0021_Omni4WD_PID/RB0021_Omni4WD_PID.ino";
    pathOutputFile: string = "src/language/semantics/compiler/ArduinoExample/program/RB0021_Omni4WD_PID/output.ino";
    codeProgram: string = "\n\n";

    visitRoboMLProgram(node: RoboMLProgram){
        node.function.forEach(func => {
            console.log(func);
            this.codeProgram += func.accept(this);
        });
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
    
    visitFunctionDec(node: FunctionDec) {
        return (node.returnType === "RMLInt" ? "int" : node.returnType === "RMLBoolean" ? "bool" : "void") + " " + node.functionName + "(" + node.variableFunDef.map((variableFunDef) => (variableFunDef.variableType === "RMLInt" ? "int" : variableFunDef.variableType === "RMLBoolean" ? "bool" : "void") + variableFunDef.variableName).join(", ") + ") {\n" 
        + node.instruction.map((instruction) => instruction.accept(this)).join("\n") + "\n}";
    }

    visitAssignement(node: Assignement) {
        return node.assignableVariable + " = " + node.entry.accept(this) + ";";
    }

    visitCondition(node: Condition) {
        return "if (" + node.booleanExpression.accept(this) + ") {\n" + node.statementIf.map((statement) => statement.accept(this)).join("\n") + "\n} else {\n" + node.statementElse.map((statement) => statement.accept(this)).join("\n") + "\n}";
    }

    visitDeplacement(node: Deplacement) {
        return "Omni.setMotorAll(" + "" + ")"; // TODO: deplacement
    }

    visitEntry(node: Entry) {
        return node.accept(this);
    }

    visitEntrySimple(node: EntrySimple) {
        return node.accept(this);
    }

    visitExpression(node: Expression) {
        return node.accept(this);
    }

    visitFunctionCall(node: FunctionCall) {
        return node.function + "(" + node.arguments.map((variableRef) => variableRef.accept(this)).join(", ") + ")";
    }

    visitGetRotation(node: GetRotation) {
        return "global_rotation";
    }
    
    visitGetSpeed(node: GetSpeed) {
        return "global_speed";
    }

    visitLoop(node: Loop) {
        return "while (" + node.booleanExpression.accept(this) + ") {\n" + node.instruction.map((statement) => statement.accept(this)).join("\n") + "\n}";
    }

    visitRotation(node: Rotation) {
        return (node.rotationSens === "Clock" ? "Omni.setCarRotate(" : "Omni.setCarRotate(-") + node.rotationAngle.accept(this) + ")";
    }

    visitSetRotation(node: SetRotation) {
        return "global_rotation = " + node.variableValue.accept(this);
    }

    visitSetSpeed(node: SetSpeed) {
        return "global_speed = " + node.variableValue.accept(this);
    }

    visitStatement(node: Statement) {
        return node.accept(this);
    }

    visitVariableDef(node: VariableDef) {
        return (node.variableType === "RMLInt" ? "int" : node.variableType === "RMLBoolean" ? "bool" : "void") + " " + node.variableName + " = " + node.variableValue.accept(this) + ";";
    }

    visitVariableFunDef(node: VariableFunDef) {
        return (node.variableType === "RMLInt" ? "int" : node.variableType === "RMLBoolean" ? "bool" : "void") + " " + node.variableName;
    }

    visitVariableRef(node: VariableRef) {
        return node.variableDefinition;
    }

}