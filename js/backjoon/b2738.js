var [n,...input] = require('fs').readFileSync('backjoon/input.txt').toString().split('\n');
console.log(input);
const [w,h] = n.split(' ').map(Number);
console.log(w,",",h);
const sum='';
for(let i=0;i<h;i+=2){
    for(let j=0;j<w;j++){
        console.log(i,j,w,h);
        console.log(input[i][j]);
        
    }
}
