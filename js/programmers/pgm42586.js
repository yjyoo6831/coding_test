function solution(progresses, speeds) {
    var answer = [];
    for (let i = 0; i < progresses.length; i++) {
        // console.log(percent)
        let percent = progresses[i];
        let day = '';
        while (percent < 100) {
            percent += speeds[i];
            day++;
            // console.log(`i=${i} percent=${percent} day=${day}`)
        }
        answer.push(day);
    }
    let count = 1;
    let answerDay = [];
    let dday = answer[0];
    for (let i = 1; i < answer.length; i++) {
        if (answer[i] <= dday) {
            count++;
            console.log("answer = ", answer[i], "count = ", count);
        } else {
            dday = answer[i];
            answerDay.push(count);
            count = 1;
        }
    }
    answerDay.push(count);
    return answerDay;
}
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));