function solution(t, p) {
    var answer = 0;
    
    //console.log([...t].splice(0,p.length).join('')  )
    for(i=0;i<(t.length-p.length)+1;i++){
        var a = [...t].splice(i,p.length).join('');
        // console.log(a,p,parseInt(a)<=parseInt(p));
        if(parseInt(a) <= parseInt(p) ) answer++;
    }
    return answer;
}
console.log(solution("3141592",	"271"))