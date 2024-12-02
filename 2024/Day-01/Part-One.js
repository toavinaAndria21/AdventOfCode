import {readFile} from 'node:fs/promises';

const fileContent = await readFile('input.txt', 'utf8');

let eachLine = fileContent.trim().split('\n'); // recupère chaque ligne
let leftList = []; // Liste gauche
let rightList = []; // Liste droite
let totalDistance = 0; //The final Answer


eachLine.map((line, i) => {
    //recupere la liste des nombre à gauche
    leftList.push(line.split('  ')[0]);
    //recupere la liste des nombre à droite
    rightList.push(line.split('  ')[1]);
})

// Calcule la distance totale en parcourant toutes les lignes
for (let i = 0; i < eachLine.length; i++) {

    let smallestLeft = getSmallestNumber(leftList); // Trouve le plus petit nombre à gauche
    removeItemFromArray(leftList, smallestLeft); // Supprime ce nombre de la liste gauche

    let smallestRight = getSmallestNumber(rightList); // Trouve le plus petit nombre à droite
    removeItemFromArray(rightList, smallestRight); // Supprime ce nombre de la liste droite

    // Ajoute la différence absolue entre les plus petits nombres à la distance totale
    totalDistance += Math.abs(smallestLeft - smallestRight)
}

/** 
 * trouve le plus petit nombre dans un tableau
 * @param {array<number>} array -Le tableau à parcourir
 * @returns {number} le plus petit nombre touvé
 */
function getSmallestNumber(array) {

    let smallestNumber = array[0]; //initialise avec le premier élement de array

    array.map((number, i) => {
            if (number < smallestNumber){ 
                smallestNumber = number;
            }
    })

    return smallestNumber
}

/**
 * Retire un élement spécifique dans un tableau
 * @param {array<any>} array -Le tableau à parcourir
 * @param {any} value - L'élement à supprimer
 */
function removeItemFromArray(array, value) {

    const index = array.indexOf(value) // recupere l'index de l'element

    if (index > -1) { // Si la valeur existe dans le tableau
        array.splice(index, 1); // Supprime l'élément de l'index spécifié
    }
}