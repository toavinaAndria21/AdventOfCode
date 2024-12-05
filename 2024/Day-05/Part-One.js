import { readFile } from 'node:fs/promises';

const fileContent = await readFile('input.txt', 'utf8');
let totalMiddlePagesNumber = 0;

let orderingRules = fileContent.trim().split('\n\n')[0];
let pages = fileContent.trim().split('\n\n')[1];

let rulesArray = orderingRules.split('\n')
let pageLine = pages.split('\n')
let correctLine = []

pageLine.forEach(line => {
    let lineWithoutComa = line.split(',')
    let str = ''
    let isCorrect = true

    for (let i = 0; i < lineWithoutComa.length; i++) {
        if( i + 1 < lineWithoutComa.length ) {
            str = lineWithoutComa[i + 1] + '|' + lineWithoutComa[i]
            if ( rulesArray.includes(str) )
                isCorrect = false
        }
    }
    if ( isCorrect ) correctLine.push(line)
});
correctLine.forEach(correctLine => {
    let array = correctLine.split(',')
    totalMiddlePagesNumber += getMiddleItemInArray(array)
})
function getMiddleItemInArray(array) {
    let middleIndex = parseInt(array.length / 2)
    
    return parseInt( array[ middleIndex ], 10 )
}

console.log(totalMiddlePagesNumber)
