import { EmptyFileSystem, URI, /*URI,*/ startLanguageServer } from 'langium';
import { BrowserMessageReader, BrowserMessageWriter, createConnection } from 'vscode-languageserver/browser.js';
import { createRoboMlServices } from './robo-ml-module.js';
//import { weaveAcceptMethods } from './accept-weaver.js';
import { Assignement, Condition, Deplacement, Entry, EntrySimple, Expression, FunctionCall, FunctionDec, GetRotation, GetSpeed, Loop, RoboMLProgram, RoboMLVisitor, Rotation, SetRotation, SetSpeed, Statement, VariableDef, VariableFunDef, VariableRef } from './visitor.js';
import { RMLBoolean, RMLInt } from './generated/ast.js';
//import { extractAstNode } from '../cli/cli-util.js';
//import { RoboMLVisitor } from './visitor.js';

declare const self: DedicatedWorkerGlobalScope;

const messageReader = new BrowserMessageReader(self);
const messageWriter = new BrowserMessageWriter(self);

const connection = createConnection(messageReader, messageWriter);

const { shared, RoboMl } = createRoboMlServices({ connection, ...EmptyFileSystem });

const functionsDecs: FunctionDec[] = [];

startLanguageServer(shared);

    // const statements = [
    //     { type: 'Forward', Value: 100 },
    //     { type: 'Rotate', Value: (300 as Number) },
    //     { type: 'Forward', Value: 100 },
    //     { type: 'Rotate', Value: (300 as Number) },
    //     { type: 'Forward', Value: 100 },
    //     { type: 'Rotate', Value: (300 as Number) }
    //   ]

    // // console.log(statements);
    // connection.sendNotification('browser/sendStatements', statements);
    
//let myMap = new Map<string, Statement[]>();

