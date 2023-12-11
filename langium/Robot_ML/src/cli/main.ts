import { RoboMLProgram } from '../language/visitor.js';
import chalk from 'chalk';
import { Command } from 'commander';
import * as fs from 'fs/promises';
import * as path from 'path';
import * as url from 'url';
import { RoboMlLanguageMetaData } from '../language/generated/module.js';
import { createRoboMlServices } from '../language/robo-ml-module.js';
import { extractAstNode } from './cli-util.js';
import { NodeFileSystem } from 'langium/node';
import { Compile } from '../language/semantics/compiler/compiler.js';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const packageJson = await fs.readFile(path.resolve(__dirname, '..', '..', 'package.json'), 'utf-8');

export type GenerateOptions = {
    destination?: string;
}

export default function(): void {
    const program = new Command();

    //program
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        // .version(require('../../package.json').version); BROKEN
        .version(JSON.parse(packageJson).version);

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
    program.parse(process.argv);
}
