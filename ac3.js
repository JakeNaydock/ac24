const { log } = require('console');
const fs = require('fs');
const data = fs.readFileSync('./input3min.txt', 'utf-8');
const multiply = (num1, num2) => num1 * num2;
//console.log('Data: ', data);

//const re = /(mul)/g;
//let reString = re.exec(data);
//console.log('Restring: ', reString);

//const firstIndex = data.indexOf('mul(');
//let newStr = data.slice(firstIndex, firstIndex + 12);
//console.log(`newStr: `, newStr);

let numbersToMultiply = [];
let validSequence = false;
let capturingNumbers = false;
let stringBuilder = '';

for (let i = 0; i < data.length; i++) {
    const currentChar = data[i];
    console.log(`Current i value: `, i);
    if (currentChar === 'm') {
        console.log(`Current char: `, currentChar);
        let slicedData = data.slice(i, i + 4);
        console.log(`Sliced Data: `, slicedData);
        console.log(`i + 5: `, `i + 5 val: ${i + 5}, char for i + 5: ${data[i + 5]}`);
        if (slicedData === 'mul(') {
            validSequence = true;
            i = i + 3;
            continue;
        }
    }
    if (validSequence) console.log(`In valid sequence, current char / previous char: `, currentChar + '/' + data[i - 1]);
    if (validSequence) {
        if (!isNaN(currentChar)) capturingNumbers = true;
    }
}