// const global_speed = 1;
// const global_rotation = 1;

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

        //let vValue = (node.entry as string);
        // if (typeof vValue !== 'string') {
        //     vValue = vValue.accept(this);
        // }
        //console.log("vToAssing : ", vValue);
        console.log(this.variables);

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

        // node.statementIf.forEach(statement => {
        //     console.log(" : ", statement);
        //     statement.accept(this);
        // });
        // node.statementElse.forEach(statement => {
        //     console.log(" : ", statement);
        //     statement.accept(this);
        // });
    }

    // function to delay execution 
    async delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }
    
    async visitDeplacement(node: Deplacement) {
        
        let deplacementDistance =  this.visitEntrySimple(node.deplacementDistance as unknown as EntrySimple);
        let movementType = node.movementType;
        
        //let unitMeasure = node.unitMeasure;
        
        // const statements = [
        //     { type: 'Forward', Value: 100 },
        //     { type: 'Rotate', Value: (300 as Number) },
        //     { type: 'Forward', Value: 100 },
        //     { type: 'Rotate', Value: (300 as Number) },
        //     { type: 'Forward', Value: 100 },
        //     { type: 'Rotate', Value: (300 as Number) }
        //   ]

        // // console.log(statements);
        // connection.sendNotification('browser/sendStatements', statements);
        
        //console.log("deplacementDistance : ", deplacementDistance);
        
        connection.sendNotification('browser/sendStatements', [{ type: movementType, Value: Number(deplacementDistance) }]);
        
        //this.visitEntrySimple(node.deplacementDistance as EntrySimple);
    }
    
   

    visitEntry(node: Entry) {

        console.log("  ENTRY  ");

        switch((node as Entry).$type) {

            case 'EntrySimple':
                console.log("entrysimmmple", this.visitEntrySimple(node as unknown as EntrySimple));
                    
            case 'Expression':
                console.log("expressionnnn:", this.visitExpression(node as Expression));
                //this.visitExpression(node as Expression);

            default:
                throw new Error(`Unhandled entry type: ${node.$type}`);
     
        }
    }

    visitEntrySimple(node: EntrySimple) {

        console.log("  ENTRY SIMPLE  ");

        // "GetRotation" | "GetSpeed" | "FunctionCall" | "RMLBoolean" | "RMLInt" | "VariableRef"
        switch(node.$type) {

            case 'GetRotation':
                this.visitGetRotation(node as GetRotation);
                
            case 'GetSpeed':
                this.visitGetSpeed(node as GetSpeed);
                
            case 'FunctionCall':
                this.visitFunctionCall(node as FunctionCall);
                
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
        //return node.elementA.accept(this) + (node.operator && node.elementB)? + " " + node.operator! + " " + node.elementB!.accept(this);
    }

    visitFunctionCall(node: FunctionCall) {
        
        let functionDec = functionsDecs.find(functionDec => functionDec.functionName === node.function);
        
        if(functionDec) {
            console.log("functionDec found : ", functionDec);
            //functionDec.accept(this);

            let arg = 0;
            node.arguments.forEach(argument => {
                arg = argument.accept(this);
                console.log("arg : ", arg);   
            });

            functionDec?.instruction.forEach(statement => {
                statement.accept(this);
                console.log("statement : ", statement);
            });

        } else {
            throw new Error(`Function ${node.function} not found`);
        }
        
        // fais en sorte que pour chaque argument de la fonction appellée, on invoque la fonction avec la valeur correcte de l'argument
   
    }

    visitFunctionDec(node: FunctionDec) {

        //console.log(parameters);
        if(node.functionName == "main") {
                node.instruction.forEach(statement => {
                //console.log("insttt : ", statement);
                    statement.accept(this);
                //instruction.accept(this);
                });
            }  
        }

    visitGetRotation(node: GetRotation) {
        // console.log("getrotation");
    }

    visitGetSpeed(node: GetSpeed) {
        console.log("getspeed to implement");
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

    async visitRotation(node: Rotation) {
        let rotAngle = node.rotationAngle.accept(this);
        connection.sendNotification('browser/sendStatements', [{ type: 'Rotate', Value: Number(rotAngle) }]);
    }

    visitSetRotation(node: SetRotation) {
        console.log("setrotation to implement");
    }
    
    visitSetSpeed(node: SetSpeed) {
        console.log("setspeed to implement");
    }

    async visitStatement(node: Statement) {
        switch(node.$type) {
            case 'Assignement':
                this.visitAssignement(node as Assignement);
                //     { type: 'Rotate', Value: (300 as Number) }
                //return (node as Assignement).assignableVariable + " = " + (node as Assignement).entry.accept(this) + ";";
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
        //         console.log("Statement type not handled");
        //         break;
        // 
            }
       //node.accept(this);
        //console.log(node);
    }
    
    visitVariableDef(node: VariableDef) {

        let val = node.variableValue.accept(this);
        this.variables.set(node.variableName, val);
        console.log(this.variables);

        return val;
    }

    visitVariableFunDef(node: VariableFunDef) {
        console.log("variableFunDef to implement");
        //console.log("variable fun def !!!");
        //console.log("couin couin");
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
   
    //const parseResult = shared.workspace.LangiumDocumentFactory.fromString<RoboMLProgram>(params.content, URI.parse("memory://Rob.document"));
    //await RoboMl.shared.workspace.DocumentBuilder.build([parseResult], { validation: true});

    //const doc = RoboMl.shared.workspace.LangiumDocumentFactory.fromString<RoboMLProgram>;

    await RoboMl.shared.workspace.DocumentBuilder.build([doc], { validation: true});
    
    const roboMLProgram: RoboMLProgram | undefined = doc.parseResult.value;

    let interpretorVisitor = new InterpretorVisitor();
    console.log(interpretorVisitor.visitRoboMLProgram(roboMLProgram));

    //const roboMLProgram: RoboMLProgram | undefined = doc.parseResult.value;
    
    // if (roboMLProgram) {
    
    //     console.log("ok go");
    //     //generateRobotMovements(roboMLProgram);
    
    // } else {
    //     // Handle the case where the root element is not of type RoboMLProgram
    //     console.error('The root element is not of type RoboMLProgram !!!!');
    // }

    //weaveAcceptMethods(RoboMl);

    // let interpretorVisitor = new InterpretorVisitor();
    // console.log(interpretorVisitor.visitRoboMLProgram(roboMLProgram));

   //generateRobotMovements(parfseResult);

    // const statements = [
    //     { type: 'Forward', Value: 100 },
    //     { type: 'Rotate', Value: (300 as Number) },
    //     { type: 'Forward', Value: 100 },
    //     { type: 'Rotate', Value: (300 as Number) },
    //     { type: 'Forward', Value: 100 },
    //     { type: 'Rotate', Value: (300 as Number) }
    //   ]

    // // console.log(statements);
    // connection.sendNotification('browser/sendStatements', statements);
});

//const statementsArray: Statement[][] = [];

// function generateRobotMovements(program: RoboMLProgram): void {

//     // console.log('Generating robot movements...');
//     // console.log(`coucou 0 :: ${program.function[0].instruction[0].$type}`);
    
//     // for(const a of program.function) {
//     //     console.log("function name : ", a.functionName);
//     //     console.log("function variable : ", a.variableFunDef)
//     //     console.log("function return type : ", a.returnType);
//     //     console.log("function instruction : ", a.instruction);
//     // }

//     for (const func of program.function) {

//         console.log(`Function name: ${func.functionName}`);

//         for (const statement of func.instruction) {
//             console.log(`Statement: ${statement} in function ${func}`);
//             processStatement(statement);            
//         }
        
//         console.log("------------------------------------------------------------------------");

//     }
// }

// function processStatement(statement: Statement): void {
//     switch (statement.$type) {
        
//         case 'Deplacement':
//             const deplacement:Deplacement = (statement as unknown as Deplacement);
//             console.log("deplacement: ", deplacement);
//             processDeplacement(deplacement);

//         case 'Assignement':
//             const assignement:Assignement = (statement as unknown as Assignement);
//             console.log("assignement: ", assignement);

//         case 'Condition':
//             const condition:Condition = (statement as unknown as Condition);
//             console.log("condition: ", condition);

//         case 'Loop':
//             const loopStatement:Loop = (statement as unknown as Loop);
//             console.log("boucle : ", loopStatement);
            
//         case 'Rotation':
//             const rotation:Rotation = (statement as unknown as Rotation);
//             console.log("rotation : ", rotation);
//             //processRotation(statement as unknown as Rotation);
//         case 'SetSpeed':    
//             const setSpeed:SetSpeed = (statement as unknown as SetSpeed);
//             console.log("set speed : ", setSpeed);
//             //processRotation(statement as unknown as Rotation);
//         case 'Statement':
//             console.warn(`Unhandled statement type: ${statement.$type}`);
//             //break;
//         default:
//             console.warn(`Unknown statement type: ${statement.$type}`);
//     }
// }

// function processDeplacement(deplacement: Deplacement): void {
//     const distance = deplacement.deplacementDistance?.accept; /*evaluateEntry(deplacement.deplacementDistance); */
//     const direction = deplacement.movementType || 'forward'; // Default to forward if movementType is not provided
//     const unitMeasure = deplacement.unitMeasure || 'cm'; // Default to cm if unitMeasure is not provided

//     console.log(`Move ${direction} ${distance} ${unitMeasure}`);
// }

// // function processRotation(rotation: Rotation): void {
    
// //     console.log("rotation : ", rotation);

// //     // const distance = evaluateEntry(deplacement.deplacementDistance);
// //     // const direction = deplacement.movementType || 'forward'; // Default to forward if movementType is not provided
// //     // const unitMeasure = deplacement.unitMeasure || 'cm'; // Default to cm if unitMeasure is not provided

// //     // console.log(`Move ${direction} ${distance} ${unitMeasure}`);
// // }

// // function evaluateEntry(entry: Entry): number {
// //     // You need to implement this function based on your specific logic
// //     // This is a placeholder, and you may need to handle different entry types (e.g., variables, expressions)
// //     return entry.Value || 0; // Placeholder, replace with your logic
// // }


export class RobotMovement {
    type: 'Forward' | 'Rotate' | 'SetSpeed' | 'SetRotation' | 'Other';
    value?: number;

    constructor(type: 'Forward' | 'Rotate' | 'SetSpeed' | 'SetRotation' | 'Other', value?: number) {
        this.type = type;
        this.value = value;
    }
}