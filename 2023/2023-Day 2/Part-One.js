import { readFile } from 'node:fs/promises';
import { isDigit } from './library.js'; 
import { getAllDigitInString } from './library.js';
const fileContent = await readFile('test2.txt', 'utf8');

let arrayOfEachLine = fileContent.split('\n');

var IDs = 0;
var allSetAreCorrect = true;
for(let i = 0; i < arrayOfEachLine.length; i++)
    {
        let lineID = i + 1;
        let red = "0";
        let green = "0"; 
        let blue = "0";
        let totalCubeInOneSet = 0;
   
        let line = arrayOfEachLine[i];
        let setsInEachLine = line.split(';');
        for (let j = 0; j < setsInEachLine.length; j++)
            {
                setsInEachLine[j] = setsInEachLine[j].replaceAll('Game ' + lineID + ':', '');
                console.log(...setsInEachLine[j]);
                let set = setsInEachLine[j];
                    for (let k = 0; k < set.length; k++)
                            {
                                if( isDigit(set[k]) ) totalCubeInOneSet += parseInt(set[k]);
                            }
                console.log(totalCubeInOneSet);
                if (totalCubeInOneSet < 39 ){
                    for(let k = 0; k < set.length; k++)
                        {
                            if( isDigit(set[k]) )
                                {
                                    if ( isDigit(set[k+1]) )
                                    {
                                        let color = set[ k + 3 ];
                                        switch( color ){
                                            case 'r': 
                                               red += set[k] + set[k+1];
                                             //   console.log(red);
                                                break;
                                            case 'g':
                                               green += set[k] + set[k+1];
                                                break;
                                            case 'b': 
                                               blue += set[k] + set[k+1];
                                                break;
                                        }

                                    }else {
                                        let color = set[ k + 2 ];
                                        switch( color ){
                                            case 'r': 
                                                red = set[k]; 
                                                break;
                                            case 'g': 
                                                green = set[k]; 
                                                break;
                                            case 'b': 
                                                blue = set[k]; 
                                                break;
                                        }
                                    }
                                    
                                }

                        }
                    if ( parseInt(red) <= 12 && parseInt(green) <= 13 && parseInt(blue) <= 14 )
                        {
                          //  console.log("IF :" + blue + ' ' + red + ' ' + green );
                            allSetAreCorrect = true;
                        } 
                    else {
                       // console.log("Else :" + blue + ' ' + red + ' ' + green );
                        allSetAreCorrect = false;  
                    }  
                    
                  
                }
            //console.log(blue + ' ' + red + ' ' + green );
           // console.log(allSetAreCorrect)
         //   console.log("Ligne " + lineID + " : Set " + j + " => " + "Blue : "+ blue + ' ' +  "Red : " + red + ' ' +  "Green : " +green + "    Correct : "+ allSetAreCorrect)
            }
    // console.log('Ligne ' + lineID + ': Set ' + lineID + " " + red)
     if ( allSetAreCorrect ) IDs += lineID;
    }

    //console.log(IDs);