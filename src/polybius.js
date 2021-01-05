function polybius(input, encode = true) {
    //key
    const polybius = [
        ['a','f','l','q','v'],
        ['b','g','m','r','w'],
        ['c','h','n','s','x'],
        ['d','(i/j)','o','t','y'],
        ['e','k','p','u','z']
    ];
    // variable to store code/decode
    let message = '';
    // encoding functionality
    if (encode){
        for (let char in input){
            const character = input[char];
            //automatically logs spaces
            if (character === ' '){ 
                message += character;
                continue;
            }
            //otherwise matches character to polybius and logs
            for(let col in polybius){
                for (let row in polybius[col]){
                    if(polybius[col][row].includes(character.toLowerCase())) {
                        const id = `${parseInt(col) + 1}${parseInt(row) + 1}`;
                        message += id;
                        break;
                    }
                }
            }
        }
    //decoding functionality
    }else{
        // check if the input is acceptable
        let justNumLength = input.split(" ").join("").length
        if (justNumLength % 2 != 0) {return false}
        //decode the input
        const code = input.split("")
        while(code.length > 0){
            if (code[0] == " ") {
                message += ` `;
                code.shift();
                continue;
            }
            const digits = code.splice(0,2);
            const column = parseInt(digits[0]) - 1;
            const row = parseInt(digits[1]) - 1;
            message += polybius[column][row];
        }    
    }
    return message;
}

module.exports = polybius;
