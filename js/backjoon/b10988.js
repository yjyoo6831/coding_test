var input = require('fs').readFileSync(process.platform === "linux"? '0,"utf-8"':'backjoon/input.txt').toString().trim().split('');

let midIndex = Math.floor(parseInt(input.length)/2); 
if(midIndex===0) midIndex=1;
// console.log(input,midIndex);
// for(let i=0;i<midIndex;i++){
//     let leftIndex = input[midIndex-1-i];
//     let rightIndex = input[midIndex+1+i];
//     if(leftIndex === rightIndex) console.log("1");
//     else(console.log("0"))
//     console.log("left ",leftIndex);
//     console.log("right ",rightIndex);
// }
let result = 0;
// let reverseStr = [...input].reverse().join("");
for(let i =0 ; i<midIndex;i++){
    let leftIndex = input[i];
    let rightIndex = input[input.length-1-i];
    // console.log("left ",leftIndex);
    // console.log("right ",rightIndex);
    if(leftIndex === rightIndex) result=1;
    else{
        // console.log(0);
        result=0; 
        break;
    }
}
console.log(result)