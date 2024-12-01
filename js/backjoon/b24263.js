const input = require('fs').readFileSync(process.platform === "linux" ? '/dev/stdin' : 'backjoon/input.txt').toString().trim().split();

console.log(input);
console.log(1);