
// 2차원 배열-색종이 
const [n,...input] = require('fs').readFileSync(process.platform === "linux" ? '/dev/stdin' : 'backjoon/input.txt').toString().trim().split("\n");

let columns=Number(100);
let rows=Number(100)

let overSize=Array.from(new Array(columns),()=>new Array(rows).fill(0));
// const arr = Array.from(Array(100), () => Array(100).fill(0));

for(i=0;i<n;i++){
    let [w,h] = input[i].split(' ').map(Number);
    for(k=w;k<w+10;k++){
        for(j=h;j<h+10;j++){
            if((w === 0 || h === 0)) {
                overSize[j][k] = parseInt(overSize[j][k]) + 1;
            }
            else{
                overSize[j-1][k-1] = parseInt(overSize[j-1][k-1]) + 1;
            } 
        }
        }
    }
// for (let index = 0; index < 20; index++) {
//     const element = overSize[index];
//   console.log(parseInt(index) + 1, ">>", element)
// }
let ncounts=parseInt(0);
let counts=parseInt(0);
overSize.filter((v,i)=>{    
    v.forEach(k=>{
        if(k==1) { counts+=1;}
        else if(k>=2) { ncounts+=1;}
    })
})
// console.log(counts,ncounts)

const total = counts+ncounts;
console.log(total);