function polybius(input, encode = true) {
    //key
    const polybius = [
        ['a','f','l','q','v'],
        ['b','g','m','r','w'],
        ['c','h','n','s','x'],
        ['d','(i/j)','o','t','y'],
        ['e','k','p','u','z']
    ];
    let message = '';

    if (encode){
        for (let char in input){
            const character = input[char];
            let id = '';
            if (character === ' '){ message += character}
            else{ 
                for(let col in polybius){
                    for (let row in polybius[col]){
                        if(polybius[col][row].includes(character.toLowerCase())) {
                            id = `${parseInt(col) + 1}${parseInt(row) + 1}`;
                            break;
                        }
                    }
                }
            }
            message += id;
        }
    }else{
        //
        for       
    }
    return message;

}

module.exports = polybius;
