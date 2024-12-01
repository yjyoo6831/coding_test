// 세로 읽기
const input = require('fs').readFileSync(process.platform === "linux" ? '/dev/stdin' : 'backjoon/input.txt').toString().trim().split("\n");
// console.log(`input :${input} ${input.length}`);

function solution(v){
    let answer = '';
    let max = Math.max(...input.map(v=>v.trim().length));
    for(let i = 0; i <max;i++){ // 5
        for(let j = 0;j<input.length;j++){ // 5
            // console.log(`i = ${i} j = ${j} ${input[j][i]}`);
            if(input[j][i]) answer+=input[j][i];
        }
    }

    return answer;
}
console.log(solution(input));
