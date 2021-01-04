function caesar(input, shift, encode = true) {
    if(!input || shift === 0 || shift > 25 || shift < -25 || !shift ) {return false}
    
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let message = '';
    
    for (let char in input) {
        const character = input[char].toLowerCase();
        if(!alphabet.includes(character)) {
            message += character
        }else{
            let shiftedIndex = alphabet.indexOf(character);
            encode ? shiftedIndex += shift : shiftedIndex -= shift;
            if (shiftedIndex >= alphabet.length) {shiftedIndex -= alphabet.length};
            if (shiftedIndex <= 0) {shiftedIndex += alphabet.length};
            message += alphabet[shiftedIndex];
        }
    }
    return message;
}

module.exports = caesar;
