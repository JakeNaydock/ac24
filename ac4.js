const { log } = require('console');
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
        checkCharacters(arrRows, currentChar, xmas, xmasIndex, i, j);
    }
}

console.log(`Match count: `, matchCount);


function checkCharacters(arrRows, currentChar, xmas, xmasIndex, i, j) {

    console.log(`Current char: `, currentChar);

    if (currentChar != xmas[xmasIndex]) return;
    xmasIndex++;

    const indexes = [
        [i - 1, j - 1], [i - 1, j], [i - 1, j + 1],
        [i, j - 1], [i, j], [i, j + 1],
        [i + 1, j - 1], [i + 1, j], [i + 1, j + 1]
    ];
    //Loop through all indexes to check the next character

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



