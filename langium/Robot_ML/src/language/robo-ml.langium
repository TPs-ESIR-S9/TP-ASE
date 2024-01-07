grammar RoboMl

import 'Terminals'
import 'roboML-types'

entry RoboMLProgram returns RoboMLProgram: //OK
    {RoboMLProgram} ( function+=FunctionDec )+
;

Statement returns Statement:   //OK
    FunctionCall | Deplacement | Rotation | Loop | Assignement | SetSpeed | SetRotation | Condition | VariableDef
;

Entry returns Entry:    //OK
    Expression | EntrySimple
;

EntrySimple returns EntrySimple:    //OK
    FunctionCall | GetSpeed | GetRotation | RMLInt | RMLBoolean | VariableRef
;

FunctionDec returns FunctionDec: //OK
    'let' ( 'void' | returnType=RMLObject ) functionName=ID '(' ( variableFunDef+=VariableFunDef  ("," variableFunDef+=VariableFunDef  )* )? ')' '{' ( instruction+=Statement )+ ('return' returnEntry=Entry)? '}'  
;

RMLObject returns RMLObject: //OK
    RMLObject_RMLInt | RMLObject_RMLBoolean
;
RMLObject_RMLInt returns RMLObject_RMLInt: 'RMLInt' ;
RMLObject_RMLBoolean returns RMLObject_RMLBoolean: 'RMLBoolean' ;

VariableDef returns VariableDef: //OK
    'var' variableType=RMLObject variableName=ID '=' variableValue=Entry
;

VariableFunDef returns VariableFunDef: //OK
    variableType=RMLObject variableName=ID 
;

Deplacement returns Deplacement: //OK
    movementType=Direction deplacementDistance=Entry unitMeasure=UnitMeasure
;

Rotation returns Rotation: //OK
    rotationSens=RotationSens rotationAngle=Entry
;
RotationSens returns RotationSens: 'Clock' | 'AntiClock' ;

Loop returns Loop: //OK
    'loop' booleanExpression=Entry '{' ( instruction+=Statement )+ '}'  
;

Assignement returns Assignement: //OK
    assignableVariable=ID '=' entry=Entry
;

SetSpeed returns SetSpeed: //OK
    'setSpeed(' variableValue=Entry unitMeasure=UnitMeasure ')'
;

SetRotation returns SetRotation: //OK
    'setRotation(' variableValue=Entry ')'
;

Condition returns Condition: //OK
    'if' '(' ( booleanExpression=Entry )? ')' '{' ( statementIf+=Statement )* '}' ('else' '{' ( statementElse+=Statement )* '}' )?
;

Direction returns Direction: //OK
    Direction_forward | Direction_backward | Direction_sideLeft | Direction_sideRight
;
Direction_forward returns Direction_forward: 'Forward' ;
Direction_backward returns Direction_backward: 'Backward' ;
Direction_sideLeft returns Direction_sideLeft: 'SideLeft' ;
Direction_sideRight returns Direction_sideRight: 'SideRight' ;

UnitMeasure returns UnitMeasure: //OK
    UnitMeasure_m | UnitMeasure_dm | UnitMeasure_cm | UnitMeasure_mm
;
UnitMeasure_m returns UnitMeasure_m: 'm' ;
UnitMeasure_dm returns UnitMeasure_dm: 'dm' ;
UnitMeasure_cm returns UnitMeasure_cm: 'cm' ;
UnitMeasure_mm returns UnitMeasure_mm: 'mm' ;

FunctionCall returns FunctionCall: //OK
    function=ID '(' ( arguments+=Entry  ("," arguments+=Entry  )* )? ')'  
;

Expression returns Expression:  //OK
    elementA=EntrySimple operator=Operators elementB=Entry
;

GetSpeed returns GetSpeed: //OK
    {GetSpeed} 'getSpeed()'  
;

GetRotation returns GetRotation: //OK
    {GetRotation} 'getRotation()'
;

VariableRef returns VariableRef:  //OK
    variableDefinition=ID
;

Operators returns Operators:  //OK
    Operators_Plus | Operators_Minus | Operators_Multiplie | Operators_Divide | Operators_Modulo | Operators_Power | Operators_Equal | Operators_NotEqual | Operators_Greater | Operators_Less | Operators_GreaterEqual | Operators_LessEqual | Operators_And | Operators_Or | Operators_Not
;
Operators_Plus returns Operators_Plus: '+' ;
Operators_Minus returns Operators_Minus: '-' ;
Operators_Multiplie returns Operators_Multiplie: '*' ;
Operators_Divide returns Operators_Divide: '/' ;
Operators_Modulo returns Operators_Modulo: '%' ;
Operators_Power returns Operators_Power: '**' ;
Operators_Equal returns Operators_Equal: '==' ;
Operators_NotEqual returns Operators_NotEqual: '!=' ;
Operators_Greater returns Operators_Greater: '>' ;
Operators_Less returns Operators_Less: '<' ;
Operators_GreaterEqual returns Operators_GreaterEqual: '>=' ;
Operators_LessEqual returns Operators_LessEqual: '<=' ;
Operators_And returns Operators_And: '&&' ;
Operators_Or returns Operators_Or: '||' ;
Operators_Not returns Operators_Not: '!' ;

RMLInt returns RMLInt: //OK
    value=EInt;

RMLBoolean returns RMLBoolean: //OK
    value=EBoolean;

EInt returns number: //OK
    '-'? INT;

EBoolean returns boolean: //OK
    'true' | 'false'
;