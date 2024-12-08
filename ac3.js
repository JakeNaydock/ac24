const fs = require('fs');
const data = fs.readFileSync('./input3.txt', 'utf-8');
const multiply = (num1, num2) => num1 * num2;
console.log('Data: ', data);

//const re = /(mul)/g;
//let reString = re.exec(data);
//console.log('Restring: ', reString);

const firstIndex = data.indexOf('mul(');
