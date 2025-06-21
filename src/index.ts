import { Generator } from './modules/generator';
import { Parser } from './modules/parser';
import { Config } from './utils/config';
import { Testing } from './utils/testing';

class Application {
    private generator: Generator;
    private parser: Parser;
    private config: Config;
    private testing: Testing;

    constructor() {
        this.generator = new Generator();
        this.parser = new Parser();
        this.config = new Config();
        this.testing = new Testing();
    }

    public async run(): Promise<void> {
        try {
            const userInput = await this.getUserInput();
            const parsedInput = this.parser.parse(userInput);
            const generatedCode = await this.generator.generate(parsedInput);
            await this.testing.test(generatedCode);
            console.log(generatedCode);
        } catch (error) {
            console.error(error);
        }
    }

    private async getUserInput(): Promise<string> {
        // Implement a method to get user input, for example, from the command line or a file.
        // For demonstration purposes, a hardcoded string is used.
        return 'example input';
    }
}

const app = new Application();
app.run();