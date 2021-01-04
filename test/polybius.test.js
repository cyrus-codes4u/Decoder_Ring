// Write your tests here!
const polybius = require("../src/polybius.js")
const {expect}= require("chai")

describe("#polybius()", ()=> {
    it("polybius() returns a string", () => {
        const actual = polybius("thinkful")
        expect(actual).to.be.a('string')
    })
    it("polybius() returns an even number of characters", () => {
        const actual = polybius("thankful for you").split(' ').join('')
        expect(actual.length % 2).to.equal(0)
    })
    it("polybius() properly encodes characters", () => {
        const expected = '1121314151122232424252'
        const actual = polybius('abcdefghijk')
        expect(actual).to.equal(expected)
    })
    it("polybius() maintains spaces, ignores punctuation and capitals", () => {
        const expected ='3251131343 2543241341'
        const actual = polybius('Hello World!')
        expect(actual).to.equal(expected)
    })
    //when decoding only accepts even number of characters
    
    //decodes messages correctly
    //decodes 42 to both i and j somehow
})