import {readFile} from 'node:fs/promises';
import {isIncreasing} from '../../Library/lib.js'
import {isDecreasing} from '../../Library/lib.js'

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
