const fs = require('fs');
const data = fs.readFileSync('./input5.txt', 'utf-8');

const splitData = data.split('\n\n');
const splitToNumber = (row, delimiter) => {
    row = row.split(delimiter);
    return row.map((str) => str * 1);
}
const rules = splitData[0].split('\n').map((rule) => splitToNumber(rule, '|'));
const instructions = splitData[1].split('\n').map((row) => splitToNumber(row, ','));


for (let i = 0; i < instructions.length; i++) {
    const instructionLine = instructions[i];

    for (let j = 0; j < instructionLine.length; j++) {
        const currentNum = instructionLine[j];
        const matchingRules = rules.filter(subArray => subArray.includes(currentNum));
        let charPassesRules = true;

        for (const [rule1, rule2] of matchingRules) {
            if (currentNum === rule1) {
                if (instructionLine.indexOf(rule2) !== -1 && (instructionLine.indexOf(currentNum) > instructionLine.indexOf(rule2))) {
                    charPassesRules = false;
                    break;
                }
            } else {
                if (instructionLine.indexOf(rule1) !== -1 && (instructionLine.indexOf(currentNum) < instructionLine.indexOf(rule1))) {
                    charPassesRules = false;
                    break;
                }
            }
        }

        if (charPassesRules === false) break;
    }
}

