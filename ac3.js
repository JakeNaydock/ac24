const fs = require('fs');
const { type } = require('os');
const { domainToASCII } = require('url');
const data = fs.readFileSync('./input3min.txt', 'utf-8');

const multiply = (num1, num2) => num1 * num2;
const between = (num, min, max) => num > min && num < max;


function findAllMulStrings(str) {
    const regex = /mul\((\d{1,3}),\s?(\d{1,3})\)/g; // Notice the 'g' flag for global matching
    let matches = [];
    let match;
    while ((match = regex.exec(str)) != null) {
        matches.push([parseInt(match[1]), parseInt(match[2])]); // Convert numbers to integers
    }
    return matches;
}

let arrNumbersToMultiply = findAllMulStrings(data);

let sum = 0;
arrNumbersToMultiply.forEach((el) => sum += multiply(el[0], el[1]));
console.log(`Part 1 total: `, sum);

//Starting part 2 below:
const doMatchRe = /(do\(\))/g;
const dontMatchRe = /(don\'t\(\))/g;
let doMatches = Array.from(data.matchAll((doMatchRe)), (m) => m.index);
let dontMatches = Array.from(data.matchAll(dontMatchRe), (m) => m.index);
console.log(`Do matches: `, doMatches);
console.log(`Don't matches `, dontMatches);

console.log(`Between test: `, between(6, 5, 10));
console.log(`Merge sorted arrays: `, mergeSortedArrays(doMatches, dontMatches));


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
