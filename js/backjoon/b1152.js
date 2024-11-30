// 단어의 개수
var input = require('fs').readFileSync('backjoon/input.txt').toString().trim().split(' ');

console.log(input[0]===''? 0: input.length);
