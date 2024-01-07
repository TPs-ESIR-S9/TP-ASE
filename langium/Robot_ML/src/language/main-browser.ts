import { EmptyFileSystem, URI, /*URI,*/ startLanguageServer } from 'langium';
import { BrowserMessageReader, BrowserMessageWriter, createConnection } from 'vscode-languageserver/browser.js';
import { createRoboMlServices } from './robo-ml-module.js';
import { Assignement, Condition, Deplacement, Entry, EntrySimple, Expression, FunctionCall, FunctionDec, GetRotation, GetSpeed, Loop, RoboMLProgram, RoboMLVisitor, Rotation, SetRotation, SetSpeed, Statement, VariableDef, VariableFunDef, VariableRef } from './visitor.js';
import { RMLBoolean, RMLInt } from './generated/ast.js';

declare const self: DedicatedWorkerGlobalScope;

const messageReader = new BrowserMessageReader(self);
const messageWriter = new BrowserMessageWriter(self);

const connection = createConnection(messageReader, messageWriter);

const { shared, RoboMl } = createRoboMlServices({ connection, ...EmptyFileSystem });

const functionsDecs: FunctionDec[] = [];

startLanguageServer(shared);

export class InterpretorVisitor implements RoboMLVisitor {
    
    variables = new Map<string, any>();
    statementsToSend = [];

    global_rotation = 1;
    global_speed = 1;

    visitRoboMLProgram(node: RoboMLProgram) {
        console.log("on donne le go");
        functionsDecs.length = 0;
        for(const f of node.function) {
            functionsDecs.push({
                $type: 'FunctionDec',
                functionName: f.functionName,
                variableFunDef: f.variableFunDef,
                returnType: f.returnType,
                instruction: f.instruction,
                $container: new RoboMLProgram,
                accept: function (visitor: RoboMLVisitor) {}
            });

            try {                
                f.accept(this);
            } catch (error) {
                console.error('Error during accept:', error);
            }
        }
    }
    
    visitAssignement(node: Assignement) {
        
        const vToAssing = node.assignableVariable;

        if (vToAssing !== undefined) {
            if (this.variables.has(vToAssing)) {
                this.variables.set(vToAssing, (node.entry as Entry).accept(this));
            } else {       
                throw new Error(`Variable ${vToAssing} not found`);
            }
        }

    }
    
    visitCondition(node: Condition) {
        console.log("condition");
        
        let condStatus:boolean = node.booleanExpression.accept(this);
        console.log("condition status : ", condStatus);

        if(condStatus == true) {
            node.statementIf.forEach(statement => {
                statement.accept(this);
            });
        } else {
            node.statementElse.forEach(statement => {
                statement.accept(this);
            });
        }
    }

