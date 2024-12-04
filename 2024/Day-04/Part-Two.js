import {readFile} from 'node:fs/promises';

const fileContent = await readFile('input.txt', 'utf8');

let eachLine = fileContent.trim().split('\n'); // recupère chaque ligne
let occurenceXMAS = 0

eachLine.forEach((line, index) => {
    let diagonale1 = ''
    let diagonale2 = ''
    for (let j = 0; j < line.length; j++) {
            if ( line[j] === 'A' ) {
                if ( (index >= 1) && (index + 1 < eachLine.length) ) {
                    diagonale1 = eachLine[index - 1][j-1] + line[j] + eachLine[index + 1][j+1] // diagonal from left to right
                    diagonale2 = eachLine[index - 1][j+1] + line[j] + eachLine[index + 1][j-1] // diagonal from right to left 

                    // Verify if the two diagonals are 'MAS
                    if ( isMAS(diagonale1) && isMAS(diagonale2) ) occurenceXMAS += 1
                }
            }
    }
});

function isMAS(str) {
    return str === 'MAS' || str.split('').reverse().join('') === 'MAS';
}

console.log(occurenceXMAS)