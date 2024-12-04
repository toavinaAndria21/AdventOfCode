import { readFile } from 'node:fs/promises';

const fileContent = await readFile('input.txt', 'utf8');
let eachLine = fileContent.trim().split('\n');

let occurenceXMAS = 0;

eachLine.forEach((line, index) => {
    for (let j = 0; j < line.length; j++) {

            if (isHorzontale(j, line)) occurenceXMAS += 1;
            if (isVerticale(eachLine, index, j)) occurenceXMAS += 1;
            if (isDiagonalDroite(eachLine, index, j)) occurenceXMAS += 1
            if (isDiagonalGauche(eachLine, index, j)) occurenceXMAS += 1
    }
});

console.log(occurenceXMAS);

function isXMAS(str) {
    return str === 'XMAS' || str.split('').reverse().join('') === 'XMAS';
}

function isHorzontale(i, content) {
    let str = '';
    // Vérification à droite
    if (i + 3 < content.length) {
        str = content[i] + content[i + 1] + content[i + 2] + content[i + 3];
        if (isXMAS(str)) return true;
    }
  
    return false;
}

function isVerticale(eachLine, index, j) {
    let str = '';
    // Vérifie si "XMAS" se trouve dans les lignes en dessous
    if (index + 3 < eachLine.length) {
        str = eachLine[index][j] + eachLine[index + 1][j] + eachLine[index + 2][j] + eachLine[index + 3][j];
        if (isXMAS(str)) return true;
    }

    return false;
}

function isDiagonalDroite(eachLine, index, j) {
    const numRows = eachLine.length;
    const numCols = eachLine[0].length;
    let str = '';

    // Vérifie la diagonale en bas à droite
    if (index + 3 < numRows && j + 3 < numCols) {
        str = eachLine[index][j] + eachLine[index + 1][j + 1] + eachLine[index + 2][j + 2] + eachLine[index + 3][j + 3];
        if (isXMAS(str)) return true;
    }

    return false
}
function isDiagonalGauche(eachLine, index, j) {
    const numRows = eachLine.length;
    const numCols = eachLine[0].length;
    let str = '';
    // Vérifie la diagonale en bas à gauche
    if (index + 3 < numRows && j - 3 >= 0) {
        str = eachLine[index][j] + eachLine[index + 1][j - 1] + eachLine[index + 2][j - 2] + eachLine[index + 3][j - 3];
        if (isXMAS(str)) return true;
    }

    return false
}