    // function to delay execution 
    async delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }
   
    visitEntry(node: Entry) {
    }

    visitEntrySimple(node: EntrySimple) {

        console.log("  ENTRY SIMPLE  ");

        // "GetRotation" | "GetSpeed" | "FunctionCall" | "RMLBoolean" | "RMLInt" | "VariableRef"
        switch(node.$type) {

            case 'GetRotation':
                return this.visitGetRotation(node as GetRotation);
                
            case 'GetSpeed':
                return this.visitGetSpeed(node as GetSpeed);
                
            case 'FunctionCall':
                return this.visitFunctionCall(node as FunctionCall);
                
            case 'RMLBoolean':
                return (node as unknown as RMLBoolean).value;
            
            case 'RMLInt':
                return (node as unknown as RMLInt).value;
                
            case 'VariableRef':
                return this.visitVariableRef(node as unknown as VariableRef);
                
            default:
                throw new Error(`Unhandled entry type: ${node.$type}`);
        }
    }
    
    visitExpression(node: Expression) {
        console.log("bonjour je suis une expression");

        switch(node.operator) {
            case '+':
                return Number(node.elementA.accept(this)) + Number(node.elementB?.accept(this));
            case '-':
                return Number(node.elementA.accept(this)) - Number(node.elementB?.accept(this));
            case '*':
                return Number(node.elementA.accept(this)) * Number(node.elementB?.accept(this));
            case '/':
                return Number(node.elementA.accept(this)) / Number(node.elementB?.accept(this));
            case '%':
                return Number(node.elementA.accept(this)) % Number(node.elementB?.accept(this));
            case '<':
                return Number(node.elementA.accept(this)) < Number(node.elementB?.accept(this));
            case '>':
                return Number(node.elementA.accept(this)) > Number(node.elementB?.accept(this));
            case '<=':
                return Number(node.elementA.accept(this)) <= Number(node.elementB?.accept(this));
            case '>=':
                return Number(node.elementA.accept(this)) >= Number(node.elementB?.accept(this));
            case '==':
                return node.elementA.accept(this) == node.elementB?.accept(this);
            case '!=':
                return node.elementA.accept(this) != node.elementB?.accept(this);
            case '&&':
                return node.elementA.accept(this) && node.elementB?.accept(this);
            case '||':
                return node.elementA.accept(this) || node.elementB?.accept(this);
            case '!':
                return !node.elementA.accept(this);
            case '**':
                return node.elementA.accept(this) ** node.elementB?.accept(this);
            default:
                throw new Error(`Unhandled operator type: ${node.operator}`);
        }
    }

    visitFunctionCall(node: FunctionCall) {
        
        let functionDec = functionsDecs.find(functionDec => functionDec.functionName === node.function);
        
        if(functionDec) {

            node.arguments.forEach(argument => {
                argument.accept(this);  
            });

            functionDec?.instruction.forEach(statement => {
                statement.accept(this);
            });

        } else {
            throw new Error(`Function ${node.function} not found`);
        }
        
        // fais en sorte que pour chaque argument de la fonction appellée, on invoque la fonction avec la valeur correcte de l'argument
   
    }

    visitFunctionDec(node: FunctionDec) {

        if(node.functionName == "main") {
                node.instruction.forEach(statement => {
                    statement.accept(this);
                });
            }  
    }

    visitGetRotation(node: GetRotation) {
        return this.global_rotation;
    }

    visitGetSpeed(node: GetSpeed) {
        return this.global_speed;
    }

    visitLoop(node: Loop) {

        let stat:boolean = node.booleanExpression.accept(this);
        console.log("loop status  : ", stat);

        if(stat) {
            stat = node.booleanExpression.accept(this);
            console.log("loop status  : ", stat);
            node.instruction.forEach(statement => {
                statement.accept(this);
            });
            this.visitLoop(node);
        }
    }

    async visitDeplacement(node: Deplacement) {
        let deplacementDistance =  this.visitEntrySimple(node.deplacementDistance as unknown as EntrySimple);
        let movementType = node.movementType;
        console.log("unitMeasure : ", node.unitMeasure);
        console.log("deplacementDistance : ", deplacementDistance);
        switch(node.unitMeasure) {
            case 'm':
                deplacementDistance = deplacementDistance * 100;
                break;
            case 'dm':
                deplacementDistance = deplacementDistance * 10;
                break;
            case 'cm':
                break;
            case 'mm':
                deplacementDistance = deplacementDistance / 10;
                break;
            default:
                throw new Error(`Unhandled unitMeasure type: ${node.unitMeasure}`);
        }
        console.log("deplacementDistance : ", deplacementDistance);
        connection.sendNotification('browser/sendStatements', [{ type: movementType, Value: Number(deplacementDistance) }]);
    }
    
    async visitRotation(node: Rotation) {
        const rotateval = Number(node.rotationAngle.accept(this));
        connection.sendNotification('browser/sendStatements', [{ type: node.rotationSens, Value: rotateval }]);
    }

    visitSetRotation(node: SetRotation) {
        let rotation =  Number(node.variableValue.accept(this));
        this.global_rotation = rotation;
        connection.sendNotification('browser/sendStatements', [{ type: 'SetRotation', Value: rotation }]);
    }
    
    visitSetSpeed(node: SetSpeed) {
        let speed =  Number(node.variableValue.accept(this));
        switch(node.unitMeasure) {
            case 'm':
                speed = speed * 100;
                break;
            case 'dm':
                speed = speed * 10;
                break;
            case 'cm':
                break;
            case 'mm':
                speed = speed / 10;
                break;
            default:
                throw new Error(`Unhandled unitMeasure type: ${node.unitMeasure}`);
        }
        this.global_speed = speed;
        connection.sendNotification('browser/sendStatements', [{ type: 'SetSpeed', Value: speed }]);
    }

    async visitStatement(node: Statement) {
        switch(node.$type) {
            case 'Assignement':
                this.visitAssignement(node as Assignement);
                break;
            case 'Condition':
                this.visitCondition(node as Condition);
                break;
            case 'Deplacement':
                this.visitDeplacement(node as Deplacement);
                break;
            case 'Loop':
                this.visitLoop(node as Loop);
                break;
            case 'Rotation':
                //await new Promise(r => setTimeout(r, 20));
                this.visitRotation(node as Rotation);
                break;
            case 'SetSpeed':
                this.visitSetSpeed(node as SetSpeed);
                break;
            case 'SetRotation':
                this.visitSetSpeed(node as SetSpeed);
                break;
            default:
                throw new Error(`Unhandled statement type: ${node.$type}`);
            }
    }
    
    visitVariableDef(node: VariableDef) {

        let val = node.variableValue.accept(this);
        this.variables.set(node.variableName, val);

        return val;
    }

    visitVariableFunDef(node: VariableFunDef) {
        const vToAssing = node.variableName;
        const vType = node.variableType;
        console.log("variable name : ", vToAssing);
        console.log("variable type : ", vType);
    }

    visitVariableRef(node: VariableRef) {
        if(this.variables.has(node.variableDefinition)) {
            return this.variables.get(node.variableDefinition);
        } else {
            throw new Error(`Variable ${node.variableDefinition} not found`);
        }
    }
}

connection.onNotification('browser/execute', async params => {

    const program = params.content;
    const doc = shared.workspace.LangiumDocumentFactory.fromString<RoboMLProgram>(program, URI.parse("memory://Rob.document"));  

    //const doc = RoboMl.shared.workspace.LangiumDocumentFactory.fromString<RoboMLProgram>;

    await RoboMl.shared.workspace.DocumentBuilder.build([doc], { validation: true});
    
    const roboMLProgram: RoboMLProgram | undefined = doc.parseResult.value;

    let interpretorVisitor = new InterpretorVisitor();
    console.log(interpretorVisitor.visitRoboMLProgram(roboMLProgram));
    connection.sendNotification('browser/finishCompilation', {});

});


export class RobotMovement {
    type: 'Forward' | 'Rotate' | 'SetSpeed' | 'SetRotation' | 'Other';
    value?: number;

    constructor(type: 'Forward' | 'Rotate' | 'SetSpeed' | 'SetRotation' | 'Other', value?: number) {
        this.type = type;
        this.value = value;
    }
}