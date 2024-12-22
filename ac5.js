const fs = require('fs');
const data = fs.readFileSync('./input5.txt', 'utf-8');

const splitData = data.split('\n\n');
console.log(`Splitdata: `, splitData);
const rules = splitData[0];
const instructions = splitData[1];
console.log(`instructions: `, instructions);