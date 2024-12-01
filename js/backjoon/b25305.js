// 커트라인
// 5 2
// 100 76 85 93 98
const [n,input] = require('fs').readFileSync(process.platform === "linux" ? '/dev/stdin' : 'backjoon/input.txt')
.toString().trim().split("\n");

// const N = n.split(' ')[0];
// const k = n.split(' ')[1];
const[N,k] = n.split(' ').map(Number);
const arr = input.split(' ').map(v=>Number(v));
// console.log("n = ", n,input.split(' '));

// console.log(`N : ${N} k : ${k} input = ${arr}`);

console.log(arr.sort((a,b)=>b-a)[k-1]);

