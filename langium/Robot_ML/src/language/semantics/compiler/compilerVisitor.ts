import * as fs from 'fs';
import { Assignement, Condition, Deplacement, Entry, EntrySimple, Expression, FunctionCall, FunctionDec, GetRotation, GetSpeed, Loop, RoboMLProgram, RoboMLVisitor, Rotation, SetRotation, SetSpeed, Statement, VariableDef, VariableFunDef, VariableRef } from '../../visitor.js';
import { RMLBoolean, RMLInt } from '../../generated/ast.js';

export class CompilerVisitor implements RoboMLVisitor {
    pathInitFile: string = "src/language/semantics/compiler/ArduinoExample/program/RB0021_Omni4WD_PID/RB0021_Omni4WD_PID.ino";
    pathOutputFile: string = "files/output.ino";
    codeProgram: string = "\n\n";

    visitRoboMLProgram(node: RoboMLProgram) : string {
        node.function.forEach((functionDec) => this.codeProgram += functionDec.accept(this) + "\n\n");
        fs.readFile(this.pathInitFile, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            
            let finalProgram = data + this.codeProgram;
            
            fs.writeFile(this.pathOutputFile, finalProgram, 'utf8', (err) => {
                if (err) {
                    console.error(err);
                }
            });
        });
        return this.codeProgram;
    }
    
    visitFunctionDec(node: FunctionDec) {
        let returnType = null;
        switch (node.returnType) {
            case "RMLInt":
                returnType = "int";
                break;
            case "RMLBoolean":
                returnType = "bool";
                break;
            default:
                returnType = "void";
        }
        let variableFunDef = Array<[string, string]>();
        node.variableFunDef.forEach((variableParamFunDef) => {
            switch (variableParamFunDef.variableType) {
                case "RMLInt":
                    variableFunDef.push([variableParamFunDef.variableName, "int"]);
                    break;
                case "RMLBoolean":
                    variableFunDef.push([variableParamFunDef.variableName, "bool"]);
                    break;
                default:
                    variableFunDef.push([variableParamFunDef.variableName, "void"]);
            }
        });
        return returnType + " " + node.functionName + "(" + variableFunDef.map((variableParamFunDef) => variableParamFunDef[1] + " " + variableParamFunDef[0]).join(", ") + ") {\n"
        + node.instruction.map((instruction) => instruction.accept(this)).join("\n") + "\n}";
    }

    visitAssignement(node: Assignement) {
        return node.assignableVariable + " = " + node.entry.accept(this) + ";";
    }

    visitCondition(node: Condition) {
        let ifCode = "if (" + node.booleanExpression.accept(this) + ") {\n" + node.statementIf.map((statement) => statement.accept(this)).join("\n") + "\n}";
        let elseCode = "";
        if (node.statementElse.length > 0) {
            elseCode = "else {\n" + node.statementElse.map((statement) => statement.accept(this)).join("\n") + "\n}";
        }
        return  ifCode + elseCode;
    }

    visitDeplacement(node: Deplacement) {
        let multiplicator = null;
        switch (node.unitMeasure) {
            case "mm":
                multiplicator = "";
                break;
            case "cm":
                multiplicator = " * 10";
                break;
            case "dm":
                multiplicator = " * 100";
                break;
            case "m":
                multiplicator = " * 1000";
                break;
            default:
                throw new Error("Unhandle unit measure: " + node.unitMeasure);
        }
        let secondPartMovementCode = " * global_speed);\nOmni.delayMS(1000);\nOmni.setCarStop();"
        switch (node.movementType) {
            case "Forward":
                return "Omni.setCarAdvance(" + node.deplacementDistance.accept(this) + multiplicator + secondPartMovementCode;
            case "Backward":
                return "Omni.setCarBackoff(" + node.deplacementDistance.accept(this) + multiplicator + secondPartMovementCode;
            case "SideLeft":
                return "Omni.setCarLeft(" + node.deplacementDistance.accept(this) + multiplicator + secondPartMovementCode;
            case "SideRight":
                return "Omni.setCarRight(" + node.deplacementDistance.accept(this) + multiplicator + secondPartMovementCode;
            default:
                throw new Error("Unhandle movement type: " + node.movementType);
        }

    }

    visitEntry(node: Entry) {
        switch (node.$type) {
            case "Expression":
                return this.visitExpression(node as Expression);
            case "EntrySimple":
                return this.visitEntrySimple(node as unknown as EntrySimple);
            default:
                throw new Error("Unhandle entry type: " + node.$type);
        }
    }

    visitEntrySimple(node: EntrySimple) {
        // "GetRotation" | "GetSpeed" | "FunctionCall" | "RMLBoolean" | "RMLInt" | "VariableRef"
        switch (node.$type) {
            case "GetRotation":
                return this.visitGetRotation(node as GetRotation);
            case "GetSpeed":
                return this.visitGetSpeed(node as GetSpeed);
            case "FunctionCall":
                return this.visitFunctionCall(node as FunctionCall);
            case "RMLBoolean":
                return (node as unknown as RMLBoolean).value;
            case "RMLInt":
                return (node as unknown as RMLInt).value;
            case "VariableRef":
                return this.visitVariableRef(node as unknown as VariableRef);
            default:
                throw new Error("Unhandle entry type: " + node.$type);
        }
    }

    visitExpression(node: Expression) {
        let isThereSecondElement:boolean = node.operator !== undefined && node.elementB !== undefined;
        return node.elementA.accept(this) + (isThereSecondElement? " " + node.operator! + " " + node.elementB!.accept(this) : "");
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
        let secondPartRotationCode = "/ 180 * 3.1415926545 * global_rotation);\nOmni.delayMS(3000);\nOmni.setCarStop();"
        return (node.rotationSens === "Clock" ? "Omni.setCarRotateRight(" : "Omni.setCarRotateLeft(") + node.rotationAngle.accept(this) + secondPartRotationCode;
    }

    visitSetRotation(node: SetRotation) {
        return "global_rotation = " + node.variableValue.accept(this) + ";";
    }

    visitSetSpeed(node: SetSpeed) {
        return "global_speed = " + node.variableValue.accept(this) + ";";
    }

    visitStatement(node: Statement) {
        switch (node.$type) {
            case "Assignement":
                return this.visitAssignement(node as Assignement);
            case "Condition":
                return this.visitCondition(node as Condition);
            case "Deplacement":
                return this.visitDeplacement(node as Deplacement);
            case "Loop":
                return this.visitLoop(node as Loop);
            case "Rotation":
                return this.visitRotation(node as Rotation);
            case "SetRotation":
                return this.visitSetRotation(node as SetRotation);
            case "SetSpeed":
                return this.visitSetSpeed(node as SetSpeed);
            default:
                throw new Error("Unhandle statement type: " + node.$type);
        }
    }

    visitVariableDef(node: VariableDef) {
        let variableType = null;
        switch (node.variableType) {
            case "RMLInt":
                variableType = "int";
                break;
            case "RMLBoolean":
                variableType = "bool";
                break;
            default:
                variableType = "void";
        }
        return variableType + " " + node.variableName + " = " + node.variableValue.accept(this) + ";";
    }

    visitVariableFunDef(node: VariableFunDef) {
        let variableType = null;
        switch (node.variableType) {
            case "RMLInt":
                variableType = "int";
                break;
            case "RMLBoolean":
                variableType = "bool";
                break;
            default:
                variableType = "void";
        }
        return variableType + " " + node.variableName;
    }

    visitVariableRef(node: VariableRef) {
        return node.variableDefinition;
    }

}