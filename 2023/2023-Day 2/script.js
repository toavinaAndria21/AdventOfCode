import { readFile } from 'node:fs/promises';
import { isDigit } from './library.js';

const fileContent = await readFile('test2.txt', 'utf8');
let arrayOfEachLine = fileContent.split('\n');

for(let i = 0; i < arrayOfEachLine.length; i++)
{
    let lineId = i + 1;
    let lineString = arrayOfEachLine[i];
    console.log(lineString);
    lineString = lineString.replaceAll('Game ' + lineId + ':', '')
    
    let setList = lineString.split(';');
    for (let j = 0; j < setList.length; j++)
        {
            let set = setList[j].split(',');
            for (let j = 0; j < set.length; j++)
            {
                    var red = 0, green = 0, blue = 0;
                    set[j] = set[j].trimStart();
                    let numberAndColor = set[j].split(' ');
                    //console.log(numberAndColor)
                
                    switch (numberAndColor[1]){
                        case 'red':
                            red = parseInt(numberAndColor[0]);
                            break;
                        case 'green':
                            green = parseInt(numberAndColor[0]);
                            break;
                        case 'blue':
                            blue = parseInt(numberAndColor[0]);
                            break;
                    }
                }
                console.log("SET " + j + "  =>RED :" + red + "  BLUE :" + green + "  GREEN :" + blue);
        }
}