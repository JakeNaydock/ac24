const fs = require('fs');
const data = fs.readFileSync('./input4min.txt', 'utf-8');

const arrRows = data.split('\n');
console.log(`arrRows: `, arrRows);



for (let i = 0; i < arrRows.length; i++) {
    const rowData = arrRows[i];

    for (let j = 0; j < rowData.length; j++) {

        const indexes = [
            [i - 1][j - 1], [i - 1][j], [i - 1][j + 1],
            [j - 1], [j], [j + 1],
            [i + 1][j - 1], [i - 1][j], [i + 1][j + 1]
        ];

        const currentChar = rowData[j];
        /*
        const nextChar = rowData[j + 1];
        const previousChar = rowData[j - 1];
        */
        indexes.forEach((ind) => {
            console.log(arrRows[ind]);
        });
    }
}



