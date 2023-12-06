
type RMLObject = RMLObject_RMLInt | RMLObject_RMLString | RMLObject_RMLDouble | RMLObject_RMLBoolean;
type RMLObject_RMLInt = 'RMLInt';
type RMLObject_RMLString = 'RMLString';
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

type Operators = Operators_Plus | Operators_Minus | Operators_Multiplie | Operators_Divide | Operators_Modulo | Operators_Power | Operators_Equal | Operators_NotEqual | Operators_Greater | Operators_Less | Operators_GreaterEqual | Operators_LessEqual | Operators_And | Operators_Or | Operators_Not;
type Operators_Plus = '+';
type Operators_Minus = '-';
type Operators_Multiplie = '*';
type Operators_Divide = '/';
type Operators_Modulo = '%';
type Operators_Power = '**';
type Operators_Equal = '==';
type Operators_NotEqual = '!=';
type Operators_Greater = '>';
type Operators_Less = '<';
type Operators_GreaterEqual = '>=';
type Operators_LessEqual = '<=';
type Operators_And = '&&';
type Operators_Or = '||';
type Operators_Not = '!';

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
	variableType: RMLObject
	variableValue: Entry
}

interface VariableFunDef {
	variableName: string
	variableType: RMLObject
}

interface VariableRef extends Entry {
	variableDefinition: @VariableDef
}

interface Entry {
}

interface EntrySimple extends Entry {
}

interface Deplacement extends Statement {
	unitMeasure: UnitMeasure
	deplacementDistance?: Entry
	movementType?: Direction
}

interface Unit {
	Type?: UnitMeasure
}

interface Rotation extends Statement {
	rotationAngle: Entry
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
	variableValue: Entry
	unitMeasure: UnitMeasure
}

interface SetRotation extends Statement {
	variableValue: Entry
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

interface Expression extends Entry {
	elementA: Entry
	elementB?: Entry
	operator?: Operators
}

interface GetSpeed extends Entry {
}

interface GetRotation extends Entry {
}

