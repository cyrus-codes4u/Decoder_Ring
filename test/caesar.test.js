// Write your tests here!
const caesar = require("../src/caesar.js")
const {expect} = require("chai")

describe("#caesar()", () =>{
    it("caesar() properly encodes input", () => {
        const expected = 'wklqnixo'
        const actual = caesar("thinkful", 3)
        expect(actual).to.be.equal(expected)
    })
    it("caesar() ignores spaces and punctuation", () => {
        const expected = 'wklqnixo !'
        const actual = caesar("thinkful !", 3)
        expect(actual).to.be.equal(expected)
    })
    it("caesar() ignores capitalization", () => {
        const expected = caesar("thinkful", 8)
        const actual = caesar("THINKFUL", 8)
        expect(actual).to.be.equal(expected)
    })
    it("caesar() encodes properly with negative shift value", () => {
        const expected = 'qefkhcri'
        const actual = caesar("thinkful", -3)
        expect(actual).to.be.equal(expected)
    })
    it("caesar() properly wraps around in both directions", () => {
        const expected1 = 'hgfedc'
        const actual1 = caesar("zyxwvu", 8)
        expect(actual1).to.be.equal(expected1)
        const actual2 = caesar("hgfedc", -8)
        const expected2 = "zyxwvu"
        expect(actual2).to.be.equal(expected2)
    })
    it("caesar() decodes messages so they match uncoded original", () => {
        const original = 'thinkful'
        const decoded = caesar(caesar(original, -3), -3, false)
        expect(decoded).to.be.equal(original)
    })
    it("caesar() returns false with improper shift value", () => {
        const actual = caesar("thinkful", -27)
        expect(actual).to.be.false
    })
})