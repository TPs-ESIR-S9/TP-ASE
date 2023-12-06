grammar RoboMl

import 'Terminals'
import 'roboML-types'

entry RoboMLProgram returns RoboMLProgram: //OK
    {RoboMLProgram} ( function+=FunctionDec )+
;

Statement returns Statement:   //OK
    Deplacement | Rotation | Loop | Assignement | SetSpeed | SetRotation | Condition | VariableDef
;

Entry returns Entry:    //OK
    FunctionCall | Expression | GetSpeed | VariableRef | STRING | DOUBLE | INT | BOOLEAN
;

EntrySimple returns EntrySimple:    //OK
    FunctionCall | GetSpeed | VariableRef | STRING | DOUBLE | INT | BOOLEAN
;

FunctionDec returns FunctionDec: //OK
    {FunctionDec} 'let' ( 'void' | returnType=RMLObject ) functionName=ID '(' ( variableFunDef+=VariableFunDef  ("," variableFunDef+=VariableFunDef  )* )? ')' '{' ( instruction+=Statement )+ '}'  
;

RMLObject returns RMLObject: //OK
    RMLObject_RMLInt | RMLObject_RMLString | RMLObject_RMLDouble | RMLObject_RMLBoolean
;
RMLObject_RMLInt returns RMLObject_RMLInt: 'RMLInt' ;
RMLObject_RMLString returns RMLObject_RMLString: 'RMLString' ;
RMLObject_RMLDouble returns RMLObject_RMLDouble: 'RMLDouble' ;
RMLObject_RMLBoolean returns RMLObject_RMLBoolean: 'RMLBoolean' ;

VariableDef returns VariableDef: //OK
    {VariableDef} 'var' variableType=RMLObject variableName=ID '=' variableValue=Entry
;

VariableFunDef returns VariableFunDef: //OK
    {VariableFunDef} variableType=RMLObject variableName=ID 
;

Deplacement returns Deplacement: //OK
    movementType=Direction deplacementDistance=Entry unitMeasure=UnitMeasure
;

Rotation returns Rotation: //OK
    rotationSens=RotationSens rotationAngle=Entry
;
RotationSens returns RotationSens: 'Clock' | 'AntiClock' ;

Loop returns Loop: //OK
    {Loop} 'loop' booleanExpression=Entry '{' ( instruction+=Statement )+ '}'  
;

Assignement returns Assignement: //OK
    assignableVariable=[VariableRef:ID] '=' entry=Entry
;

SetSpeed returns SetSpeed: //OK
    'setSpeed(' variableValue=Entry unitMeasure=UnitMeasure ')'
;

SetRotation returns SetRotation: //OK
    'setRotation(' variableValue=Entry ')'
;

Condition returns Condition:
    {Condition} 'if' '(' ( booleanExpression=Entry )? ')' '{' ( statementIf+=Statement )* '}' ('else' '{' ( statementElse+=Statement )* '}' )?
;

Unit returns Unit:
    {Unit} 'Unit' '{' ('Type' Type=UnitMeasure  )? '}'  
;

Direction returns Direction:
    Direction_forward | Direction_backward | Direction_sideLeft | Direction_sideRight
;
Direction_forward returns Direction_forward: 'Forward' ;
Direction_backward returns Direction_backward: 'Backward' ;
Direction_sideLeft returns Direction_sideLeft: 'SideLeft' ;
Direction_sideRight returns Direction_sideRight: 'SideRight' ;

UnitMeasure returns UnitMeasure:
    UnitMeasure_m | UnitMeasure_dm | UnitMeasure_cm | UnitMeasure_mm
;
UnitMeasure_m returns UnitMeasure_m: 'm' ;
UnitMeasure_dm returns UnitMeasure_dm: 'dm' ;
UnitMeasure_cm returns UnitMeasure_cm: 'cm' ;
UnitMeasure_mm returns UnitMeasure_mm: 'mm' ;

FunctionCall returns FunctionCall:
    function=[FunctionDec:ID ] '(' ( arguments+=Entry  ("," arguments+=Entry  )* )? ')'  
;

Expression returns Expression:
    elementA=EntrySimple operator=Operators elementB=Entry
;

GetSpeed returns GetSpeed:
    {GetSpeed} 'getSpeed()'  
;

GetRotation returns GetRotation:
    {GetRotation} 'getRotation()'
;

VariableRef returns VariableRef:
    {VariableRef} variableDefinition=[VariableDef:ID]
;

Operators returns Operators:
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


EString returns string:
    STRING | ID 
;

