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

describe('Calculator Calculation Functions', function() {
    const res = calculator.calculateSquare(2);
    it('should return 4', function() {
        assert.strictEqual(res, 4);
    });
});

// Add your tests here
describe('Calculator Reciprocal Function', function() {
    const res = calculator.calculateReciprocal(0.5);
    if('should return 2', function() {
        assert.strictEqual(res, 2);
    });
});