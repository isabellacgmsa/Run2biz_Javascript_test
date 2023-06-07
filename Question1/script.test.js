// Import the necessary functions and libraries
const { countPasswordsPart1, countPasswordsPart2 } = require('./script');

// Mock the DOM using jsdom
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;

describe('Password Counter', () => {
  describe('Part 1: Password Validation', () => {
    it('should count the number of valid passwords following the Part 1 rules', () => {
      const start = 184759;
      const end = 856920;

      const result = countPasswordsPart1(start, end);

      expect(result).toBe(2934);
    });
  });

  describe('Part 2: Additional Rule', () => {
    it('should count the number of valid passwords following the Part 2 rules', () => {
      const start = 184759;
      const end = 856920;

      const result = countPasswordsPart2(start, end);

      expect(result).toBe(1991);
    });
  });
});
