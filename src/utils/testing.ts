import { expect } from 'chai';
import { Config } from '../utils/config';

describe('Config Utility', () => {
  it('should load configuration correctly', () => {
    const config = new Config();
    expect(config).to.be.an('object');
  });
});

describe('Module Imports', () => {
  it('should import generator module correctly', () => {
    // tslint:disable-next-line:no-var-requires
    const generator = require('../modules/generator');
    expect(generator).to.be.an('object');
  });

  it('should import parser module correctly', () => {
    // tslint:disable-next-line:no-var-requires
    const parser = require('../modules/parser');
    expect(parser).to.be.an('object');
  });
});
