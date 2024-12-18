package sesac-java;
import java.util.*;
class Solution {
    public int solution(int param0) {
        int answer = 0;
        Stack<Integer> stk = new Stack<>();

        // 넣기
        stk.push(211);
        stk.push(23);
        stk.push(432);
        System.out.println("스택 길이 : "+ stk.size());
        System.out.println("스택에 넣은 데이터 : "+ stk);

        System.out.println("마지막에 넣은 데이터: "+stk.peek());

        System.out.println("마지막 데이터 꺼냈음: " + stk.pop());
        System.out.println("현재 스택: " + stk);

        stk.push(34);
        stk.push(133);

        System.out.println("211 : " + stk.search(211));
        System.out.println("133 : " + stk.search(133));

        while(!stk.isEmpty()){
            System.out.println("하나씩 꺼낸다" + stk.pop());
        }
        try{
            stk.pop();
        } catch (java.lang.Exception e) {
            System.out.println("비워져 있을때 pop하면 나오는 에러: "+e.getMessage());
        }

        return answer;
    }

}
public static void main(String[] args){
    System.out.println(solution(1));
}