const { exportAllDeclaration } = require('@babel/types');
const { default: TestRunner } = require('jest-runner');
const checkIfEqual = require('../lib/random.js');
test('checks if 10 is equal to 10',() => {
    exportAllDeclaration(checkIfEqual(10, 10)).toBe(true);
});