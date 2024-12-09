const fs = require('fs');
const data = fs.readFileSync('./input3.txt', 'utf-8');
const multiply = (num1, num2) => num1 * num2;


function findAllMulStrings(str) {
    const regex = /mul\((\d{1,3}),\s?(\d{1,3})\)/g; // Notice the 'g' flag for global matching
    let matches = [];
    let match;
    while ((match = regex.exec(str)) != null) {
        matches.push([parseInt(match[1]), parseInt(match[2])]); // Convert numbers to integers
    }
    return matches;
}

let arrNumbersToMultiply = findAllMulStrings(data);

let sum = 0;
arrNumbersToMultiply.forEach((el) => sum += multiply(el[0], el[1]));
console.log(`Part 1 total: `, sum);
