function solution(arr)
{
    var answer = [];
    for(let i =0;i<arr.length;i++){
        // console.log(arr[i],answer.indexOf(arr[i]));
        if(answer[answer.length-1] != arr[i]) {
            answer.push(arr[i])
        }
    }
    
    return answer;
}
console.log(solution([1,1,3,3,0,1,1]));