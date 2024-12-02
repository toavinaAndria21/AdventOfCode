import {readFile} from 'node:fs/promises';
// import {isIncreasing} from '../../Library/lib.js'
// import {isDecreasing} from '../../Library/lib.js'

const fileContent = await readFile('input.txt', 'utf8');
let safeReports = 0; // Final result

let eachLine = fileContent.trim().split('\n'); // recupère chaque ligne du fichier
eachLine.map((line, i) => {
    let array = line.split(' ')
    if( (isIncreasing(array) || isDecreasing(array)) && difference(1, 3, array)) {
        safeReports ++
    }
})

console.log(safeReports)
function difference(min, max, array) {
    let isCorrect = true
    let space = 0
    for (let i = 0; i < array.length; i++) {
        space = Math.abs(array[i] - array[i + 1])
        if ( space < min || space > max ) 
            isCorrect = false
    }
    return isCorrect
}


/**
 * Veirify if a sequence of number is increasing or not 
 * @param {array<number>} array 
 * @returns {boolean} isInscreasing
 */
function isIncreasing(array) {

    let isIncreasing = true // by default, we suppose that the sequence is increasing
    for (let i = 0; i < array.length; i++) {
        if ( array[i] >= array[i+1] ) // if the next number is less than the current number, we set isIncreasing to false
            isIncreasing = false  
    }

    return isIncreasing // return the result
}

/**
 * Veirify if a sequence of number is decreasing or not 
 * @param {array<number>} array 
 * @returns {boolean} isDecreasing
 */
function isDecreasing(array) {
    
    let isDecreasing = true // by default, we suppose that the sequence is decreasing
    for (let i = 0; i < array.length; i++) {
        if ( array[i] <= array[i+1] ) // if the next number is bigger than the current number, we set decreasing to false
            isDecreasing = false
    }

    return isDecreasing // return the result
}