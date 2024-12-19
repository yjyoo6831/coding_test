//신입사원 교육

import java.util.*;
class Solution {
    public int solution(int[] ability, int number) {
        int answer = 0;
        int mix = 0;

        Queue<Integer> pq = new PriorityQueue<>();
        // 기존 데이터를 우선순위 큐로 넣고 시작
        for(int a:ability){
            pq.offer(a);
        }
        // 모든 사원의 능력치의 합을 가장 적게 만드려면
        // 하루 가능한 교육 인원 :2명
        // 2명 사원의 합한 값 > 변경됨
        for(int i=0;i<number;i++){
            int a = pq.poll();
            int b = pq.poll();

            mix = a+b;

            pq.offer(mix);
            pq.offer(mix);
        }
        // System.out.println(pq);
//        while(!pq.isEmpty()){
//            answer+=pq.poll();
//            // System.out.println(answer+" "+pq);
//        }
        for(int i: pq) {
            answer +=i;
        }
        // System.out.println(pq);


        return answer;
    }
}