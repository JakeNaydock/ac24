//const { log } = require('console');
const fs = require('fs');
const data = fs.readFileSync('./input4min.txt', 'utf-8');

const arrRows = data.split('\n');
console.log(`arrRows: `, arrRows);
const xmas = ['X', 'M', 'A', 'S'];

let matchCount = 0;

for (let i = 0; i < arrRows.length; i++) {
    const rowData = arrRows[i];
    for (let j = 0; j < rowData.length; j++) {

        const currentChar = rowData[j];
        let xmasIndex = 0;
        checkCharacters(arrRows, currentChar, xmas, xmasIndex, i, j, null);
    }
}

console.log(`Match count: `, matchCount);


function checkCharacters(arrRows, currentChar, xmas, xmasIndex, row, column, indexToCheck) {

    console.log(`Current char: `, currentChar);

    if (xmasIndex === 0 && currentChar != xmas[xmasIndex]) return;
    xmasIndex++;

    const indexes = [
        [row - 1, column - 1], [row - 1, column], [row - 1, column + 1],
        [row, column - 1], [row, column], [row, column + 1],
        [row + 1, column - 1], [row + 1, column], [row + 1, column + 1]
    ];
    //Loop through all indexes to check the next character

    function checkBounds(arrIndexes, arrRows, row) {
        let rowIdx = arrIndexes[0];
        let colIdx = arrIndexes[1];

        if (
            rowIdx >= 0 && rowIdx < arrRows.length && // Check row bounds
            colIdx >= 0 && colIdx < arrRows[row].length   // Check column bounds
        ) {
            return true;
        } else {
            return false;
        }
    }

    for (let k = 0; k < indexes.length; k++) {
        let rowIdx = indexes[k][0];
        let colIdx = indexes[k][1];
        if (
            rowIdx >= 0 && rowIdx < arrRows.length && // Check row bounds
            colIdx >= 0 && colIdx < arrRows[i].length   // Check column bounds
        ) {
            //console.log(arrRows[rowIdx][colIdx]);
            let char = arrRows[rowIdx][colIdx];
            //Stop here if it's not a match on xmas
            console.log(`Char / xmas letter: `, `${char} / ${xmas[xmasIndex]}`);
            console.log(`Xmas index / xmas length: `, `${xmasIndex} / ${xmas.length}}`);
            if (char != xmas[xmasIndex]) continue;
            //xmasIndex++;

            if (xmasIndex === xmas.length - 1) {
                matchCount++;
                console.log(`Match added on rowId ${rowIdx} / colId ${colIdx}`);
            } else {
                checkCharacters(arrRows, char, xmas, xmasIndex + 1, i, j);
            }

        } else {
            continue;
        }
    }
}



