// 5
// -5
// -2
// -3
// 4
// 1
const [n,...input] = require('fs').readFileSync(process.platform === "linux" ? '/dev/stdin' : 'backjoon/input.txt')
.toString().trim().split("\n").map(Number);
// console.log(input)
let arr = input.sort((a,b)=>{a-b;});
console.log(input.sort((a,b)=>a-b).join("\n"));
