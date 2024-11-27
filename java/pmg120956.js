//옹알이
function solution(babbling) {
    var answer = 0;
    let array = ["aya", "ye", "woo", "ma"];
    babbling.forEach(e => {
        console.log(e.split(/aya|ye|woo|ma/g))
        if(e.split(/aya|ye|woo|ma/g).join('')===''){
            answer++;
        }
        
    })
    return answer;
}
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));