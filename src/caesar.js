function caesar(input, shift, encode = true) {
    if(!input || shift === 0 || shift > 25 || shift < -25 || !shift ) {return false}
    
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k',
                    'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let message = '';
    const caseInsensitive = input.toLowerCase();
    
    for (let char in caseInsensitive) {
        const character = caseInsensitive[char];
        
        if(!alphabet.includes(character)) {message += character}
        else{
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
