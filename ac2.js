const { dir } = require('console');
const fs = require('fs');
const data = fs.readFileSync('./input2.txt', 'utf-8');
const arrLines = data.split('\n');
//console.log('arrLines:\n', arrLines);

for (let i = 0; i < arrLines.length; i++) {
    const arrCurLine = arrLines[i].split(' ');
    //console.log('arrCurLine:\n', arrCurLine);

    let previousDirection = 'equal';
    for (let j = 0; j < arrCurLine.length; j++) {

        const currentNum = arrCurLine[j] * 1;
        const previousNum = (!j) ? null : arrCurLine[j - 1] * 1;
        console.log(`Line ${i}. Current num: ${currentNum}. Previous num: ${previousNum}`);
        if (!previousNum) continue;

        if (currentNum < previousNum) {
            direction = 'decreasing';
        } else if (currentNum === previousNum) {
            direction = 'equal';
        } else if (currentNum > previousNum) {
            direction = 'increasing';
        }




    }

}
