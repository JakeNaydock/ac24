const fs = require('fs');
const data = fs.readFileSync('./input5.txt', 'utf-8');

const splitData = data.split('\n\n');
const splitToNumber = (row, delimiter) => {
    row = row.split(delimiter);
    return row.map((str) => str * 1);
}
const rules = splitData[0].split('\n').map((rule) => splitToNumber(rule, '|'));
const instructions = splitData[1].split('\n').map((row) => splitToNumber(row, ','));

let sum = 0;

for (let i = 0; i < instructions.length; i++) {
    const instructionLine = instructions[i];

    for (let j = 0; j < instructionLine.length; j++) {
        const currentNum = instructionLine[j];
        const matchingRules = rules.filter(subArray => subArray.includes(currentNum));
        let charPassesRules = true;

        for (let k = 0; k < matchingRules.length; k++) {
            const rule = matchingRules[k];
            if (currentNum === rule[0]) {
                if (instructionLine.indexOf(rule[1]) !== -1 && (instructionLine.indexOf(currentNum) > instructionLine.indexOf(rule[1]))) {
                    charPassesRules = false;
                    break;
                }
            } else {
                if (instructionLine.indexOf(rule[0]) !== -1 && (instructionLine.indexOf(currentNum) < instructionLine.indexOf(rule[0]))) {
                    charPassesRules = false;
                    break;
                }
            }
        }

        if (charPassesRules === false) break;
        if (j === instructionLine.length - 1) {
            sum += instructionLine[Math.floor(instructionLine.length / 2)];
        }
    }
}

console.log(`Total: `, sum);