function caesar(input, shift, encode = true) {
    if(!input || shift === 0 || shift > 25 || shift < -25) {return false}
    
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let message = input.toLowerCase();
    for (let char in message){
        const character = message[char];
        if(alphabet.includes(character)){
            let shiftedIndex = alphabet.indexOf(character);
            encode ? shiftedIndex += shift : shiftedIndex -= shift;
            message[char] = alphabet[shiftedIndex];
        }
    }
    return message
}

module.exports = caesar;
