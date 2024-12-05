import {readFile} from 'node:fs/promises';

const fileContent = await readFile('input.txt', 'utf8');

let eachLine = fileContent.trim().split('\n'); // recupère chaque ligne
