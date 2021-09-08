// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const line = fs.readFileSync(filePath, "utf8");
// let input = line.trim().split("\n");
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    input = input.map((item) => +item);
    solution(input[0], input[1]);
    process.exit();
});

function solution(A, B) {
  let field = 0
  if (A > 0 && B > 0) {
    field = 1
  } 
  if (A < 0 && B > 0) {
    field = 2    
  } 
  if (A < 0 && B < 0) {
    field = 3    
  } 
  if (A > 0 && B < 0) {
    field = 4    
  }

  console.log(field)
}

// switch문으로도 변환 가능