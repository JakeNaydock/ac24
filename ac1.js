const fs = require('fs');
const data = fs.readFileSync('./input1.txt', 'utf-8');

const splitData = data.split('\n');
let arr1 = [];
let arr2 = [];

splitData.forEach((str) => {
    const rowArr = str.split('   ');
    arr1.push(rowArr[0] * 1);
    arr2.push(rowArr[1] * 1);
});

arr1.sort((a, b) => a - b);
arr2.sort((a, b) => a - b);

let totalDistance = 0;
let similarityScore = 0;
for (let i = 0; i < arr1.length; i++) {
    const distance = Math.abs(arr1[i] - arr2[i]);
    totalDistance += distance;

    const currentNum = arr1[i];
    const getSum = (total, num) => { if (num === currentNum) total++; return total; };
    const rowTotal = arr2.reduce(getSum, 0) * currentNum;
    similarityScore += rowTotal;
}

console.log('Part 1 Answer: ', totalDistance);
console.log('Part 2 Answer: ', similarityScore);