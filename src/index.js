const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '**': ' ',
};

const dic = {
    '10': '.',
    '11': '-',
    '00': '',
    '**': '**',
};

function decode(expr) {
    let resultArr = [];
    let finish = [];
    let resultString = ''


    for (let i = 0; i < expr.length; i += 10) {
        resultArr.push(expr.substring(i, i + 10));
    }
    resultArr.forEach(element => {
        let result = ''
        if (element === '**********') {
            result = '**'
        } else {
            for (let i = 0; i < element.length; i += 2) {
                result += dic[element.slice(i, i + 2)]
            }            
        }
        
        finish.push(result)
    });
    finish.forEach(decodeSumbol => {
        resultString += MORSE_TABLE[decodeSumbol]
    });

    return resultString;

}
module.exports = {
    decode
}