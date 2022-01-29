const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    for (let i = 0; i < expr.length; i+=10) {
        const encodedLetter = expr.substring(i, i + 10);
        // console.log(encodedLetter);
        if (encodedLetter === '**********') {
            result += ' ';
        } else {
            let morseLetter = '';
            for (let j = encodedLetter.length; j > 0; j-=2) {
                const symbol = encodedLetter.substring(j-2, j);
                if(symbol === '10') {
                    morseLetter = '.' + morseLetter;
                } else if(symbol === '11') {
                    morseLetter = '-' + morseLetter;
                } else if(symbol === '00') {
                    break;
                }
            }
            result += MORSE_TABLE[morseLetter];
        }
        
    }
    return result;
}

module.exports = {
    decode
}