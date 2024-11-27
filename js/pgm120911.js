// 문자열 정렬
function solution(my_string) {
    // var answer = my_string.toLowerCase().split('').sort().join('');
    var answer = [...my_string.toLowerCase()].sort().join('');
    return answer;
}
console.log(solution("heLLo"));