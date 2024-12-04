import {readFile} from 'node:fs/promises';

let fileContent = await readFile('input.txt', 'utf8');
let sumOfMultiplication = 0; // Final result
const regex = /mul\((\d{1,3}),(\d{1,3})\)/g; // Representation of 'mul(n, m)' in regex format : n & m are variable numbers of 3 digits maximum

// loop until all substring between 'don't()' and 'do()' are all removed from fileContent ('don't()' is included in suppression)
while (fileContent.includes("don't()") ) {
    
    let index = getIndex(fileContent) // get index of the first don't() and do()
    fileContent = removeSubstring(fileContent, index[0], index[1]) // remove the substring between the two index and update fileContent

}


const matches = [...fileContent.matchAll(regex)];
    matches.forEach((match)=>{
       let n = match[1]
       let m = match[2]
       sumOfMultiplication += parseInt(m, 10) * parseInt(n, 10)
    })  

console.log(sumOfMultiplication)

/**
 * get index of the first don't() and the first following do()
 * @param {string} str 
 * @returns {Array<Number>} [indexDont, indexDo]
 */
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


/**
 * remove a substring (between begin and end) from a string
 * @param {string} str 
 * @param {integer} begin 
 * @param {integer} end 
 * @returns {string} str
 */
function removeSubstring(str, begin, end = str.length) {
    if (begin < 0 || begin >= str.length || begin >= end) {
      throw new Error("Indices invalides !");
    }
    // Concaténer la partie avant 'begin' et celle après 'end'
    return str.slice(0, begin) + str.slice(end);
  }
  