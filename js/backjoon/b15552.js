const [n,...input] = require('fs').readFileSync(process.platform === "linux" ? '/dev/stdin' : 'backjoon/input.txt')
        .toString().trim().split("\n");

let answer = '';

input.map(v=> {
        answer+=(Number(v.split(' ')[0])+Number(v.split(' ')[1]))+"\n" 
        })
console.log(answer)
