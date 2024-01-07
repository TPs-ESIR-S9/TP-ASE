import { MonacoEditorLanguageClientWrapper } from './monaco-editor-wrapper/index.js';
import { buildWorkerDefinition } from "./monaco-editor-workers/index.js";
import monarchSyntax from "./syntaxes/robo-ml.monarch.js";
import handleNotification from './notifications.js';

buildWorkerDefinition('./monaco-editor-workers/workers', new URL('', window.location.href).href, false);

MonacoEditorLanguageClientWrapper.addMonacoStyles('monaco-editor-styles');

const client = new MonacoEditorLanguageClientWrapper();
const editorConfig = client.getEditorConfig();
editorConfig.setMainLanguageId('robo-ml');       // WARNING Dependent of your project

editorConfig.setMonarchTokensProvider(monarchSyntax);

let code = `
let void triangle() {
    var RMLInt sideLength = 100
    var RMLInt rotationAngle = 120
    var RMLInt count = 0

    loop count < 3 {
        Clock rotationAngle

        Forward sideLength cm
        Forward sideLength cm
        Forward sideLength cm

        count = count + 1
    }
}

let void main() {
    setSpeed(150 dm)
    Clock 60
    var RMLInt count = 0

    loop count < 1 {
        count = count + 1
        triangle()
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

const errorModal = document.getElementById("errorModal");
const validModal = document.getElementById("validModal");
const closeError = document.querySelector("#errorModal .close");
const closeValid = document.querySelector("#validModal .close");
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

const lsWorker = new Worker(workerURL.href, {
    type: 'classic',
    name: 'RoboMl Language Server'
});
client.setWorker(lsWorker);

// keep a reference to a promise for when the editor is finished starting, we'll use this to setup the canvas on load
const startingPromise = client.startEditor(document.getElementById("monaco-editor-root"));

handleNotification(client)