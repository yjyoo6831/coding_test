// 더 맵게
import java.util.*;
class Solution {
    public int solution(int[] scoville, int K) {
        int answer = 0;
        int score = 0;
        // 섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)

        PriorityQueue<Integer> pq = new PriorityQueue<>();
        // 우선순위 큐에 넣기
        for(int i =0;i<scoville.length;i++){
            pq.offer(scoville[i]);
        }
        // System.out.println(">>"+(K-pq.peek())/2);
        while(pq.peek() < K){
            if(pq.size() == 1) return -1;
            int f = pq.poll();
            int s = pq.poll();

            score = f + (s *2) ;

            pq.offer(score);
            answer ++;


            // System.out.println("pq = "+pq + " score = "+ score);
            // System.out.println("pq = "+pq.peek());
        }

        return answer;
    }
}