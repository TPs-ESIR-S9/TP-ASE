import { RoboMLProgram } from '../language/visitor.js';
import chalk from 'chalk';
import { Command } from 'commander';
import { RoboMlLanguageMetaData } from '../language/generated/module.js';
import { createRoboMlServices } from '../language/robo-ml-module.js';
import { extractAstNode } from './cli-util.js';
import { NodeFileSystem } from 'langium/node';
import { Compile } from '../language/semantics/compiler/compiler.js';
import { InterpretorVisitor } from '../language/main-browser.js';

export type GenerateOptions = {
    destination?: string;
}

export default function(): void {
    const program = new Command();

    program
        .version(require('../../package.json').version);

    const fileExtensions = RoboMlLanguageMetaData.fileExtensions.join(', ');
    
    program
        .command('compile')
        .argument('<file>', `source file (possible file extensions: ${fileExtensions})`)
        .description('compiles a source file to Arduino code')
        .action(async (fileName) => {
            console.log(`Compiling ${fileName}`);
            const services = createRoboMlServices(NodeFileSystem).RoboMl;
            const model = await extractAstNode<RoboMLProgram>(fileName, services);
            Compile.compileArduino(model);
            console.log(chalk.green(`Arduino code compiled successfully: ${fileName}`));
    });
        
    program
        .command('interpret').argument('<file>', `source file (possible file extensions: ${fileExtensions})`)
        .description('interpret the code to virtually run it')
        .action(async (fileName: string) => {
        const services = createRoboMlServices(NodeFileSystem).RoboMl;
        const model = await extractAstNode(fileName, services);

        let interpreteur = new InterpretorVisitor();
        interpreteur.visitRoboMLProgram(model as RoboMLProgram);
    });

    program.parse(process.argv);
}
