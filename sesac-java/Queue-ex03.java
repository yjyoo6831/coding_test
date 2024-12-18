// 기능 개발
import java.util.*;

class Solution {
    public int[] solution(int[] progresses, int[] speeds) {
        // int[] answer = {};
        List<Integer> answer = new ArrayList<>();
        Queue<Integer> q = new LinkedList<>();
        int sum = 0;

        for(int i = 0 ; i< progresses.length ; i++){
            int day = 0;
            while(progresses[i]<100){
                progresses[i] += speeds[i];
                day++;
            }
            q.offer(day);
            // System.out.println(day+" "+ i+" "+progresses[i]+" "+ q);
        }

        // for(int i = 0 ; i< q.size(); i++){
        //         int c = q.poll();
        //         while(q.peek() < c){
        //             sum +=1;
        //             System.out.println(q.peek()+" "+c+" "+sum);
        //         }
        //     }
        // answer.add(sum);


        return answer;
    }
}