const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => +item);

solution(input[0], input[1]);

function solution(A, B) {
  const stringB = String(B);
  console.log(B)
  // '385' -> ['3', '8', '5']로 볼수가 있음. => 문자열은 iterable하기 때문이다.
  const first = +stringB[2];
  const second = +stringB[1];
  const third = +stringB[0];
  console.log(A * first);
  console.log(A * second);
  console.log(A * third);
  console.log(A * B);
}