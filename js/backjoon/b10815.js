const [N, input, M, check] = require('fs').readFileSync(process.platform === "linux" ? '/dev/stdin' : 'backjoon/input.txt')
.toString().trim().split("\n");

// console.log(N,input,M,check);
let answer = '';
const iSet = new Set(input.split(' ').map(Number));
// iSet.forEach(v=>console.log(v))
check.split(' ').map(Number).filter((v)=>{
    answer += iSet.has(v) ? 
    '1 ': '0 '
})
// let result = check.split(' ').map(Number).map(v=>
//     iSet.has(v)? 1 :0
// )
console.log(answer,"\n "+ result);
