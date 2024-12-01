
//그룹 단어 체커
const input = require('fs').readFileSync(process.platform === "linux" ? '/dev/stdin' : 'backjoon/input.txt').toString().trim().split("\n");
// var char = input.split(',');
// console.log(`input :${input}`);


function solution(input) {
    let answer = 0;
    const strLen = input[0];
    // console.log(strLen);
    for (let i = 1; i <= strLen; i++) {
        let newArr = [];
        let arr = input[i].trim().split('');
        // console.log(`i = ${i} arr=${arr}`);
        let check = true;

        for (let i = 1; i <= arr.length; i++) {
            if (newArr.indexOf(arr[i-1]) === -1) {
                newArr.push(arr[i-1]);
            } else {
                if (newArr.indexOf(arr[i-1]) != newArr.length -1) {
                    // console.log("check >> false");
                    
                    check = false;
                    break; // 다음 for문으로 넘어감 
                    // continue : 그 다음 라인을 수행함.
                }
            }
        }
        if (check) {
            answer += 1;
        }
        // console.log(answer)
    }
    return answer;
}
console.log(solution(input));