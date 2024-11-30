// 주사위 세 개
var input = require('fs').readFileSync('backjoon/input.txt').toString().split(' ').map(Number);

// console.log(input);

var answer = '';
let a = input[0];
let b = input[1];
let c = input[2];

// console.log(a,b,c,arr);

if ((a === b) && (a === c) && (b === c)) {
    // console.log("a = b = c");        
    answer = 10000 + (a * 1000);
}
else if ((a === b) || (a === c)) {
    // console.log("a=b or a=c");
    answer = 1000 + (a * 100);
}
else if ((b === c)) {
    answer = 1000 + (b * 100);
}
else  {
    // console.log('a,b,c 전부 다름');
    answer = Math.max(...input) * 100;
}

console.log(answer);
