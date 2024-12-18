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
        checkCharacters(arrRows, currentChar, xmas, xmasIndex, i, j, null);
    }
}

console.log(`Match count: `, matchCount);


function checkCharacters(arrRows, currentChar, xmas, xmasIndex, row, column, indexToCheck) {

    console.log('Index to check: ', indexToCheck);

    console.log(`current char / xmas letter / xmas index: `, `${currentChar} / ${xmas[xmasIndex]} / ${xmasIndex}`);

    const isMatch = char => (char === xmas[xmasIndex]);
    console.log(`Current char matches? `, isMatch(currentChar));

    if (!isMatch(currentChar)) return;
    if (xmasIndex === xmas.length - 1) {
        matchCount++;
        return;
    }

    xmasIndex++;

    const indexes = [
        [row - 1, column - 1], [row - 1, column], [row - 1, column + 1],
        [row, column - 1], [row, column + 1],
        [row + 1, column - 1], [row + 1, column], [row + 1, column + 1]
    ];
    //Loop through all indexes to check the next character
    //If we already have a specific direction we are checking
    //console.log(`Index to check (before if statement): `, indexToCheck);
    if (indexToCheck) {
        let direction = indexes[indexToCheck];
        console.log(`Check bounds eval in indexToCheck: `, checkBounds(indexToCheck, arrRows, row));
        if (!checkBounds(direction, arrRows, row)) return;
        let char = arrRows[direction[0]][direction[1]];
        console.log(`Char / Xmas letter in index to check / matches?`, `${char} / ${xmas[xmasIndex]} / ${isMatch(char)}`);

        //if (!isMatch(char)) return;
        /*
        if (xmasIndex === xmas.length - 1) {
            matchCount++;
            console.log(`Match added from index to check`);
            return;
        } else {
         */
        checkCharacters(arrRows, char, xmas, xmasIndex, indexToCheck[0], indexToCheck[1], indexToCheck);
        //}

    } else {
        //Loop through indexes and start checking
        for (let k = 0; k < indexes.length; k++) {

            if (!checkBounds(indexes[k], arrRows, row)) continue;
            //console.log(arrRows[rowIdx][colIdx]);
            let char = arrRows[indexes[k][0]][indexes[k][1]];
            //Stop here if it's not a match on xmas
            //console.log(`Char / xmas letter: `, `${char} / ${xmas[xmasIndex]}`);
            //console.log(`Xmas index / xmas length: `, `${xmasIndex} / ${xmas.length}}`);
            //if (!isMatch(char)) continue;
            /*
            if (xmasIndex === xmas.length - 1) {
                matchCount++;
                console.log(`Match added from loop`);
            } else {
             */
            //console.log(`indexes[k]: `, indexes[k]);
            checkCharacters(arrRows, char, xmas, xmasIndex, indexes[k][0], indexes[k][1], k/*indexes[k]*/); //THIS NEEDS TO BE PASSED IN AS K
            //}
        }
    }
}


function checkBounds(arrIndexes, arrRows, row) {
    let rowIdx = arrIndexes[0];
    let colIdx = arrIndexes[1];
    //console.log(`rowxid: `, rowIdx);
    console.log(`rowIdx / arrRows.length: `, `${rowIdx} / ${arrRows.length}`);
    if (
        rowIdx >= 0 && rowIdx < arrRows.length && // Check row bounds
        colIdx >= 0 && colIdx < arrRows[row].length   // Check column bounds
    ) {
        return true;
    } else {
        return false;
    }
}



