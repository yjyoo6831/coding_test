const [n,...input] = require('fs').readFileSync(process.platform === "linux" ? '/dev/stdin' : 'backjoon/input.txt').toString().trim().split("\n");
// console.log(n);
const [w,h] = n.split(' ').map(Number);
// console.log(input[0].split(' '));
let sum=0;
let total = '';
for(let i=0;i<w;i++){
    for(let j=0;j<h;j++){
        // console.log(i,j);
        sum=Number(input[i].split(' ')[j])+Number(input[i+w].split(' ')[j])
        total+=sum+' ';
    }
    console.log(total);
    total='';
}
