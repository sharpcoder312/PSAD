const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];
let i = 0;
while (i < input.length-1) {
  const tempValue = input[i].split(' ').map((item) => +item);
  testCaseArray.push(tempValue[0]+tempValue[1]);
  console.log(testCaseArray[i]);
  i++;
}

