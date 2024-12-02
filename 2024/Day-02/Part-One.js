import {readFile} from 'node:fs/promises';
// import {isIncreasing} from '../../Library/lib.js'
// import {isDecreasing} from '../../Library/lib.js'

const fileContent = await readFile('input.txt', 'utf8');
let safeReports = 0; // Final result

let eachLine = fileContent.trim().split('\n'); // get each line of the file
eachLine.forEach((line) => {
    let array = line.split(' ').map(Number);
    if ((isIncreasing(array) || isDecreasing(array)) && difference(1, 3, array)) {
        safeReports += 1;
    }
});

console.log(safeReports)


function difference(min, max, array) {
    let space = 0
    for (let i = 0; i < array.length; i++) {
        space = Math.abs(array[i] - array[i + 1])
        if ( space < min || space > max ) 
            return false
    }
    return true
}

/**
 * Veirify if a sequence of number is increasing or not 
 * @param {array<number>} array 
 * @returns {boolean} isInscreasing
 */
function isIncreasing(array) {

    for (let i = 0; i < array.length - 1; i++) {
        if ( array[i] >= array[i+1] ) // if the next number is less than the current number, we return false
            return false  
    }
    return true 
}

/**
 * Veirify if a sequence of number is decreasing or not 
 * @param {array<number>} array 
 * @returns {boolean} isDecreasing
 */
function isDecreasing(array) {
    
    for (let i = 0; i < array.length - 1; i++) {
        if ( array[i] <= array[i+1] ) // if the next number is bigger than the current number, we return false
            return false
    }
    return true 
}