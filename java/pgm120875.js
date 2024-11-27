// 평행
function solution(dots) {
    var answer = 0;
    
    var a = dots[0];
    var b = dots[1];
    var c = dots[2];
    var d = dots[3];

    // 경우의수 
    // 1 -2,3-4 / 1-3,2-4 / 1-4,2-3
    var lean1= (b[1]-a[1])/(b[0]-a[0]); 
    var lean2= (d[1]-c[1])/(d[0]-c[0]); 
    answer = lean1 === lean2 ? 1 :0;
    if(answer === 0){
        lean1= (c[1]-a[1])/(c[0]-a[0]); //2
        lean2= (d[1]-b[1])/(d[0]-b[0]); //2
        answer = lean1 === lean2 ? 1 :0;
        // console.log("1 " , lean1,lean2,answer)
        
        if(answer === 0){
            lean1= (c[1]-a[1])/(c[0]-a[0]); 
            lean2= (d[1]-b[1])/(d[0]-b[0]); 
            answer = lean1 === lean2 ? 1 :0;       
            // console.log("2 ",lean1,lean2,answer)
        }    
    }

    // console.log("..",lean1,lean2,answer)
    return answer;
}
console.log(solution([[3, 5], [4, 1], [3, 5], [4, 1]]))