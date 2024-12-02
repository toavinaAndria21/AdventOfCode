import {readFile} from 'node:fs/promises'
import {isDigit} from './library.js'
const fileContent = await readFile('input.txt', {encoding:'utf8'})
let firstDigit
let lastDigit
let outPut = 0;

let i = 0;
let compteur = 1;
while ( compteur <= fileContent.length )
{
    if(fileContent[i] != '\n') {
        if( isDigit(fileContent[i]) && (typeof firstDigit === 'undefined')) 
        firstDigit = fileContent[i]
    
        if( isDigit(fileContent[i]) && ( (fileContent[i + 1] === '\n') || (!isDigit(fileContent[i + 1])) ) ) 
        lastDigit = fileContent[i]
    }
    else{
        outPut += parseInt(firstDigit +""+lastDigit)
        firstDigit = lastDigit = undefined
    }

    compteur++
    i++
}
console.log(outPut)
