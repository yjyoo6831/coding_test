
var input = require('fs').readFileSync('backjoon/input.txt').toString().trim().split('\n').map(Number);

console.log("input > " ,input);
// console.log("n> ",n,"input > " ,input.split(' '));

console.log(Math.max(...input));
console.log(input.indexOf(Math.max(...input))+1);