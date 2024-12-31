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

for (const [rule1, rule2] of rules) {
    console.log(`Rulemap has ${rule1}: `, ruleMap.has(rule1));
    console.log(`Typeof rule 1: `, typeof (rule1));
    //if (ruleMap.get(rule1) === undefined) continue;
    if (ruleMap.has(rule1)) {
        console.log(`rowmap get rule1 ${rule1}: `, ruleMap.get(rule1));
        let currentArr = ruleMap.get(rule1);
        currentArr.push(rule2);
        ruleMap.set(rule1, currentArr);
    } else {
        ruleMap.set(rule1, [rule2]);
    }
}
for (const [key, value] of ruleMap.entries()) {
    console.log(`${key} = ${value}`);
}

//console.log(`Rule map: `, ruleMap);

/**
 * Loop through each instruction line
 * For each number, get rules from the rule map
 * For each rule in the map for that number, check the index of the number in the current instruction
 * No matter what - the number will need to come before the LOWEST index
 * Take note of the lowest index per number on that instruction line, push that into a new map
 * Iterate through that map and rebuild instruction line in order of lowest index least to greatest
 * Take middle num and add it to the sum
 */


for (let i = 0; i < instructions.length; i++) {
    const instructionLine = instructions[i];

    for (let j = 0; j < instructionLine.length; j++) {
        const currentNum = instructionLine[j];

        let charPassesRules = true;

        let ruleArr = ruleMap.get(currentNum);
        let lowestIndex = null;

        if (charPassesRules === false) break;
    }
}

