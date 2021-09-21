const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let num = +input[0];
let sum;
let i = 0;

while (true) {
    i++;

    sum = Math.floor(num / 10) + num % 10;
    num = (num % 10) * 10 + sum % 10; 

    if (+input[0] === num) {
      break;
    }
}

console.log(i);

// const testCaseArray = [];
// let i = 0;
// while (i < input.length) {
//   const tempValue = input[i].split(' ').map((item) => +item);
//   testCaseArray.push(tempValue[0]+tempValue[1]);
//   console.log(testCaseArray[i]);
//   i++;
// }

