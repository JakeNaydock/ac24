const fs = require('fs');
const data = fs.readFileSync('./input2.txt', 'utf-8');
const arrLines = data.split('\n');
let safeRowCount = 0;
for (let i = 0; i < arrLines.length; i++) {
    const arrCurLine = arrLines[i].split(' ');
    let previousDirection;
    let direction;
    for (let j = 0; j < arrCurLine.length; j++) {
        const currentNum = arrCurLine[j] * 1;
        const previousNum = (j > 0) ? arrCurLine[j - 1] * 1 : null;
        if (!previousNum) continue;
        direction = (currentNum < previousNum) ? 'decreasing' : 'increasing';
        let intSafe = safetyCheck(currentNum, previousNum, direction, previousDirection);
        if (!intSafe) break;
        if (j === arrCurLine.length - 1) safeRowCount++;
        previousDirection = direction;
    }
}

console.log('Part 1 Answer:', safeRowCount);

function safetyCheck(currentNum, previousNum, direction, previousDirection) {
    if (!previousNum) return 1;
    if (currentNum === previousNum) return 0;
    let absDiff = Math.abs(currentNum - previousNum);
    if (absDiff >= 1 && absDiff <= 3) {
        return (!previousDirection || previousDirection === direction) ? 1 : 0;
    } else {
        return 0
    }
}