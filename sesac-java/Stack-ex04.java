// 컨트롤 z
import java.util.*;
class Solution {
    public int solution(String s) {
        int answer = 0;
        // System.out.print(s);

        String[] cmd = s.split(" ");

        Stack<Integer> stk = new Stack<>();
        for(int i =0 ; i< cmd.length ;i++){

            if(cmd[i].equals("Z") ){
                stk.pop();
            }
            else{
                stk.push(Integer.parseInt(cmd[i]));
            }
            // System.out.println(cmd[i]+stk);

        }
        while(!stk.isEmpty())
            answer+=stk.pop();

        return answer;
    }
}