// 후위표기법
import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Stack<Integer> stk = new Stack<>();
        // 입력
        int n = sc.nextInt();
        sc.nextLine();
        String[] cmd = sc.nextLine().split(" ");

        for(int i=0; i< n ;i ++){
            if('0' <= cmd[i].charAt(0) && cmd[i].charAt(0)<='9'){
                stk.push(Integer.parseInt(cmd[i]));
            }
            else{
                // System.out.println("숫자가 아님")   ;
                int b = stk.pop(); // 먼저 꺼낸 수 ( 마지막 수)
                int a = stk.pop(); // 두번째 꺼낸 수 (마지막에서 두번째)
                int c = 0;

                switch(cmd[i]){
                    case "+": c = a + b; break;
                    case "-": c = a - b; break;
                    case "*": c = a * b; break;
                    case "/": c = a / b; break;
                }
                stk.push(c);
            }
        }

        System.out.println(stk.pop());
    }
}