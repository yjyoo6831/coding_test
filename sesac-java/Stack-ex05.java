// 올바른 괄호
import java.util.*;
class Solution {
    boolean solution(String s) {
        boolean answer = true;

        Stack<Character> stk = new Stack<>();

        // String[] cmd = s.split("");

        // for(int i=0; i< cmd.length; i++){
        for(int i=0;i< s.length() ;i++){
            // System.out.println(">> " + cmd[i]);
            if(s.charAt(i) == '('){
                stk.push(s.charAt(i));
            }
            else {
                if(!stk.isEmpty()){
                    stk.pop();
                }
                else{ // 뺄게 없을 경우
                    return false;
                }
            }
        }
        if(!stk.isEmpty()) answer=false;
        return answer;
    }
}