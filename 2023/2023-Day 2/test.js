import { readFile } from 'node:fs/promises';
import { isDigit } from './library.js'; 
import { getAllDigitInString } from './library.js';
const fileContent = await readFile('test2.txt', 'utf8');

let arrayOfEachLine = fileContent.split('\n');  //liste de toutes les parties (array)

var IDs = 0;
var allSetAreCorrect = true;
var red = "0";
var blue = "0";
var green = "0";
var rouge = 0, bleu = 0, vert = 0;
for(let i = 0; i < arrayOfEachLine.length; i++) // parcourir chaque partie
    {
    let lineSet = arrayOfEachLine[i].split(';'); // liste des tirages sur chaque partie  
    var lineID = i + 1; // numero de la partie en cours
    let set1 = false, set2 = false, set3 = false;
        for (let j = 0; j < lineSet.length; j++) // parcourir chaque tirage
         {
            lineSet[j] = lineSet[j].replaceAll('Game ' + lineID + ':', '');
            let eachSet = lineSet[j];
            red = green = blue = "0";
              for (let k =0; k < eachSet.length; k++) // recuperer le nombre de chaque cubes au tirage
                {
                     if( isDigit(eachSet[k]) && !isDigit(eachSet[k+1]))
                       {
                           let color = eachSet[k+2];
                           switch( color ){
                            case 'r': 
                                red = eachSet[k]; 
                                rouge = parseInt(red)
                                break;
                            case 'g': 
                                green = eachSet[k]; 
                                vert = parseInt(green)
                                break;
                            case 'b': 
                                blue = eachSet[k]; 
                                bleu = parseInt(blue)
                                break;
                            }
                       }
                    else if ( isDigit(eachSet[k]) && isDigit(eachSet[k+1]) )
                       {
                            let color = eachSet[k+3];
                            switch( color ){
                            case 'r': 
                                red = eachSet[k];
                                red += eachSet[k+1]
                                rouge = parseInt(red)
                                break;
                            case 'g': 
                                green = eachSet[k];
                                green += eachSet[k+1]
                                vert = parseInt(green) 
                                break;
                            case 'b': 
                                blue = eachSet[k];
                                blue += eachSet[k+1]
                                bleu = parseInt(blue)
                                break;
                            }
                       }
               
                }
                console.log(eachSet + " : " + "  B ="  + bleu + "  G =" + vert + "  R =" + rouge );              
                console.log("Tirage N° = " + j)
                if( (j === 0) && (parseInt(rouge) <= 12 && parseInt(vert) <= 13 && parseInt(bleu) <= 14) )
                    set1 = true;
                else if( (j === 1) && (parseInt(rouge) <= 12 && parseInt(vert) <= 13 && parseInt(bleu) <= 14) )
                    set2 = true;
                else if( (j === 2) && (parseInt(rouge) <= 12 && parseInt(vert) <= 13 && parseInt(bleu) <= 14) )   
                    set3 = true;          
         }
     if ( set1 && set2 && set3) 
     {
        console.log("Vrai Set1 :" + set1 + " Set2 :" + set2 + " Set3 :" + set3)
        IDs += lineID; 
     } else console.log("Faux Set1 :" + set1 + " Set2 :" + set2 + " Set3 :" + set3)
    }
console.log("Output :" + IDs);