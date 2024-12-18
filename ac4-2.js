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
        if (rowData[j] === xmas[0]) {
            // Start search for matches in all directions
            searchInAllDirections(arrRows, xmas, i, j);
        }
    }
}

console.log(`Match count: `, matchCount);

// Function to search for "XMAS" in all 8 directions
function searchInAllDirections(arrRows, xmas, startRow, startCol) {
    const directions = [
        [-1, -1], [-1, 0], [-1, 1], // Up-left, Up, Up-right
        [0, -1], [0, 1],    // Left, Right
        [1, -1], [1, 0], [1, 1]     // Down-left, Down, Down-right
    ];

    // Loop through each direction
    for (const [rowOffset, colOffset] of directions) {
        let row = startRow;
        let col = startCol;
        let xmasIndex = 0;

        // Traverse in the current direction
        while (xmasIndex < xmas.length) {
            // Check bounds
            if (!checkBounds(row, col, arrRows)) break;

            // Check if character matches
            if (arrRows[row][col] !== xmas[xmasIndex]) break;

            // Move to the next character in "XMAS"
            xmasIndex++;
            row += rowOffset;
            col += colOffset;
        }

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
