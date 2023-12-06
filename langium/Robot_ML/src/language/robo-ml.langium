grammar RoboMl

import 'Terminals'
import 'roboML-types'

entry RoboMLProgram returns RoboMLProgram: //OK
    {RoboMLProgram} ( function+=FunctionDec )+
;

Statement returns Statement:   //TODO
    Deplacement | Rotation | Loop | Assignement | SetSpeed | Condition | VariableDef
;

Entry returns Entry:    //TODO
    FunctionCall | ArithmeticExpression | GetSpeed | VariableRef | STRING | INT
;

EntrySimple returns EntrySimple:    //TODO
    FunctionCall | GetSpeed | VariableRef | STRING | INT
;

FunctionDec returns FunctionDec: //OK
    {FunctionDec} 'let' ( 'void' | returnType=RMLObject ) functionName=ID '(' ( variableFunDef+=VariableFunDef  ("," variableFunDef+=VariableFunDef  )* )? ')' '{' ( instruction+=Statement )+ '}'  
;

RMLObject returns RMLObject: //OK
    RMLObject_RMLInt | RMLObject_RMLString | RMLObject_RMLFloat | RMLObject_RMLDouble | RMLObject_RMLBoolean
;
RMLObject_RMLInt returns RMLObject_RMLInt: 'RMLInt' ;
RMLObject_RMLString returns RMLObject_RMLString: 'RMLString' ;
RMLObject_RMLFloat returns RMLObject_RMLFloat: 'RMLFloat' ;
RMLObject_RMLDouble returns RMLObject_RMLDouble: 'RMLDouble' ;
RMLObject_RMLBoolean returns RMLObject_RMLBoolean: 'RMLBoolean' ;

VariableDef returns VariableDef: //OK
    {VariableDef} 'var' variableType=RMLObject variableName=ID '=' variableValue=RMLObject  
;

VariableFunDef returns VariableFunDef: //OK
    {VariableFunDef} variableName=ID ':' variableType=RMLObject
;

Deplacement returns Deplacement: //OK
    movementType=Direction deplacementDistance=INT unitMeasure=UnitMeasure
;

Rotation returns Rotation: //OK
    rotationSens=RotationSens rotationAngle=INT 
;
RotationSens returns RotationSens: 'Clock' | 'AntiClock' ;

Loop returns Loop:     //TODO
    {Loop} 'Loop' booleanExpression=Entry '{' ( instruction+=Statement  (";" instruction+=Statement  )* )? '}'  
;

Assignement returns Assignement:
    assignableVariable=[VariableRef:ID ] '=' entry=Entry
;

SetSpeed returns SetSpeed:
    'SetSpeed(' variableValue=INT unitMeasure=UnitMeasure ')'
;

Condition returns Condition:
    {Condition} 'if' '(' ( booleanExpression=Entry )? ')' '{' statementIf+=Statement  ("," statementIf+=Statement  )* '}' ('else' '{' statementElse+=Statement  ("," statementElse+=Statement  )* '}' )?
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

ArithmeticExpression returns ArithmeticExpression:
    elementA=EntrySimple arithmeticOperator=ArithmeticOperators elementB=Entry
;

GetSpeed returns GetSpeed:
    {GetSpeed} 'GetSpeed()'  
;

VariableRef returns VariableRef:
    {VariableRef} VariableDef=[VariableDef:ID ]
;

ArithmeticOperators returns ArithmeticOperators:
    ArithmeticOperators_Plus | ArithmeticOperators_Minus | ArithmeticOperators_Multiplie | ArithmeticOperators_Divide | ArithmeticOperators_Modulo | ArithmeticOperators_Power
;
ArithmeticOperators_Plus returns ArithmeticOperators_Plus: 'Plus' ;
ArithmeticOperators_Minus returns ArithmeticOperators_Minus: 'Minus' ;
ArithmeticOperators_Multiplie returns ArithmeticOperators_Multiplie: 'Multiplie' ;
ArithmeticOperators_Divide returns ArithmeticOperators_Divide: 'Divide' ;
ArithmeticOperators_Modulo returns ArithmeticOperators_Modulo: 'Modulo' ;
ArithmeticOperators_Power returns ArithmeticOperators_Power: 'Power' ;

EString returns string:
    STRING | ID 
;

