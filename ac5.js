const fs = require('fs');
const data = fs.readFileSync('./input5.txt', 'utf-8');

const splitData = data.split('\n\n');
//console.log(`Splitdata: `, splitData);
const rules = splitData[0].split('\n').map((rule) => rule.split('|'));
console.log(`rules: `, rules);
const instructions = splitData[1].split('\n').map((row) => row.split(','));
console.log(`instructions: `, instructions);

/**
 * Loop through each instruction line
 * Loop through each instruction on a given line
 * For each instruction, check where that appears in the list of rules
 * For each of those rules, compare to the
 */