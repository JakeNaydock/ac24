const fs = require('fs');
const data = fs.readFileSync('./input2.txt', 'utf-8');
const arrLines = data.split('\n');
let safeRowCount = 0;
let unsafeLines = [];
for (let i = 0; i < arrLines.length; i++) {
    const arrCurLine = arrLines[i].split(' ');
    let previousDirection;
    let direction;
    for (let j = 0; j < arrCurLine.length; j++) {
        const currentNum = arrCurLine[j] * 1;
        const previousNum = arrCurLine[j - 1];
        if (!previousNum) continue;
        direction = (currentNum < previousNum) ? 'decreasing' : 'increasing';
        const intSafe = safetyCheck(currentNum, previousNum, direction, previousDirection);
        if (!intSafe) {
            unsafeLines.push(arrCurLine);
            break;
        }
        if (j === arrCurLine.length - 1) safeRowCount++;
        previousDirection = direction;
    }
}

console.log('Part 1 Answer:', safeRowCount);

let safeWithRemovalRowCount = 0;

for (let k = 0; k < unsafeLines.length; k++) {
    let arrUnsafeLine = unsafeLines[k];
    for (let m = 0; m < arrUnsafeLine.length; m++) {
        const splicedArr = arrUnsafeLine.toSpliced(m, 1);
        let previousDirection;
        let direction;
        let lineSafe = false;
        for (let n = 0; n < splicedArr.length; n++) {
            const currentNum = splicedArr[n] * 1;
            const previousNum = splicedArr[n - 1] * 1;
            if (!previousNum) continue;
            direction = (currentNum < previousNum) ? 'decreasing' : 'increasing';
            const intSafe = safetyCheck(currentNum, previousNum, direction, previousDirection);
            if (!intSafe) break;
            if (n === splicedArr.length - 1) {
                safeWithRemovalRowCount++;
                lineSafe = true;
            }
            previousDirection = direction;
        }
        if (lineSafe) break;
    }
}

const combinedTotal = safeRowCount + safeWithRemovalRowCount;
console.log('Part 2 answer? ', combinedTotal);

function safetyCheck(currentNum, previousNum, direction, previousDirection) {
    if (!previousNum) return 1;
    if (currentNum === previousNum) return 0;
    const absDiff = Math.abs(currentNum - previousNum);
    if (absDiff >= 1 && absDiff <= 3) {
        return (!previousDirection || previousDirection === direction) ? 1 : 0;
    } else {
        return 0
    }
}