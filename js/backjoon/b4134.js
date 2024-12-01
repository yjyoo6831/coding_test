const [N, ...input] = require('fs').readFileSync(process.platform === "linux" ? '/dev/stdin' : 'backjoon/input.txt')
    .toString().trim().split("\n").map(Number);

// console.log("n=", N, "input=", input);
let answer = [];
let flag = true;
function isPrime(num) {
    if (num <= 1) return false;
    for (let j = 2; j < Math.sqrt(num); j++) {
        if (num % j === 0) return false;
    }
    return true;
}
for (let i = 0; i < input.length; i++) {
    // console.log("input[i]=", input[i]);
    while (!isPrime(input[i])) {
        input[i]++;
    }
    answer.push(input[i]);
}
console.log(answer.join('\n'))