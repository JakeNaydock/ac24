const { log } = require('console');
const fs = require('fs');
const { start } = require('repl');
const data = fs.readFileSync('./input4.txt', 'utf-8');

// Parse grid from input file
const arrRows = data.split('\n');
console.log(`arrRows: `, arrRows);
const xmas = ['X', 'M', 'A', 'S'];

let matchCount = 0;

// Main loop to iterate through the grid
for (let i = 0; i < arrRows.length; i++) {
    const rowData = arrRows[i];
    for (let j = 0; j < rowData.length; j++) {
        if (rowData[j] === xmas[2]) {
            // Start search for matches in all directions
            searchInAllDirections(arrRows, i, j);
        }
    }
}

console.log(`Match count: `, matchCount);

// Function to search for "XMAS" in all 8 directions
function searchInAllDirections(arrRows, startRow, startCol) {
    console.log(`Start row / col: `, `${startRow} / ${startCol}`);
    console.log(`ArrRows`, arrRows);

    const directionsA = [
        [-1, -1], [1, 1] //Up-left, down-right
    ];
    const directionsB = [
        [1, -1], [-1, 1] //Down-left, up-right
    ];

    const checkMatch = (directions) => {
        const [rowOffset, colOffset] = directions[0];
        const [otherDirRowOffset, otherDirColumnOffset] = directions[1];
        console.log(`Row offset: ${rowOffset} `, `Col offset: ${colOffset}`);

        if (!checkBounds(startRow, startCol, arrRows)) return false;
        //if (!checkBounds())

        if (arrRows[rowOffset][colOffset] === 'S') {
            if (arrRows[otherDirRowOffset][otherDirColumnOffset] === 'M') {
                return true;
            }

        } else if (arrRows[rowOffset][colOffset] === 'M') {
            if (arrRows[otherDirRowOffset][otherDirColumnOffset] === 'S') {
                return true;
            }
        } else {
            return false;
        }
    }

    if (!checkMatch(directionsA)) return;
    if (checkMatch(directionsB)) matchCount++;

}

// Helper function to check bounds
function checkBounds(row, col, arrRows) {
    return row >= 0 && row < arrRows.length && col >= 0 && col < arrRows[row].length;
}
