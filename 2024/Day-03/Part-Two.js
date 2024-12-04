import {readFile} from 'node:fs/promises';

let fileContent = await readFile('input.txt', 'utf8');
let sumOfMultiplication = 0; // Final result
const regex = /mul\((\d{1,3}),(\d{1,3})\)/g; // Representation of 'mul(n, m)' in regex format : n & m are variable numbers of 3 digits maximum

while (fileContent.includes("don't()") ) {

    let index = getIndex(fileContent)
    fileContent = removeSubstring(fileContent, index[0], index[1])

}


const matches = [...fileContent.matchAll(regex)];
    matches.forEach((match)=>{
       let n = match[1]
       let m = match[2]
       sumOfMultiplication += parseInt(m, 10) * parseInt(n, 10)
    })  

console.log(sumOfMultiplication)

function getIndex(str) {
    let indexDont = undefined
    let indexDo = undefined
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'd' && str[i + 1] === 'o' && str[i + 2] === 'n' && str[i + 3] === "'" && str[i + 4] === 't' && str[i + 5] === '(' && str[i + 6] === ')') {
            indexDont = i
            break
        } 
    }
    for (let i = 0; i < str.length; i++) {    
        if( (indexDont < i ) && (str[i] === 'd' && str[i + 1] === 'o' && str[i + 2] ==='(' && str[i + 3] === ')') ) {
                indexDo = i
                break
            }
    }
    if (indexDo && indexDont)
        return [indexDont, indexDo]
    else if (!indexDo )
        return [indexDont]
}


function removeSubstring(str, begin, end = str.length) {
    if (begin < 0 || begin >= str.length || begin >= end) {
      throw new Error("Indices invalides !");
    }
    // Concaténer la partie avant 'begin' et celle après 'end'
    return str.slice(0, begin) + str.slice(end);
  }
  