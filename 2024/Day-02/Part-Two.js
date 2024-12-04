import { readFile } from 'node:fs/promises';

const fileContent = await readFile('essai.txt', 'utf8');
let safeReports = 0;

let eachLine = fileContent.trim().split('\n');
eachLine.forEach((line) => {
    let array = line.split(' ').map(Number);
    
    if ((isIncreasing(array) || isDecreasing(array)) && difference(1, 3, array)) {
        safeReports += 1;
    } else {
        let isSafe = false;
        for (let i = 0; i < array.length; i++) {
            let newArray = [...array];
            removeItemFromArray(newArray[i], newArray);
            if ((isIncreasing(newArray) || isDecreasing(newArray)) && difference(1, 3, newArray)) {
                isSafe = true;
                break;
            }
        }
        if (isSafe) safeReports += 1;
    }
});

console.log(safeReports);

function difference(min, max, array) {
    for (let i = 0; i < array.length - 1; i++) {
        let space = Math.abs(array[i] - array[i + 1]);
        if (space < min || space > max) return false;
    }
    return true;
}

function isIncreasing(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] >= array[i + 1]) return false;
    }
    return true;
}

function isDecreasing(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] <= array[i + 1]) return false;
    }
    return true;
}

function removeItemFromArray(item, array) {
    let index = array.indexOf(item);
    if (index > -1) array.splice(index, 1);
    return array;
}
