import {readFile} from 'node:fs/promises';


const fileContent = await readFile('input.txt', 'utf8');
let sumOfMultiplication = 0; // Final result

let eachLine = fileContent.trim().split('\n'); // get each line of the file

const regex = /mul\((\d{1,3}),(\d{1,3})\)/g; // Representation of 'mul(n, m)' in regex format : n & m are variable numbers of 3 digits maximum
eachLine.forEach((string)=>{
    const matches = [...string.matchAll(regex)]; 
    matches.forEach((match)=>{
       let n = match[1]
       let m = match[2]
       sumOfMultiplication += parseInt(m, 10) * parseInt(n, 10)
    })  
})

console.log(sumOfMultiplication)

