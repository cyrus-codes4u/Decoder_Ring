// Write your tests here!
const substitution = require("../src/substitution.js")
const {expect} = require("chai")

describe('#subtitution()', () =>{
    it("substitution() returns false when alphabet is not 26 characters ", () => {
        const actual = substitution("some message", "alphibet")
        expect(actual).to.be.false
    })
    it("substitution() returns false when alphabet contains non-unique characters", () => {
        const actual = substitution("some message", "badalphabettwosbadalphabet")
        expect(actual).to.be.false
    })
    it("substitution() properly encodes characters", () => {
        const expected = 'jrufscpw'
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
        expect(actual).to.equal(expected)
    })
    it("substitution() maintains spaces", () => {
        const expected = 'elp xhm xf mbymwwmfj dne'
        const actual = substitution("you are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        expect(actual).to.equal(expected)
    })
    it("substitution() ignores capitalization", () => {
        const expected = substitution("YOU ARE AN EXCELLENT SPY", "xoyqmcgrukswaflnthdjpzibev")
        const actual = substitution("you are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        expect(actual).to.equal(expected)
    })
    it("substitution() properly decodes messages", () => {
        const expected = 'thinkful'
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected)
    })
})