const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(num) {
  for (let i = 1; i < 10; i++) {
    value = num * i
    console.log(`${num} * ${i} = ${value}`)
    // console.log(num + '*' + i + '=' + num * i)
  }
}