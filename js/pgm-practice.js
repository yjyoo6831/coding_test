function solution(v) {
    var answer = [];
    var x = [];
    var y = [];
    for(i=0;i<v.length;i++){
        x.push(v[i][0]);
        y.push(v[i][1])
    }
    // console.log("x > ", x);
    // console.log("y > ", y);
    
    x.forEach(e => {
        // console.log(e,x,x.indexOf(e),x.lastIndexOf(e))  
        if(x.indexOf(e) === x.lastIndexOf(e)) answer[0]=e;  
        // console.log("x "+answer)
    });
    y.forEach(e => { 
        if(y.indexOf(e) === y.lastIndexOf(e)) answer[1]=e;  
        // console.log("y " + answer)
    });

    return answer;
}
console.log(solution([[1,4],[3,4],[3,10]]))