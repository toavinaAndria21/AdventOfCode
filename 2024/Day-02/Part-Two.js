import { readFile } from 'node:fs/promises';
import { isIncreasing, isDecreasing, removeItemFromArray } from '../../Library/lib.js'

const fileContent = await readFile('input.txt', 'utf8');
let safeReports = 0;

let eachLine = fileContent.trim().split('\n');
eachLine.forEach((line) => {

    let array = line.split(' ').map(Number);

    if ((isIncreasing(array) || isDecreasing(array)) && difference(1, 3, array)) {
        safeReports += 1;
    } else {
        let isSafe = false;
        let newArray = []
        for (let i = 0; i < array.length; i++) {
            newArray = [...array];
            newArray = removeItemFromArray(newArray[i], newArray);
            if ((isIncreasing(newArray) || isDecreasing(newArray)) && difference(1, 3, newArray)) {
                isSafe = true;
                break;
            }
        }
        if (isSafe) safeReports += 1;
    }
});


function difference(min, max, array) {
    for (let i = 0; i < array.length - 1; i++) {
        let space = Math.abs(array[i] - array[i + 1]);
        if (space < min || space > max) return false;
    }
    return true;
}

console.log(safeReports);
