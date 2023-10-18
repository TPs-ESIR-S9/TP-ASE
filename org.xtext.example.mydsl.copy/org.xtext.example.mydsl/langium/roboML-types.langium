
type RMLObject = RMLObject_RMLInt | RMLObject_RMLString | RMLObject_RMLFloat | RMLObject_RMLDouble | RMLObject_RMLBoolean;
type RMLObject_RMLInt = 'RMLInt';
type RMLObject_RMLString = 'RMLString';
type RMLObject_RMLFloat = 'RMLFloat';
type RMLObject_RMLDouble = 'RMLDouble';
type RMLObject_RMLBoolean = 'RMLBoolean';

type UnitMeasure = UnitMeasure_m | UnitMeasure_dm | UnitMeasure_cm | UnitMeasure_mm;
type UnitMeasure_m = 'm';
type UnitMeasure_dm = 'dm';
type UnitMeasure_cm = 'cm';
type UnitMeasure_mm = 'mm';

type Direction = Direction_forward | Direction_backward | Direction_sideLeft | Direction_sideRight;
type Direction_forward = 'forward';
type Direction_backward = 'backward';
type Direction_sideLeft = 'sideLeft';
type Direction_sideRight = 'sideRight';

type ArithmeticOperators = ArithmeticOperators_Plus | ArithmeticOperators_Minus | ArithmeticOperators_Multiplie | ArithmeticOperators_Divide | ArithmeticOperators_Modulo | ArithmeticOperators_Power;
type ArithmeticOperators_Plus = 'Plus';
type ArithmeticOperators_Minus = 'Minus';
type ArithmeticOperators_Multiplie = 'Multiplie';
type ArithmeticOperators_Divide = 'Divide';
type ArithmeticOperators_Modulo = 'Modulo';
type ArithmeticOperators_Power = 'Power';

interface RoboMLProgram {
	function: Function[]
}

interface Function {
	instruction: Statement[]
	newAttribute?: RMLObject
	returnType?: RMLObject
	variable: Variable[]
}

interface Statement {
}

interface Variable {
	variableName?: RMLObject
	variableValue?: RMLObject
	variableref: VariableRef[]
}

interface VariableRef extends Entity {
}

interface Entity {
	entityType?: RMLObject
}

interface Deplacement extends Statement {
	unit: @Unit
	deplacementDistance?: @Entity
	movementType?: Direction
}

interface Unit {
	Type?: UnitMeasure
}

interface Rotation extends Statement {
	rotationAngle: @Entity
	rotationSens: @Entity
}

interface Loop extends Statement {
	instruction: Statement[]
	variable: Variable[]
	booleanExpression?: @Entity
}

interface Assignement extends Statement {
	assignableVariable?: @Variable
	entity: @Entity
}

interface SetValue extends Statement {
	entityToSet: @Entity
}

interface Condition extends Statement {
	statementIf: Statement[]
	statementElse: Statement[]
	variable: Variable[]
	booleanExpression?: @Entity
}

interface FunctionCall extends Entity {
	function: @Function
}

interface ArithmeticExpression extends Entity {
	variable: Variable[]
	elementA: @Entity
	elementB?: @Entity
	arithmeticOperator?: ArithmeticOperators
}

interface GetValue extends Entity {
}

