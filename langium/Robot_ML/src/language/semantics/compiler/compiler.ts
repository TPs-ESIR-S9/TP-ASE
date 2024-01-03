import { CompilerVisitor } from "./compilerVisitor.js";

export class Compile {
    static compileArduino(model: any): void {
        let compilerVisitor = new CompilerVisitor();
        console.log(compilerVisitor.visitRoboMLProgram(model));
    }
}