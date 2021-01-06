function substitution(input, alphabet, encode = true) {
    const baseAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); 
    const codeAlphabet = alphabet.split('');
    if (new Set(codeAlphabet).size != 26) {return false} //if alphabet is nonunique or wrong length, returns false

    let message = '';
    for (char in input){
        const letter = input[char].toLowerCase();
        if(letter === ' ') {
            message += letter;
            continue;
        }
        if (encode) {
            const index = baseAlphabet.indexOf(letter);
            message += codeAlphabet[index];
        }else{
            const index = codeAlphabet.indexOf(letter);
            message += baseAlphabet[index];
        }
    }
    return message
}

module.exports = substitution;
