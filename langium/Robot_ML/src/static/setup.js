import { MonacoEditorLanguageClientWrapper } from './monaco-editor-wrapper/index.js';
import { buildWorkerDefinition } from "./monaco-editor-workers/index.js";
import monarchSyntax from "./syntaxes/robo-ml.monarch.js";

buildWorkerDefinition('./monaco-editor-workers/workers', new URL('', window.location.href).href, false);

MonacoEditorLanguageClientWrapper.addMonacoStyles('monaco-editor-styles');

const client = new MonacoEditorLanguageClientWrapper();
const editorConfig = client.getEditorConfig();
editorConfig.setMainLanguageId('robo-ml');       // WARNING Dependent of your project

editorConfig.setMonarchTokensProvider(monarchSyntax);

let code = `
let void square(){
    var RMLInt val1 = 30
    var RMLInt val2 = 16
    var RMLInt val3 = 15
    var RMLInt val4 = 50
    var RMLInt rot = 2
    var RMLBoolean condition = 5 < 6
    if(condition) {
        Clock rot
        Forward val4 mm
        Forward val4 mm
        Forward val4 mm
        Forward val4 mm
    } else {
        doSomething()
    }
}

let void doSomething() {

    var RMLInt a = 60
    var RMLInt b = a / 2
    loop b < a {
        Forward a mm
        b = b + 2
    }

}

let RMLInt variables(RMLInt test){
    variables(4)
    var RMLBoolean test = true < true + true
    if ( true ) {
        setRotation(90)
    }
    return 1
}


let void main() {
    setSpeed(150 dm)
    var RMLInt count = 0
    var RMLInt test = count
    loop count < 50
    {	
        count = count + 1
        square()
    }
}
`

editorConfig.setMainCode(code);

editorConfig.theme = 'vs-dark';
editorConfig.useLanguageClient = true;
editorConfig.useWebSocket = false;

const typecheck = (async () => {
    console.info('typechecking current code...');

    // To implement (Bonus)
    
    if(errors.length > 0){
        
        const modal = document.getElementById("errorModal");
        modal.style.display = "block";

    } else {
        
        const modal = document.getElementById("validModal");
        modal.style.display = "block";
    
    }
});

const parseAndValidate = (async () => {
    console.info('validating current code...');
    // To implement
});

// const execute = (async () => {
//     console.info('running current code...');
//     // To implement
// });

const execute = (async () => {
    console.info('executing code...');
    client.getLanguageClient().sendNotification('browser/execute', { content: client.getEditor().getModel().getValue() });
});


const setupSimulator = (scene) => {
    const wideSide = max(scene.size.x, scene.size.y);
    let factor = 1000 / wideSide;

    window.scene = scene;

    scene.entities.forEach((entity) => {
        if (entity.type === "Wall") {
            window.entities.push(new Wall(
                (entity.pos.x)*factor,
                (entity.pos.y)*factor,
                (entity.size.x)*factor,
                (entity.size.y)*factor
                ));
        }
        if (entity.type === "Block") {
            window.entities.push(new Wall(
                (entity.pos.x)*factor,
                (entity.pos.y)*factor,
                (entity.size.x)*factor,
                (entity.size.y)*factor
                ));
        }
    });

    window.p5robot = new Robot(
        factor,
        scene.robot.pos.x,
        scene.robot.pos.y,
        scene.robot.size.x * factor,
        scene.robot.size.y * factor,
        scene.robot.rad
    );
}

window.execute = execute;
window.typecheck = typecheck;

var errorModal = document.getElementById("errorModal");
var validModal = document.getElementById("validModal");
var closeError = document.querySelector("#errorModal .close");
var closeValid = document.querySelector("#validModal .close");
closeError.onclick = function() {
    errorModal.style.display = "none";
}
closeValid.onclick = function() {
    validModal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == validModal) {
        validModal.style.display = "none";
    }
    if (event.target == errorModal) {
        errorModal.style.display = "none";
    }
  } 

const workerURL = new URL('./robo-ml-server-worker.js', import.meta.url); // WARNING Dependent of your project
console.log(workerURL.href);

