const fs = require('fs');
const data = fs.readFileSync('./input4min.txt', 'utf-8');

const arrRows = data.split('\n');
console.log(`arrRows: `, arrRows);
const xmas = ['X', 'M', 'A', 'S'];

for (let i = 0; i < arrRows.length; i++) {
    const rowData = arrRows[i];

    for (let j = 0; j < rowData.length; j++) {

        const indexes = [
            [i - 1, j - 1], [i - 1, j], [i - 1, j + 1],
            [i, j - 1], [i, j], [i, j + 1],
            [i + 1, j - 1], [i + 1, j], [i + 1, j + 1]
        ];



        //const currentChar = rowData[j];
        const currentChar = rowData[j];

        let xmasIndex = 0;

        if (currentChar === xmas[xmasIndex]) {
            //Loop through all indexes to check the next character
            xmasIndex++;
            for (let k = 0; k < indexes.length; k++) {
                let rowIdx = indexes[k][0];
                let colIdx = indexes[k][1];
                if (
                    rowIdx >= 0 && rowIdx < arrRows.length && // Check row bounds
                    colIdx >= 0 && colIdx < rowData.length   // Check column bounds
                ) {
                    console.log(arrRows[rowIdx][colIdx]);
                    let char = arrRows[rowIdx][colIdx];
                    if (char === xmas[xmasIndex]) {

                    }



                } else {
                    continue;
                }
            }
        }
    }
}

function checkCharacters(arrRows, currentChar, xmas, xmasIndex) {

    if (currentChar != xmas[xmasIndex]) return;
    //Loop through all indexes to check the next character
    xmasIndex++;
    for (let k = 0; k < indexes.length; k++) {
        let rowIdx = indexes[k][0];
        let colIdx = indexes[k][1];
        if (
            rowIdx >= 0 && rowIdx < arrRows.length && // Check row bounds
            colIdx >= 0 && colIdx < rowData.length   // Check column bounds
        ) {
            console.log(arrRows[rowIdx][colIdx]);
            let char = arrRows[rowIdx][colIdx];
            if (char === xmas[xmasIndex]) {

            }
        } else {
            continue;
        }
    }


}



