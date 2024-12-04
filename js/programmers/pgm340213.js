function solution(video_len, pos, op_start, op_end, commands) {
    let answer = '';
    video_len = new Date('2024-12-02 00:00' + video_len);
    // pos = new Date(2024,12,2,0,pos.split(":")[0],pos.split(":")[1]);
    pos = new Date('2024-12-02 00:00' + pos);
    const opi_start = new Date('2024-12-02 00:00' + op_start);
    const opi_end = new Date('2024-12-02 00:00' + op_end);

    let sTime = new Date('2024-12-02 00:00:00');
    let nTime = new Date('2024-12-02 00:00:10')
    
    // console.log(">> " ,opi_end, sTime);
    for (i of commands) {
        // console.log(i);
        if ((pos >= opi_start) && (pos <= opi_end)) {
            pos = new Date(opi_end)
        }    
        if(pos<new Date('2024-12-02 00:00:10')) {    
            pos = new Date(sTime);
            //console.log("pos가 10초이내임 =" , pos);
        }
        
        //console.log(`시작위치 pos = ${pos}\nopi_end=${opi_end}`);
        if (i === "next") {
            video_len.setSeconds(video_len.getSeconds() - 10)
            // console.log("video_len = ", video_len, "\npos = ", pos);
            if ((pos.getTime() > video_len)) {
                // console.log("시간이 10초이하로 남거나 동영상 재생위치를 초과함", pos);
                pos.setSeconds(video_len.getSeconds() + 10);
            } else {
                pos.setSeconds(pos.getSeconds() + 10);
            }
        }
        else if (i === "prev") {
            if (pos.getTime() < nTime) {
                // console.log("prev시간이 00:00이하거나 10초미만남음", pos);
                pos.setSeconds(sTime.getSeconds());
                // console.log(`> pos = ${pos} sTime = ${sTime}`);
                
            } else {
                pos.setSeconds(pos.getSeconds() - 10);
                // console.log("1.pos = ", pos)
            }
        }
        //console.log("opi_end = " + opi_end)
        
        // if ((pos >= opi_start) && (pos <= opi_end)) {
        //     pos = new Date(opi_end)
        //     //console.log(`2. pos = ${pos}\nopi_end=${opi_end}`);
        // }
    }
    let min = (pos.getMinutes() < 10) ?
        ("0" + pos.getMinutes()) : pos.getMinutes();

    let sec =
        (pos.getSeconds() < 10) ?
            ("0" + pos.getSeconds()) : pos.getSeconds();
    return min + ":" + sec;
}
console.log(solution("10:55", "00:05", "00:15", "06:55", ["prev", "next", "next"]))
console.log(solution("07:22","04:05","00:15","04:07",["next"]))
console.log(solution( "30:00", "00:11", "05:00", "06:00", ["prev"]))