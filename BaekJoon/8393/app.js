const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');



// const sum = [];
// function solution(n) {
//   for (let i = 0; i < n; i++) {
//     sum.push(n - i);
//   }
//   sum.reduce((acc, cur) => {
//     console.log(acc + cur)
//     return acc + cur;
//   }, 0)
// }
solution(+input[0]);

function solution(n) {
  let sum = 0;
  for (let i = 1; i <= n; ++i) {
    sum = sum + i
  }
  console.log(sum)
}


