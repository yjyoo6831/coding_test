const [...input] = require('fs').readFileSync(process.platform === "linux" ? '/dev/stdin' : 'backjoon/input.txt').toString().trim().split("\n");

let arr = input.map(v=>v.split(' '));
// console.log(arr[0].map(Number));

let max=0;
let [w,h]=[0,0];
for(i=0;i<arr.length;i++){
    let maxIndex = '';
    let findNum = Number(Math.max(...arr[i].map(Number)));
    if(max < findNum){
        max = findNum; 
        w = parseInt(i+1)
        h = parseInt(arr[i].indexOf(findNum.toString())+1);
        // console.log(">>",h);
        
    }
}
console.log(max+'\n'+ w,h);
