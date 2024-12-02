import {readFile} from 'node:fs/promises';

const fileContent = await readFile('input.txt', 'utf8');

let eachLine = fileContent.trim().split('\n'); // recupère chaque ligne
let leftList = []; // Liste gauche
let rightList = []; // Liste droite
let similarityScore = 0; //The final Answer


eachLine.map((line, i) => {
    //recupere la liste des nombre à gauche
    leftList.push(line.split('  ')[0]);
    //recupere la liste des nombre à droite
    rightList.push(line.split('  ')[1]);
})


leftList.map((numberLeft, i) => {
    
    let occurrence = 0 // Nombre d'occurence 

    rightList.map((numberRight, j) => {

         if (numberLeft.trim() === numberRight.trim()) {
            occurrence += 1; //incremente le nombre d'occurence du nombre de la leftList à chaque fois qu'il est present dans rightList
        }

    })

    similarityScore += parseInt(numberLeft, 10) * occurrence
})

