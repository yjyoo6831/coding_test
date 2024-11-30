const { exit } = require('process');

//그룹 단어 체커
const input = require('fs').readFileSync(process.platform === "linux" ? '0,"utf-8"' : 'backjoon/input.txt').toString().trim().split("\n");
// var char = input.split(',');
console.log(`input :${input}`);


function solution(input) {
    let answer = 0;
    const strLen = input[0];
    for (let i = 1; i <= strLen; i++) {
        let newArr = []; // 새 배열에 글자를 넣은다음 마지막꺼랑 비교해보기
        let arr = input[i].trim().split('');
        for (let i = 1; i <= arr.length; i++) {
            console.log("arr.length = ", arr.length)
            if (arr.length === 1) {
                console.log("배열 원소 1개" + arr)
                newArr.push(arr[i - 1]); answer += 1; return answer;
            }
            if (i - 1 === arr.length - 1) { // 마지막값
                console.log(`arr[i] : ${arr[i - 1]} arr.length : ${arr[arr.length - 1]}`)
                if ((arr[i - 1] != arr[i - 2])) {
                    console.log("마지막 값 && 이전값 동일 X " + arr[i - 1]);

                    // answer = newArr.length>0 ? answer+1:0;
                    // console.log(`answer == ` + answer, newArr.length);
                    if (newArr.indexOf(arr[i - 1]) === -1) {
                        newArr.push(arr[i - 1]);
                        console.log("마지막 값 && 이전값 동일 X, newarr 존재 X >> ", newArr);
                        answer += 1;

                    } else {
                        console.log('기존에 중복된 값 존재함', arr[i - 1], newArr);
                    }
                }
                else if ((arr[i - 1] === arr[i - 2])) {
                    if (newArr.indexOf(arr[i - 1]) === -1) {
                        // newArr.push(arr[i - 1]);
                        console.log("마지막 값 && 이전값 동일 O, newarr 존재 X >> ", newArr);
                        // answer += 1;

                    } else {
                        console.log('기존에 중복된 값 존재함', arr[i - 1], newArr);
                    }
                    console.log("마지막 값이면서 이전 값이랑 같을 경우");
                    // answer+=1;
                }
                console.log(`마지막값이다. (arr[i - 1] == arr[i - 2]) ? ${(arr[i - 1] == arr[i - 2])}, 
                newArr 에 존재 ? ${newArr.lastIndexOf(arr[i - 1])}`) //이전값 동일 x     
                // console.log("======== "+ arr[i-1], newArr.indexOf(arr[i - 1]))
                console.log("answer = " + answer);

                // 이전값 동일 x, newarr 에 없으면 +1 / newarr 에 있으면 0 / 
                // 이전값 동일 0 -> 1
            }
            console.log(`현재값 , 다음값 >> ` + arr[i - 1], arr[i]);

            if (arr[i - 1] != arr[i]) { // 이전 값과 다를경우
                if (newArr.indexOf(arr[i - 1]) >= 1) { //새배열에 있을경우
                    console.log('이전값과 다르지만 새 배열에 있을경우');
                }
                else {// 이전값과 다르지만 새 배열에 없을경우
                    console.log('이전값과 다르지만 새 배열에 없을경우');
                    newArr.push(arr[i - 1]);
                } //새 배열에 추가
            }
            else if (arr[i - 1] === arr[i]) { //현재값,다음 값과 같을 경우
                if (newArr.indexOf(arr[i - 1]) >= 0) { //새배열에 있을경우
                    console.log("이전값 동일, 새 배열에 존재");
                } else {
                    console.log("이전값 동일, 새 배열 존재 X")
                    newArr.push(arr[i - 1]);
                }
            }

            console.log(">>", arr[i - 1], newArr)
            // console.log("arr >",arr,"newArr > ", newArr);
        }
        console.log("단어 끝 ============== ")
    }
    return answer;
}
console.log(solution(input));