grammar MyDsl
import 'Terminals'
import 'roboML-types'

entry RoboMLProgram returns RoboMLProgram:
    {RoboMLProgram} 'RoboMLProgram' '{' ('function' '{' function+=Function  ("," function+=Function  )* '}' )? '}'  
;

Statement returns Statement:
    Deplacement | Rotation | Loop | Assignement | SetValue | Condition 
;

Entity returns Entity:
    Entity_Impl | FunctionCall | ArithmeticExpression | GetValue | VariableRef 
;

Function returns Function:
    {Function} 'Function' '{' ('newAttribute' newAttribute=RMLObject  )? ('returnType' returnType=RMLObject  )? ('instruction' '{' instruction+=Statement  ("," instruction+=Statement  )* '}' )? ('variable' '{' variable+=Variable  ("," variable+=Variable  )* '}' )? '}'  
;

RMLObject returns RMLObject:
    RMLObject_RMLInt | RMLObject_RMLString | RMLObject_RMLFloat | RMLObject_RMLDouble | RMLObject_RMLBoolean
;
RMLObject_RMLInt returns RMLObject_RMLInt: 'RMLInt' ;
RMLObject_RMLString returns RMLObject_RMLString: 'RMLString' ;
RMLObject_RMLFloat returns RMLObject_RMLFloat: 'RMLFloat' ;
RMLObject_RMLDouble returns RMLObject_RMLDouble: 'RMLDouble' ;
RMLObject_RMLBoolean returns RMLObject_RMLBoolean: 'RMLBoolean' ;

Variable returns Variable:
    {Variable} 'Variable' '{' ('variableName' variableName=RMLObject  )? ('variableValue' variableValue=RMLObject  )? ('variableref' '{' variableref+=VariableRef  ("," variableref+=VariableRef  )* '}' )? '}'  
;

Deplacement returns Deplacement:
    'Deplacement' '{' ('movementType' movementType=Direction  )? 'unit' unit=[Unit:EString ] ('deplacementDistance' deplacementDistance=[Entity:EString ] )? '}'  
;

Rotation returns Rotation:
    'Rotation' '{' 'rotationAngle' rotationAngle=[Entity:EString ] 'rotationSens' rotationSens=[Entity:EString ] '}'  
;

Loop returns Loop:
    {Loop} 'Loop' '{' ('booleanExpression' booleanExpression=[Entity:EString ] )? ('instruction' '{' instruction+=Statement  ("," instruction+=Statement  )* '}' )? ('variable' '{' variable+=Variable  ("," variable+=Variable  )* '}' )? '}'  
;

Assignement returns Assignement:
    'Assignement' '{' ('assignableVariable' assignableVariable=[Variable:EString ] )? 'entity' entity=[Entity:EString ] '}'  
;

SetValue returns SetValue:
    'SetValue' '{' 'entityToSet' entityToSet=[Entity:EString ] '}'  
;

Condition returns Condition:
    {Condition} 'Condition' '{' ('booleanExpression' booleanExpression=[Entity:EString ] )? ('statementIf' '{' statementIf+=Statement  ("," statementIf+=Statement  )* '}' )? ('statementElse' '{' statementElse+=Statement  ("," statementElse+=Statement  )* '}' )? ('variable' '{' variable+=Variable  ("," variable+=Variable  )* '}' )? '}'  
;

Unit returns Unit:
    {Unit} 'Unit' '{' ('Type' Type=UnitMeasure  )? '}'  
;

Entity_Impl returns Entity:
    {Entity} 'Entity' '{' ('entityType' entityType=RMLObject  )? '}'  
;

Direction returns Direction:
    Direction_forward | Direction_backward | Direction_sideLeft | Direction_sideRight
;
Direction_forward returns Direction_forward: 'forward' ;
Direction_backward returns Direction_backward: 'backward' ;
Direction_sideLeft returns Direction_sideLeft: 'sideLeft' ;
Direction_sideRight returns Direction_sideRight: 'sideRight' ;

UnitMeasure returns UnitMeasure:
    UnitMeasure_m | UnitMeasure_dm | UnitMeasure_cm | UnitMeasure_mm
;
UnitMeasure_m returns UnitMeasure_m: 'm' ;
UnitMeasure_dm returns UnitMeasure_dm: 'dm' ;
UnitMeasure_cm returns UnitMeasure_cm: 'cm' ;
UnitMeasure_mm returns UnitMeasure_mm: 'mm' ;

FunctionCall returns FunctionCall:
    'FunctionCall' '{' ('entityType' entityType=RMLObject  )? 'function' function=[Function:EString ] '}'  
;

ArithmeticExpression returns ArithmeticExpression:
    'ArithmeticExpression' '{' ('entityType' entityType=RMLObject  )? ('arithmeticOperator' arithmeticOperator=ArithmeticOperators  )? 'elementA' elementA=[Entity:EString ] ('elementB' elementB=[Entity:EString ] )? ('variable' '{' variable+=Variable  ("," variable+=Variable  )* '}' )? '}'  
;

GetValue returns GetValue:
    {GetValue} 'GetValue' '{' ('entityType' entityType=RMLObject  )? '}'  
;

VariableRef returns VariableRef:
    {VariableRef} 'VariableRef' '{' ('entityType' entityType=RMLObject  )? '}'  
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

