const StringBuilder = require('../05. String Builder.js');

let expect = require('chai').expect;

describe('StringBuilder', function(){
    it('Can be instantiated with a passed without anything', function(){
        let expected = new StringBuilder();
        expect(expected).to.be.a('object');
    });

    it('Can be instantiated with a passed in string argument', function(){
        let expected = new StringBuilder("Test");
        expect(expected._stringArray).to.have.lengthOf(4);
    });

    it('Functions attached to instance', function(){
        let expected = new StringBuilder("Test");
        
        expect(expected).to.be.property('prepend');
    });

    it('append(string) - length', function(){
        let expected = new StringBuilder();
        expected.append("Demo");
        expect(expected._stringArray).to.have.lengthOf(4);
    });

    it('append(string) - if append in the edn of the string', function(){
        let expected = new StringBuilder("Te");
        expected.append("Demo");
        expect(expected._stringArray[0]).to.be.equal("T");
    });

    it('append(string) - if append in the edn of the string', function(){
        let expected = new StringBuilder("Te");
        expect(() => expected.append(2)).to.Throw("Argument must be string");
    });

    it('prepend(string) - if append in the edn of the string', function(){
        let expected = new StringBuilder("Te");
        expected.prepend("Demo");
        expect(expected._stringArray[0]).to.be.equal("D");
    });

    it('prepend(string) - if append in the edn of the string', function(){
        let expected = new StringBuilder("Te");
        expect(() => expected.prepend(2)).to.Throw("Argument must be string");
    });

    it('insertAt(string, index)', function(){
        let expected = new StringBuilder("Te");
        expected.insertAt("D", 1);
        expect(expected._stringArray[1]).to.be.equal("D");
    });
    
    it('insertAt(string, index)', function(){
        let expected = new StringBuilder("Te");
        expected.insertAt(1, 0);
        expect(expected._stringArray).to.be.equal(['T', 'D', 'e']);
    });

    it('insertAt(string, index)', function(){
        let expected = new StringBuilder("Te");
        expect(() => expected.insertAt(2, 1)).to.Throw("Argument must be string");
    });

    it('remove(startIndex, length)', function(){
        let expected = new StringBuilder("Test");
        expected.remove(1, 1);
        expect(expected._stringArray[1]).to.be.equal("s");
    });

    it('toString()', function(){
        let expected = new StringBuilder("Test");
        expect(expected.toString()).to.be.equal("Test");
    });

    it('Argument must be a string', function(){
        expect(() => new StringBuilder(21)).to.Throw("Argument must be string");
    });
});