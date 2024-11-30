// A+B-5

var input = require('fs').readFileSync('backjoon/input.txt').toString().split('\n');

let i = 0 ; 
while(input[i] != '0 0'){
    let a = parseInt(input[i].split(' ')[0]);
    let b = parseInt(input[i].split(' ')[1]);
    i+=1;
    console.log(a+b);
}

// input.forEach(v =>{
//     let a = parseInt(v.split(' ')[0]);
//     let b = parseInt(v.split(' ')[1]);
//     let result = a+b;
//     if((a != 0) && (b != 0)){
//         console.log(result);
//     }
// })