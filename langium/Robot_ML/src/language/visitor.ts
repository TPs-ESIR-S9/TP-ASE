import { AstNode, CstNode, LangiumDocument, Reference } from 'langium';
import * as ASTInterfaces from './generated/ast.js';// Remplacez le chemin d'accès par le chemin réel de votre fichier visitor.ts

export interface RoboMLVisitor {

    visitAssignement(node: Assignement): any;
    visitCondition(node: Condition): any;
    visitDeplacement(node: Deplacement): any;
    visitEntry(node: Entry): any;
    visitEntrySimple(node: EntrySimple): any;
    visitExpression(node: Expression): any;
    visitFunctionCall(node: FunctionCall): any;
    visitFunctionDec(node: FunctionDec): any;
    visitGetRotation(node: GetRotation): any;
    visitGetSpeed(node: ASTInterfaces.GetSpeed): any;
    visitLoop(node: Loop): any;
    visitRoboMLProgram(node: RoboMLProgram): any;
    visitRotation(node: Rotation): any;
    visitSetRotation(node: ASTInterfaces.SetRotation): any;
    visitSetSpeed(node: ASTInterfaces.SetSpeed): any;
    visitStatement(node: Statement): any;
    visitUnit(node: Unit): any;
    visitVariableDef(node: VariableDef): any;
    visitVariableFunDef(node: VariableFunDef): any;
    visitVariableRef(node: VariableRef): any;


    //visitEntity(node: Entity): any;
      
    //visitVariable(node: Variable): any;
  
    //visitSetValue(node: SetValue): any;  

    //visitDirection(node: Direction): any;
    // visitUnitMeasure(node: UnitMeasure): any;
    
    //visitGetValue(node: GetValue): any;
    
    //visitArithmeticOperators(node: ArithmeticOperators): any;
}

export class GetRotation implements ASTInterfaces.GetRotation {
    $type!: 'GetRotation';

    accept(visitor: RoboMLVisitor): any {
        return visitor.visitGetRotation(this);
    }
}

export class EntrySimple implements ASTInterfaces.EntrySimple {
    $type!: 'EntrySimple';

    accept(visitor: RoboMLVisitor): any {
        return visitor.visitEntrySimple(this);
    }
}

export class SetSpeed implements ASTInterfaces.SetSpeed {
    $type!: 'SetSpeed';
    unitMeasure!: UnitMeasure;
    variableValue!: Entry;

    accept(visitor: RoboMLVisitor): any {
        return visitor.visitSetSpeed(this);
    }
}

export class SetRotation implements ASTInterfaces.SetRotation {
    $type!: 'SetRotation';
    variableValue!: Entry;

    accept(visitor: RoboMLVisitor): any {
        return visitor.visitSetRotation(this);
    }
}

export class GetSpeed implements ASTInterfaces.GetSpeed {
    $type!: 'GetSpeed';

    accept(visitor: RoboMLVisitor): any {
        return visitor.visitGetSpeed(this);
    }
}

type Direction = "backward" | "forward" | "sideLeft" | "sideRight";

export class DirectionVisitor {
    visitDirection(direction: Direction): void {
        console.log(`Visiting Direction: ${direction}`);
    }
}

export class Unit implements ASTInterfaces.Unit {
    readonly $type: 'Unit' = 'Unit';
    Type?: UnitMeasure;
    $document?: LangiumDocument<AstNode> | undefined;

    accept(visitor: RoboMLVisitor): any {
        return visitor.visitUnit(this);
    }
}

export type UnitMeasure = UnitMeasure_cm | UnitMeasure_dm | UnitMeasure_m | UnitMeasure_mm;
export type UnitMeasure_cm = 'cm';
export type UnitMeasure_dm = 'dm';
export type UnitMeasure_m = 'm';
export type UnitMeasure_mm = 'mm';

export class RoboMLProgram implements ASTInterfaces.RoboMLProgram {
    readonly $type!: 'RoboMLProgram';
    function!: ASTInterfaces.FunctionDec[];

    accept(visitor: RoboMLVisitor): any {
        return visitor.visitRoboMLProgram(this);
    }
}

export class Entry implements ASTInterfaces.Entry {
    $type!: 'Entry' | 'EntrySimple' | 'Expression' | 'FunctionCall' | 'GetRotation' | 'GetSpeed' | 'VariableRef';
    
    accept(visitor: RoboMLVisitor): any {
        return visitor.visitEntry(this);
    }
}

export class Condition implements ASTInterfaces.Condition {
    $type!: 'Condition';
    booleanExpression?: Entry;
    statementElse!: ASTInterfaces.Statement[];
    statementIf!: ASTInterfaces.Statement[]; 

    accept(visitor: RoboMLVisitor): any {
        return visitor.visitCondition(this);
    }
}

export class Statement implements ASTInterfaces.Statement {
    $type!: 'Assignement' | 'Condition' | 'Deplacement' | 'Loop' | 'Rotation' | 'SetSpeed' | 'Statement';

