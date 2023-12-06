
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
type Direction_forward = 'Forward';
type Direction_backward = 'Backward';
type Direction_sideLeft = 'SideLeft';
type Direction_sideRight = 'SideRight';

type ArithmeticOperators = ArithmeticOperators_Plus | ArithmeticOperators_Minus | ArithmeticOperators_Multiplie | ArithmeticOperators_Divide | ArithmeticOperators_Modulo | ArithmeticOperators_Power;
type ArithmeticOperators_Plus = 'Plus';
type ArithmeticOperators_Minus = 'Minus';
type ArithmeticOperators_Multiplie = 'Multiplie';
type ArithmeticOperators_Divide = 'Divide';
type ArithmeticOperators_Modulo = 'Modulo';
type ArithmeticOperators_Power = 'Power';

type RotationSens = Rotation_clock | Rotation_antiClock;
type Rotation_clock = 'Clock';
type Rotation_antiClock = 'AntiClock';

interface RoboMLProgram {
	function: FunctionDec[]
}

interface FunctionDec {
	instruction: Statement[]
	functionName: string
	returnType?: RMLObject
	variableFunDef: VariableFunDef[]
}

interface Statement {
}

interface VariableDef {
	variableName: string
	variableValue: RMLObject
	variableType: RMLObject
}

interface VariableFunDef {
	variableName: string
	variableType: RMLObject
}

interface VariableRef extends Entry {
	VariableDef: @VariableDef
}

interface Entry {
}

interface EntrySimple extends Entry {
}

interface Deplacement extends Statement {
	unitMeasure: UnitMeasure
	deplacementDistance?: number
	movementType?: Direction
}

interface Unit {
	Type?: UnitMeasure
}

interface Rotation extends Statement {
	rotationAngle: number
	rotationSens: RotationSens
}

interface Loop extends Statement {
	instruction: Statement[]
	booleanExpression?: Entry
}

interface Assignement extends Statement {
	assignableVariable?: @VariableRef
	entry: Entry
}

interface SetSpeed extends Statement {
	variableValue: number
	unitMeasure: UnitMeasure
}

interface Condition extends Statement {
	statementIf: Statement[]
	statementElse: Statement[]
	booleanExpression?: Entry
}

interface FunctionCall extends Entry {
	arguments: Entry[]
	function: @FunctionDec
}

interface ArithmeticExpression extends Entry {
	elementA: Entry
	elementB?: Entry
	arithmeticOperator?: ArithmeticOperators
}

interface GetSpeed extends Entry {
}

