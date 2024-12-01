// 대칭 차집합
const input = require('fs').readFileSync(process.platform === "linux" ? '/dev/stdin' : 'backjoon/input.txt')
.toString().trim().split("\n");
const [N, M] = input.shift().split(' ');
// console.log("==",input[0].split(' '),"==\n",input[1].split(' '))
const A = new Set(input[0].split(' ').map(Number));
const B = new Set(input[1].split(' ').map(Number));
let AMinusB = '';
let BMinusA = '';
// console.log("A=" + A.size," B=" + B.size);

var set = new Set();
A.forEach((k)=> {
    // console.log(`A = ${k}.`,B.has(k));
    if(!B.has(k)) set.add(k); 
})
// set.forEach(k => console.log("set == ",k));

AMinusB = set.size;
var set = new Set();
B.forEach((k)=> {
    // console.log("B = ",k,A.has(k));
    if(!A.has(k)) set.add(k); 
})
// const AMinusB = B.filter(v => !A.has(v))
BMinusA = set.size;
// set.forEach(k => console.log("set == ",k));
console.log(AMinusB+BMinusA);

// console.log(`N : ${N} M : ${M} input = ${input}`);