function solution(k, m, score) {
    var answer = 0;
    score=score.sort((a,b)=>b-a)
    console.log("box >> " + score + "... " + score.length/m)
    
    for(i=0;i<score.length;i+=m){
        // var nbox = score.slice(i,i*m); //0,3 3,6
        // answer += nbox.sort()[0] * m  ;
        console.log(score[i+m-1])
        answer += score[i+m-1]*m;
    }
    return answer;
}
// k : 최고점수 m : 상자에 들어가는 개수 score: 점수 상자안의 최저점 * m 
console.log(solution(4,2,[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]))