const lsWorker = new Worker(workerURL.href, {
    type: 'classic',
    name: 'RoboMl Language Server'
});
client.setWorker(lsWorker);

// keep a reference to a promise for when the editor is finished starting, we'll use this to setup the canvas on load
const startingPromise = client.startEditor(document.getElementById("monaco-editor-root"));

// console.log("default robot speed : ", window.p5robot.speed);
// window.p5robot.speed = 200;

//let movementEnCours = false;


client.getLanguageClient().onNotification('browser/sendStatements', async (params) => {
    for(let i = 0  ; i < params.length ; i++ ) {
        const statement = params[i];

        if (statement.type === "Forward") {
            for(let j = 0 ; j < statement.Value ; j+=0.5){
                await new Promise(resolve => setTimeout(resolve, 50));
                window.p5robot.move(0.5);
            }
        } else {
            for(let j = 0 ; j < statement.Value ; j+=0.5){
                await new Promise(resolve => setTimeout(resolve, 50));
                window.p5robot.turn(0.5);
            }  
        }
    }
});

// client.getLanguageClient().onNotification('browser/sendStatements', async (params) => {
    
//     for (let i = 0; i < params.length; i++) {
//         const statement = params[i];
                     
//         if (statement.type === "Forward" && !movementEnCours) {
//             movementEnCours = true;
//             for(let j = 0 ; j < statement.Value ; j+=0.3){
//                 await new Promise(resolve => setTimeout(resolve, 50));
//                 window.p5robot.move(0.3);
//                 movementEnCours = false;
//             }
//         } else {
//             if (statement.type === "Rotate" && !movementEnCours) {
//                 movementEnCours = true;
//                 for(let j = 0 ; j < statement.Value ; j+=0.3){
//                     await new Promise(resolve => setTimeout(resolve, 50));
//                     window.p5robot.turn(0.3);
//                 }
//                 movementEnCours = false;
//             }
//         }
//     }
// });

// client.getLanguageClient().onNotification('browser/sendStatements', async (params) => {
//     for (let i = 0; i < params.length; i++) {
//         const statement = params[i];

//         if (statement.type === "Forward") {
//             await moveForward(0.3); // Utilise une fonction pour gérer le déplacement avec une promesse
//         } else if (statement.type === "Rotate") {
//             console.log("ça tourne ");
//             window.p5robot.turn(statement.Value);
//         }
//     }
// });

// async function moveForward(distance) {
//     const startTime = performance.now();
//     const duration = 1000; // Durée du mouvement en millisecondes (ajustez selon vos besoins)

//     await new Promise((resolve) => {
//         function moveStep() {
//             const currentTime = performance.now();
//             const progress = (currentTime - startTime) / duration;

//             if (progress < 1) {
//                 window.p5robot.move(distance);
//                 requestAnimationFrame(moveStep);
//             } else {
//                 resolve();
//             }
//         }

//         moveStep();
//     });
// }

// client.getLanguageClient().onNotification('browser/sendStatements', async (params) => {
//     for (let i = 0; i < params.length; i++) {
//         const statement = params[i];

//         if (statement.type === "Forward") {
//             await moveForward(0.3); // Attend que le mouvement en avant soit terminé
//         } else if (statement.type === "Rotate") {
//             await rotateClock(statement.Value); // Attend que la rotation soit terminée
//         }
//     }
// });

// async function moveForward(distance) {
//     const startTime = performance.now();
//     const duration = 1000; // Durée du mouvement en millisecondes (ajustez selon vos besoins)

//     await new Promise((resolve) => {
//         function moveStep() {
//             const currentTime = performance.now();
//             const progress = (currentTime - startTime) / duration;

//             if (progress < 1) {
//                 window.p5robot.move(distance);
//                 requestAnimationFrame(moveStep);
//             } else {
//                 resolve();
//             }
//         }

//         moveStep();
//     });
// }

// async function rotateClock(value) {
//     await new Promise((resolve) => {
//         // Vous pouvez ajuster la logique de rotation selon les besoins
//         console.log("ça tourne ");
//         window.p5robot.turn(value);
//         resolve();
//     });
// }