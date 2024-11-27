// 문자열 뒤집기 2
function solution(my_string) {
    var answer = '';
    // console.log(my_string[2])
    // for(i = my_string.length -1 ;i>=0;i--){
    //     answer=answer + my_string[i];
    // }
    answer = [...my_string].reverse().join("");
    return answer;
}
console.log(solution('jaron'));