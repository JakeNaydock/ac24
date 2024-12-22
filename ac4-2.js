const { log } = require('console');
const fs = require('fs');
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
            searchInAllDirections(arrRows, xmas, i, j);
        }
    }
}

console.log(`Match count: `, matchCount);

// Function to search for "XMAS" in all 8 directions
function searchInAllDirections(arrRows, xmas, startRow, startCol) {

    const directionsA = [
        [-1, -1], [1, 1] //Up-left, down-right
    ];
    const directionsB = [
        [1, -1], [-1, 1] //Down-left, up-right
    ];

    let match1 = false;
    let match2 = false;

    for (let j = 0; j < directionsA.length; j++) {
        const [rowOffset, colOffset] = directionsA[j];
        const otherDirection = (j === 0) ? 1 : 0;
        const [otherDirRowOffset, otherDirColumnOffset] = directionsA[otherDirection];

        if (arrRows[rowOffset][colOffset] === 'S') {
            if (arrRows[otherDirRowOffset][otherDirColumnOffset] === 'M') {
                match1 = true;
                break;
            }

        } else if (arrRows[rowOffset][colOffset] === 'M') {
            if (arrRows[rowOffset][colOffset] === 'S') {
                break;
            }
        }


    }

    // Loop through each direction
    for (const [rowOffset, colOffset] of directionsA) {
        let row = startRow;
        let col = startCol;

        // Traverse in the current direction
        //while (xmasIndex < xmas.length) {
        // Check bounds
        if (!checkBounds(row, col, arrRows)) break;

        // Check if character matches

        if (arrRows[row][col] === 'S') {
            if (arrRows[row][col] === 'M') {

            }
        }

        // Move to the next character in "XMAS"
        xmasIndex++;
        row += rowOffset;
        col += colOffset;
        //}

        // If we matched the entire "XMAS", increment match count
        if (xmasIndex === xmas.length) {
            matchCount++;
            console.log(`Match found starting at (${startRow}, ${startCol}) in direction (${rowOffset}, ${colOffset})`);
        }
    }
}

// Helper function to check bounds
function checkBounds(row, col, arrRows) {
    return row >= 0 && row < arrRows.length && col >= 0 && col < arrRows[row].length;
}
