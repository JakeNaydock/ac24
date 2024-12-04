const { dir } = require('console');
const fs = require('fs');
const data = fs.readFileSync('./input2.txt', 'utf-8');
const arrLines = data.split('\n');
//console.log('arrLines:\n', arrLines);
let safeRowCount = 0;
for (let i = 0; i < arrLines.length; i++) {
    const arrCurLine = arrLines[i].split(' ');
    //console.log('arrCurLine:\n', arrCurLine);

    let previousDirection;
    let direction;
    for (let j = 0; j < arrCurLine.length; j++) {
        if (i < 10) {
            console.log('j val', j);
            console.log('Previous num condition', (j > 0) ? arrCurLine[j - 1] * 1 : null);
        }
        const currentNum = arrCurLine[j] * 1;
        //console.log('Arr curr line length', arrCurLine.length);

        const previousNum = (j > 0) ? arrCurLine[j - 1] * 1 : null;

        //Stop if nums are equal

        //If there is no previous direction stop here
        //if (!previousDirection) continue;
        direction = ((previousNum) && currentNum < previousNum) ? 'decreasing' : 'increasing';
        let intSafe = safetyCheck(currentNum, previousNum, direction, previousDirection, i);
        if (i < 10) console.log(`Safety check line ${i} char ${j}:`, intSafe);
        if (!intSafe) break;
        if (j === arrCurLine.length - 1) safeRowCount++;
        previousDirection = direction;
    }
}

console.log('Safe row count:', safeRowCount);


function safetyCheck(currentNum, previousNum, direction, previousDirection, index) {
    if (index < 10) {
        console.log(`Current num: ${currentNum}. Previous num: ${previousNum}`);
        console.log(`Direction: ${direction}. Previous direction: ${previousDirection}`);
    }

    if (!previousNum) return 1;


    if (currentNum === previousNum) return 0;
    let absDiff = Math.abs(currentNum - previousNum);
    if (index < 10) {
        console.log('Abs diff: ', absDiff);
    }

    if (absDiff >= 1 && absDiff <= 3) {
        if (!previousDirection) return 1;
        return (previousDirection === direction) ? 1 : 0;
    } else {
        return 0
    }
}