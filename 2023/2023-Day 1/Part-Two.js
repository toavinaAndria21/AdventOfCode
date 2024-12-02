import {readFile} from 'node:fs/promises';
import {isDigit} from './library.js'
import {isTheStringDigit} from './library.js'

let compteur = 1;
let i = 0;
let firstDigit;
let lastDigit;
let outPut = 0;
const fileContent = await readFile('input.txt', 'utf8');

while(compteur <= fileContent.length)
    {
        if(fileContent[i] != '\n') {
            
            if( isDigit(fileContent[i]) && (typeof firstDigit === 'undefined')) 
                firstDigit = fileContent[i];
            else if (typeof firstDigit === 'undefined')
                firstDigit = isTheStringDigit(fileContent[i], fileContent, i);
        
            if( isDigit(fileContent[i]) && ( (fileContent[i + 1] === '\n') || (!isDigit(fileContent[i + 1])) ) ) 
                lastDigit = fileContent[i]
            else if( !parseInt(fileContent[i]) && (fileContent[i + 1] != '\n') )
              {
                let digit = isTheStringDigit(fileContent[i], fileContent, i);
                if(parseInt(digit)) lastDigit = digit   
              }
        }
        else{
            outPut += parseInt(firstDigit +""+lastDigit)
            firstDigit = lastDigit = undefined
        }
        compteur++;
        i++;
    }

console.log(outPut);