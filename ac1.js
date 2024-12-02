const fs = require('fs');
const data = fs.readFileSync('./input1.txt', 'utf-8');

const splitData = data.split('\r\n');

let arr1 = [];
let arr2 = [];

splitData.forEach((str) => {
    let rowArr = str.split('   ');
    arr1.push(rowArr[0]);
    arr2.push(rowArr[1]);
});

arr1.sort((a, b) => a - b);
arr2.sort((a, b) => a - b);

let totalDistance = 0;
for (let i = 0; i < arr1.length; i++) {
    let distance = Math.abs(arr1[i] - arr2[i]);
    totalDistance += distance;
}

console.log('Total distance: ', totalDistance);

let firstNumber = 20144;
let firstNumSum = arr2.reduce(getSum, 0);
console.log('First num sum', firstNumSum);

function getSum(total, num) {
    num = num * 1;

    if (num === firstNumber) {
        console.log('First number', firstNumber);
        console.log('num ', num);
        total++;
        console.log('Total accumulation: ', total);
    }
    return total;
}