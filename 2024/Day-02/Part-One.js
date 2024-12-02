import {readFile} from 'node:fs/promises';

const fileContent = await readFile('essai.txt', 'utf8');
let safeReports = 0; // Final result

let eachLine = fileContent.trim().split('\n'); // recupère chaque ligne

eachLine.map((line, i) => {
    let array = line.split(' ')

    if( isInscreasing(array) ) {
        let differenceIncrease = []
        let currentDigit = array[0]
        for (let i = 0; i < array.length; i++) {
            if( i != array.length - 1 )
                {
                    differenceIncrease.push( array[i+1] - currentDigit ) 
                    currentDigit = array[i+1]
                }
        }
     console.log("Increase : " + differenceIncrease)
    }
    else {
        let differenceDecrease = []
        let currentDigit = array[0]
        for (let i = 0; i < array.length; i++) {
            if( i != array.length - 1 )
                {
                    differenceDecrease.push( currentDigit - array[i+1] ) 
                    currentDigit = array[i+1]
                }
        }   
        console.log("Decrease : " + differenceDecrease)
    }
})

function isInscreasing(array) {
    let isIncreasing = true
    let firstDigit = array[0]

    for (let i = 0; i < array.length; i++) {
        if (firstDigit < array[i] )
            {
                firstDigit = array[i]
            }
        else isIncreasing = false
    }

    return isIncreasing
}