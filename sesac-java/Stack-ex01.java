import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.nextLine();

        // n 번 반복
        Stack<Integer> stk = new Stack<>();
        for(int i =0 ; i < n ; i++){
            String[] cmd = sc.nextLine().split(" ");

            // System.out.println(cmd);

            // for(int i = 0 ; cmd.length ; i ++){
            String req = cmd[0];
            String res = "";
            if(req.equals("i")) {
                // System.out.println("스택에 들어감");
                stk.push(Integer.parseInt(cmd[1]));
            }
            else if(req.equals("o")){
                // System.out.println(">>",stk);
                if(!stk.isEmpty()){
                    System.out.println(stk.pop());
                }
                else{ System.out.println("empty");}
            }
            else if(req.equals("c")){
                System.out.println(stk.size());
            }

            // }
            // System.out.println("현재스택" + stk);
        }

        //sc.close();
    }
}