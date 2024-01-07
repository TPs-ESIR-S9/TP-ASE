import { RoboMLProgram } from '../language/visitor.js';
import chalk from 'chalk';
import { Command } from 'commander';
//import * as fs from 'fs/promises';
//import * as path from 'path';
//import * as url from 'url';
import { RoboMlLanguageMetaData } from '../language/generated/module.js';
import { createRoboMlServices } from '../language/robo-ml-module.js';
import { extractAstNode } from './cli-util.js';
import { generateJavaScript } from './generator.js';
import { NodeFileSystem } from 'langium/node';
import { Compile } from '../language/semantics/compiler/compiler.js';
import { InterpretorVisitor } from '../language/main-browser.js';
//const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
//const packageJson = await fs.readFile(path.resolve(__dirname, '..', '..', 'package.json'), 'utf-8');

export const generateAction = async (fileName: string, opts: GenerateOptions): Promise<void> => {
    const services = createRoboMlServices(NodeFileSystem).RoboMl;
    const model = await extractAstNode<RoboMLProgram>(fileName, services);
    const generatedFilePath = generateJavaScript(model, fileName, opts.destination);
    console.log(chalk.green(`JavaScript code generated successfully: ${generatedFilePath}`));
};

export type GenerateOptions = {
    destination?: string;
}

export default function(): void {
    const program = new Command();

    program
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        //.version(require('../../package.json').version);
        // .version(require('../../package.json').version); BROKEN
        //.version(JSON.parse(packageJson).version);
        .version(require('../../package.json').version);
//>>>>>>> parent of b1f9dc9 (Committing local changes before pull)

    const fileExtensions = RoboMlLanguageMetaData.fileExtensions.join(', ');
    program
        .command('generate')
        .argument('<file>', `source file (possible file extensions: ${fileExtensions})`)
        .option('-d, --destination <dir>', 'destination directory of generating')
        .description('generates JavaScript code that prints "Hello, {name}!" for each greeting in a source file')
        .action(generateAction);
        
    program
        .command('compile').argument('<file>', `source file (possible file extensions: ${fileExtensions})`)
        .description('compiles a source file to Arduino code')
        .action(async (fileName) => {
        console.log(`Compiling ${fileName}`);
        const services = createRoboMlServices(NodeFileSystem).RoboMl;
        const model = await extractAstNode(fileName, services);
        Compile.compileArduino(model);
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
