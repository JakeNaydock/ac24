const fs = require('fs');
const data = fs.readFileSync('./input5.txt', 'utf-8');

const splitData = data.split('\n\n');
const splitToNumber = (row, delimiter) => {
    row = row.split(delimiter);
    return row.map((str) => str * 1);
}
const rules = splitData[0].split('\n').map((rule) => splitToNumber(rule, '|'));
const instructions = splitData[1].split('\n').map((row) => splitToNumber(row, ','));

const ruleMap = new Map();
/*
ruleMap.set(47, [82, 58, 91, 11, 23]);
console.log(`Rulemap get: `, ruleMap.get(47));
ruleMap.set(ruleMap.get(47).push(55));
console.log(`Rulemap get agaiin: `, ruleMap.get(47));
*/
for (const [rule1, rule2] of rules) {
    console.log(`Rulemap has ${rule1}: `, ruleMap.has(rule1));
    console.log(`Typeof rule 1: `, typeof (rule1));
    //if (ruleMap.get(rule1) === undefined) continue;
    if (ruleMap.has(rule1) || ruleMap.get(rule1) != undefined) {
        console.log(`rowmap get rule1 ${rule1}: `, ruleMap.get(rule1));
        ruleMap.set(ruleMap.get(rule1).push(rule2));
    } else {
        ruleMap.set(rule1, [rule2]);
    }
}
for (const [key, value] of ruleMap.entries()) {
    console.log(`${key} = ${value}`);
}

/*
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
                    instructionLine.splice();
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

*/