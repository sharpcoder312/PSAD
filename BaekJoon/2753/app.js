const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

// input = input.map(num => +num); // 들어올 값이 1개 이기에 굳이 map을 활용할 필요가 없다.
solution(+input[0]);

function solution(year) {
  if (year % 4 === 0 && 
      year % 100 !== 0 || 
      year % 400 === 0) {
    console.log(1);
  } else {
    console.log(0);
  }
}
// 빠른 return을 사용하여 (if) else의 복잡한 중첩을 줄이고 함수를 종료시킬 수 있다.
// function solution(year) {
//   if (year % 4 === 0 && 
//       year % 100 !== 0 || 
//       year % 400 === 0) {
//     console.log(1);
//     return;
//   } 
//   console.log(0);
// }