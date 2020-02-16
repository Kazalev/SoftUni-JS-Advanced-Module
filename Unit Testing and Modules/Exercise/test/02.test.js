const isOddOrEven = require('../02. Even Or Odd.js');

let expect = require('chai').expect;
let assert = require('chai').assert;

describe('isOddOrEven function', function() {
    it('Pass number to return undefined.', function() {
        let actual = isOddOrEven(2); //undefined

        assert.equal(actual, undefined);
    });
    it('Pass string with even length.', function() {
        let actual = isOddOrEven('toni');
        assert.equal(actual, 'even');
    });
    it('Pass string with odd length.', function() {
        let actual = isOddOrEven('Pesho');
        assert.equal(actual, 'odd');
    });
});