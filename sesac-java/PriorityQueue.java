import java.util.*;
// 큐 : FIFO 처음에 들어온게 처음에 나간다
// 우선순위 큐는 들어온 순서와는 상관없이, 우선순위가 가장 크거나 작은 자료가 가장 먼저 나간다.
// 우선순위 큐 - 힙으로 구현 가능
        class Solution {
    public int solution(int param0) {
        int answer = 0;
        // PriorityQueue 생성 (기본: 오름차순)
        PriorityQueue<Integer> pq = new PriorityQueue<>();

        // 데이터 추가
        pq.offer(30);
        pq.offer(10);
        pq.offer(20);

        // 출력
        System.out.println("큐 상태: " + pq); // [10, 30, 20] (내부 정렬 상태는 다를 수 있음)

        // 데이터 개수
        System.out.println("데이터 개수: " + pq.size()); // 3

        // 최상위 우선순위 확인
        System.out.println("peek(): " + pq.peek()); // 10

        // 데이터 제거
        System.out.println("poll(): " + pq.poll()); // 10
        System.out.println("큐 상태: " + pq); // [20, 30]

        // 모든 요소 제거
        while (!pq.isEmpty()) {
            System.out.println("poll(): " + pq.poll());
        }
        // 내림차순 PriorityQueue
        PriorityQueue<Integer> rpq = new PriorityQueue<>(Collections.reverseOrder());

        // 데이터 추가
        rpq.offer(30);
        rpq.offer(10);
        rpq.offer(20);

        // 데이터 처리
        while (!rpq.isEmpty()) {
            System.out.println("rpoll(): " + rpq.poll());
        }
        return answer;
    }
}