const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => +item);

solution(input[0], input[1]);

function solution(A, B) {
  const stringB = String(B);
  // '385' -> ['3', '8', '5']
  const first = +stringB[2];
  const second = +stringB[1];
  const third = +stringB[0];
  console.log(A * first);
  console.log(A * second);
  console.log(A * third);
  console.log(A * B);
}