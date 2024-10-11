const assert = require('assert');
const calculator = require('../calculator');

// Test memory functions
describe('Calculator Memory Functions', function() {
    
});


// Test calculation functions
describe('Calculator Calculation Functions', function() {
    const res = calculator.calculateSquareRoot(4);
    it('should return 2', function() {
        assert.strictEqual(res, 2);
    });
});

describe('Calculator Calculation Functions', function() {
    const res = calculator.calculateSquareRoot(16);
    it('should return 4', function() {
        assert.strictEqual(res, 4);
    });
});


// Add your tests here