/*
import { GetSpeed, SetRotation, SetSpeed } from "../../../generated/ast.js";
import {   
    RoboMLVisitor,
    Entry,
    Statement,
    Assignement,
    Loop,
    FunctionDec,
    Deplacement,
    Rotation,
    GetRotation,
    EntrySimple,
    VariableDef,
    VariableFunDef,
    FunctionCall,
    Expression,
    VariableRef,
    Condition,
    RoboMLProgram,
} from "../../../visitor.js";


class RoboMLInterpreter implements RoboMLVisitor {

    visitCondition(node: Condition) {


        throw new Error("Method not implemented.");
    }
    visitDeplacement(node: Deplacement) {

        const distance = node.deplacementDistance?.accept(this);
        console.log("distance -> " + distance);

        throw new Error("Method not implemented.");
    }
    visitEntry(node: Entry) {
        throw new Error("Method not implemented.");
    }
    visitEntrySimple(node: EntrySimple) {
        throw new Error("Method not implemented.");
    }
    visitExpression(node: Expression) {
        throw new Error("Method not implemented.");
    }
    visitFunctionCall(node: FunctionCall) {
        throw new Error("Method not implemented.");
    }
    visitGetRotation(node: GetRotation) {
        throw new Error("Method not implemented.");
    }
    visitGetSpeed(node: GetSpeed) {
        throw new Error("Method not implemented.");
    }
    visitRoboMLProgram(node: RoboMLProgram) {
        throw new Error("Method not implemented.");
    }
    visitRotation(node: Rotation) {
        throw new Error("Method not implemented.");
    }
    visitSetRotation(node: SetRotation) {
        throw new Error("Method not implemented.");
    }
    visitSetSpeed(node: SetSpeed) {
        throw new Error("Method not implemented.");
    }
    visitStatement(node: Statement) {
        throw new Error("Method not implemented.");
    }
    visitVariableDef(node: VariableDef) {
        throw new Error("Method not implemented.");
    }
    visitVariableFunDef(node: VariableFunDef) {
        throw new Error("Method not implemented.");
    }
    visitVariableRef(node: VariableRef) {
        throw new Error("Method not implemented.");
    }
    visitFunctionDec(node: FunctionDec): any {
        // Interpréter la déclaration de fonction
        // Appeler les instructions de la fonction, etc.
    }

    visitLoop(node: Loop): any {
        // Interpréter la boucle
    }

    visitAssignement(node: Assignement): any {
        // Interpréter l'affectation de variable
    }

    // ... implémentez d'autres méthodes de visite pour les différents types d'instructions
    

}

//const rmlInterpreter = new RoboMLInterpreter();

*/