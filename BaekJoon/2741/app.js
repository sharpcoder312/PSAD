const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(N) {
  // for (let i = N; i > 0; --i) {
  //   console.log(N + 1 - i)
  // }
  for (let i = 1; i <= N; i++) {
    console.log(i)
  }
}