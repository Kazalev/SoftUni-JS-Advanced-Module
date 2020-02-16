let lookupChar = require('../03. Char Lookup.js');
let expect = require('chai').expect;

describe('Lookup Char', function() {
    it('should return undefined if we pass number and string', function (){
        let str = 'Some string';
        let num = 23;
        let expected = lookupChar(num, str);
        expect(expected).to.be.equal(undefined);
    });

    it('should return character if we pass string and index', function (){
        let str = 'Some string';
        let num = 2;
        let expected = lookupChar(str, num);
        expect(expected).to.be.equal('m');
    });

    it('should return "Incorrect index" if we pass index that is out of array', function (){
        let str = 'Some string';
        let num = 23;
        let expected = lookupChar(str, num);
        expect(expected).to.be.equal('Incorrect index');
    });

    it('should return "Incorrect index" if we pass index that is out of array', function (){
        let str = 'Some string';
        let num = -10;
        let expected = lookupChar(str, num);
        expect(expected).to.be.equal('Incorrect index');
    });

    it('should return undefined if we pass string and floating point number', function (){
        let str = 'Some string';
        let num = 2.22;
        let expected = lookupChar(str, num);
        expect(expected).to.be.equal(undefined);
    });

    it('should return "Incorrect index" if we pass empty string', function (){
        let str = '';
        let num = 0;
        let expected = lookupChar(str, num);
        expect(expected).to.be.equal("Incorrect index");
    });

    it('should return undefined if we pass two numbers', function (){
        let firstNumber = 12;
        let secondNumber = 23;
        let expected = lookupChar(firstNumber, secondNumber);
        expect(expected).to.be.equal(undefined);
    });

    it('should return undefined if we pass two strings', function (){
        let firstString = '12';
        let secondString = '23';
        let expected = lookupChar(firstString, secondString);
        expect(expected).to.be.equal(undefined);
    });
});