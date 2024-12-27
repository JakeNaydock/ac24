const fs = require('fs');
const data = fs.readFileSync('./input5.txt', 'utf-8');

const splitData = data.split('\n\n');
//console.log(`Splitdata: `, splitData);
const splitToNumber = (row, delimiter) => {
    row = row.split(delimiter);
    return row.map((str) => str * 1);
}
const rules = splitData[0].split('\n').map((rule) => splitToNumber(rule, '|'));
console.log(`rules: `, rules);

const instructions = splitData[1].split('\n').map((row) => splitToNumber(row, ','));
console.log(`instructions: `, instructions);

/**
 * Loop through each instruction line
 * Loop through each instruction on a given line
 * For each instruction, check where that appears in the list of rules
 * For each of those rules, find the other number in the rule.
 * Check for that number in the instruction line, and see if the number comes before or after according to the rule
 * If rule passes, move to next rule until are rules are complete.
 * If all rules pass, move to next number in that instruction
 * If all numbers in that line pass all rules - mark line as passed
 * Find middle number of the line that passes
 * Add that number to total sum
 */

for (let i = 0; i < instructions.length; i++) {
    let instructionLine = instructions[i];
    for (let j = 0; j < instructionLine.length; j++) {

    }

}