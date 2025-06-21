import { Config } from '../utils/config';

interface ParseResult {
  language: string;
  framework: string;
  generatorOptions: any;
}

class Parser {
  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  public parse(input: string): ParseResult {
    const result: ParseResult = {
      language: '',
      framework: '',
      generatorOptions: {},
    };

    // Use regular expressions to extract information from the input string
    const languageMatch = input.match(/--language=(\w+)/);
    if (languageMatch) {
      result.language = languageMatch[1];
    }

    const frameworkMatch = input.match(/--framework=(\w+)/);
    if (frameworkMatch) {
      result.framework = frameworkMatch[1];
    }

    // Extract generator options from the input string
    const optionsMatch = input.match(/--options=(.*)/);
    if (optionsMatch) {
      try {
        result.generatorOptions = JSON.parse(optionsMatch[1]);
      } catch (error) {
        throw new Error('Invalid generator options');
      }
    }

    return result;
  }
}

export { Parser, ParseResult };