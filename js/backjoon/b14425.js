const [n,...input] = require('fs').readFileSync(process.platform === "linux" ? '/dev/stdin' : 'backjoon/input.txt')
        .toString().trim().split("\n");
const [N,M] = n.split(' ').map(Number);
let answer = 0;
// console.log(input)
const chrSet = new Set();
for(let i = 0; i<N;i++){
    chrSet.add(input[i]);
}
// for(let v of chrSet){
//     console.log(v);
// }
for(let i=N;i<input.length;i++){
    if(chrSet.has(input[i])) answer+=1;
}
console.log(answer)

// console.log(`N = ${N} input = ${input}`);