import { Config } from '../utils/config';
import { Parser } from './parser';
import { Testing } from '../utils/testing';

export class Generator {
    private parser: Parser;
    private config: Config;
    private testing: Testing;

    constructor(parser: Parser, config: Config, testing: Testing) {
        this.parser = parser;
        this.config = config;
        this.testing = testing;
    }

    public generateCode(input: string): string {
        const parsedInput = this.parser.parseInput(input);
        const code = this.generateCodeFromParsedInput(parsedInput);
        if (this.config.getTestingEnabled()) {
            this.testing.runTests(code);
        }
        return code;
    }

    private generateCodeFromParsedInput(parsedInput: any): string {
        // Generate code based on parsed input
        let code = 'import { ' + parsedInput.imports.join(', ') + ' } from "' + parsedInput.module + '";
';
        code += 'class ' + parsedInput.className + ' {
';
        for (const property of parsedInput.properties) {
            code += '    private ' + property.name + ': ' + property.type + ';
';
        }
        code += '    constructor(';
        for (const property of parsedInput.properties) {
            code += property.name + ': ' + property.type + ', ';
        }
        code = code.slice(0, -2) + ') {
';
        for (const property of parsedInput.properties) {
            code += '        this.' + property.name + ' = ' + property.name + ';
';
        }
        code += '    }
';
        code += '}
';
        return code;
    }
}