    accept(visitor: RoboMLVisitor): any {
        return visitor.visitStatement(this);
    }
}

/*
export type RMLObject = RMLObject_RMLBoolean | RMLObject_RMLDouble | RMLObject_RMLFloat | RMLObject_RMLInt | RMLObject_RMLString;
export type RMLObject_RMLBoolean = 'RMLBoolean';
export type RMLObject_RMLDouble = 'RMLDouble';
export type RMLObject_RMLFloat = 'RMLFloat';
export type RMLObject_RMLInt = 'RMLInt';
export type RMLObject_RMLString = 'RMLString';
*/

export class VariableFunDef implements ASTInterfaces.VariableFunDef {

    $container!: FunctionDec;
    $type!: 'VariableFunDef';
    variableName!: string;
    variableType!: ASTInterfaces.RMLObject;

    accept(visitor: RoboMLVisitor): any {
        return visitor.visitVariableFunDef(this);
    }

}

export class FunctionDec implements ASTInterfaces.FunctionDec {

    readonly $container!: RoboMLProgram;
    readonly $type!: 'FunctionDec';
    functionName!: string;
    instruction!: Array<Statement>;
    returnType?: ASTInterfaces.RMLObject;
    variableFunDef!: Array<VariableFunDef>

    accept(visitor: RoboMLVisitor): any {
        return visitor.visitFunctionDec(this);
    }
}

export class Loop implements ASTInterfaces.Loop {
    $type!: 'Loop';
    booleanExpression?: Entry;
    instruction!: Array<Statement>; /*ASTInterfaces.Statement[];*/
    
    //variable!: Array<Variable>;

    accept(visitor: RoboMLVisitor): any {
        return visitor.visitLoop(this);
    }

}

export class Deplacement implements ASTInterfaces.Deplacement {
    $type!: 'Deplacement';
    deplacementDistance?: Entry;
    movementType?: ASTInterfaces.Direction;
    unitMeasure!: ASTInterfaces.UnitMeasure;

    accept(visitor: RoboMLVisitor): any {
        return visitor.visitDeplacement(this);
    }
}

export class Rotation implements ASTInterfaces.Rotation {
    $type!: 'Rotation';
    rotationAngle!: Entry
    rotationSens!: ASTInterfaces.RotationSens;

    accept(visitor: RoboMLVisitor): any {
        return visitor.visitRotation(this);
    }
}

export class Assignement implements ASTInterfaces.Assignement {
    $type!: 'Assignement';
    assignableVariable?: Reference<VariableRef>;
    entry!: Entry;

    accept(visitor: RoboMLVisitor): any {
        return visitor.visitAssignement(this);
    }
}


export class FunctionCall implements ASTInterfaces.FunctionCall {
    $type!: 'FunctionCall';
    arguments!: Array<Entry>;
    function!: Reference<FunctionDec>;  

    accept(visitor: RoboMLVisitor): any {
        return visitor.visitFunctionCall(this);
    }
}

export type ArithmeticOperators = ArithmeticOperators_Divide | ArithmeticOperators_Minus | ArithmeticOperators_Modulo | ArithmeticOperators_Multiplie | ArithmeticOperators_Plus | ArithmeticOperators_Power;
export type ArithmeticOperators_Divide = 'Divide';
export type ArithmeticOperators_Minus = 'Minus';
export type ArithmeticOperators_Modulo = 'Modulo';
export type ArithmeticOperators_Multiplie = 'Multiplie';
export type ArithmeticOperators_Plus = 'Plus';
export type ArithmeticOperators_Power = 'Power';

export class Expression implements ASTInterfaces.Expression {
    $type!: 'Expression';
    elementA!: Entry;
    elementB?: Entry;
    operator?: ASTInterfaces.Operators;

    accept(visitor: RoboMLVisitor): any {
        return visitor.visitExpression(this);
    }
}

/*
export class GetValue implements ASTInterfaces.GetValue {
    $type!: 'GetValue';
    accept(visitor: RoboMLVisitor): any {
        return visitor.visitGetValue(this);
    }
}
*/

export class VariableRef implements ASTInterfaces.VariableRef {
    $type!: 'VariableRef';
    variableDefinition!: Reference<VariableDef>;
}

export class VariableDef implements ASTInterfaces.VariableDef {
    $type!: 'VariableDef';
    variableName!: string;
    variableType!: ASTInterfaces.RMLObject;
    variableValue!: Entry;

    accept(visitor: RoboMLVisitor): any {
        return visitor.visitVariableDef(this);
    }

}

/*
export class Entity implements ASTInterfaces.Entity {
    $type!: 'ArithmeticExpression' | 'Entity' | 'FunctionCall' | 'GetValue' | 'VariableRef';
    entityType?: ASTInterfaces.RMLObject | undefined;
}
*/