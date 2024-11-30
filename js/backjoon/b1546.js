// 평균
var [n, input] = require('fs').readFileSync('backjoon/input.txt').toString().trim().split('\n');

// console.log("input > " + n,input);
let count = n;
let score = input.split(' ').map((v) => Number(v));
// let score = input.split(' ').map(Number);

let max = Math.max(...score)

// console.log("n >> ", n, "input >> ", score, "max > ", max);

let newScore = score.map((v)=> (v/max) * 100)
// let newScore =0;
// for (let i = 0; i < score.length; i++) {
//     newScore += score[i]/max * 100 ;
// }
// const newSc = newScore.reduce((acc,cur) => console.log(acc+cur));
console.log(newScore.reduce((a,c) => a+c,0) / count );


// console.log(parseFloat(newScore/count));
