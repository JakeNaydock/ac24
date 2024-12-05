const fs = require('fs');
const data = fs.readFileSync('./input2.txt', 'utf-8');
const arrLines = data.split('\n');
//console.log('Arrlines', arrLines);
let safeRowCount = 0;
for (let i = 0; i < arrLines.length; i++) {
    const arrCurLine = arrLines[i].split(' ');
    let previousDirection;
    let direction;


    for (let j = 0; j < arrCurLine.length; j++) {
        const currentNum = arrCurLine[j] * 1;
        const previousNum = (j > 0) ? arrCurLine[j - 1] * 1 : null;
        let nextNum = (j < arrCurLine.length - 1) ? arrCurLine[j + 1] : null;
        //console.log('Next num', nextNum);
        if (!previousNum) continue;
        direction = (currentNum < previousNum) ? 'decreasing' : 'increasing';
        let intSafe = safetyCheck(currentNum, previousNum, direction, previousDirection);
        //console.log(`Index ${j} / Int Safe?: ${intSafe} Current num: ${currentNum}, Previous Num: ${previousNum}, Direction: ${direction}, Previous Direction: ${previousDirection}`);
        let safeAfterRemoval;
        if (!intSafe) {
            safeAfterRemoval = safetyCheck(nextNum, previousNum, direction, previousDirection, true);
            if (!safeAfterRemoval) break;
            arrCurLine.splice(j, 1);
            console.log(`Line ${i + 1} of text document, number ${j + 1} (${currentNum}) is safe after removal`);
            j = j - 1;
            console.log('New j value before continuing loop: ', j);
            continue;
        }
        //!arrCurLine[j + 1]
        //j === arrCurLine.length - 1
        if (!arrCurLine[j + 1]) {
            safeRowCount++;
            if (safeAfterRemoval) {
                console.log(`Line ${i + 1} of text document is safe, and contains a removal. Index ${j}`);
            }
        }

        previousDirection = direction;
    }
}

console.log('Part 2 Answer:', safeRowCount);

function safetyCheck(currentNum, previousNum, direction, previousDirection, debug) {
    //if (debug) console.log(`Current (or next) num: ${currentNum}, Previous Num: ${previousNum}, Direction: ${direction}, Previous Direction: ${previousDirection}`);

    if (!previousNum) return 1;
    if (currentNum === previousNum) return 0;
    let absDiff = Math.abs(currentNum - previousNum);
    if (absDiff >= 1 && absDiff <= 3) {
        return (!previousDirection || previousDirection === direction) ? 1 : 0;
    } else {
        return 0
    }
}