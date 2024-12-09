const fs = require('fs');
const data = fs.readFileSync('./input3.txt', 'utf-8');

const multiply = (num1, num2) => num1 * num2;
const between = (num, min, max) => num > min && num < max;

function findAllMulStrings(str) {
    const regex = /mul\((\d{1,3}),\s?(\d{1,3})\)/g; // Notice the 'g' flag for global matching
    let matches = [];
    let match;
    while ((match = regex.exec(str)) != null) {
        matches.push({
            arrNums: [parseInt(match[1]), parseInt(match[2])],
            index: match.index
        });
    }
    return matches;
}

let arrNumbersToMultiply = findAllMulStrings(data);
let sum = 0;
arrNumbersToMultiply.forEach((el) => sum += multiply(el.arrNums[0], el.arrNums[1]));
console.log(`Part 1 total: `, sum);

//Starting part 2 below:
const doMatchRe = /(do\(\))/g;
const dontMatchRe = /(don\'t\(\))/g;

let doMatches = Array.from(data.matchAll((doMatchRe)), (m) => m.index);
let dontMatches = Array.from(data.matchAll(dontMatchRe), (m) => m.index);

const orderedArray = mergeSortedArrays(doMatches, dontMatches);

let zoneMap = [];
let currentType;

for (let i = 0; i < orderedArray.length; i++) {
    const currentObj = orderedArray[i];
    const objType = currentObj.type;
    if (currentType === objType) continue;
    if (currentType === undefined) {
        currentType = objType;
        zoneMap.push({
            type: currentObj.type,
            start: currentObj.index,
        });
        continue;
    }

    zoneMap[zoneMap.length - 1].end = currentObj.index;
    zoneMap.push({
        type: currentObj.type,
        start: currentObj.index,
    });
    currentType = objType;
}


let partTwoSum = 0;
arrNumbersToMultiply.forEach((el) => {
    let type;
    for (let i = 0; i < zoneMap.length; i++) {
        if (between(el.index, zoneMap[i].start, zoneMap[i].end) || !zoneMap[i].end) {
            type = zoneMap[i].type;
            break;
        }
    }
    if (type) {
        partTwoSum += multiply(el.arrNums[0], el.arrNums[1]);
    }
});

console.log(`Part 2 answer: `, partTwoSum);

function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push({
                type: 1,
                index: arr1[i]
            });
            i++;
        } else {
            mergedArray.push({
                type: 0,
                index: arr2[j]
            });
            j++;
        }
    }

    // Add any remaining elements from arr1
    while (i < arr1.length) {
        mergedArray.push({
            type: 1,
            index: arr1[i]
        });
        i++;
    }
    // Add any remaining elements from arr2
    while (j < arr2.length) {
        mergedArray.push({
            type: 0,
            index: arr2[j]
        });
        j++;
    }
    return mergedArray;
}