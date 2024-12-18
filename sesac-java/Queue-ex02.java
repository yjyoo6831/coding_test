// 요세푸스 순열
import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        Queue<Integer> q = new LinkedList<>();

        for(int i=0;i<a;i++){
            q.offer(i+1);
        }
        while(!q.isEmpty() ){
            for(int i=0; i<b; i++){
                int c = q.poll();
                if(i < (b-1)){
                    q.offer(c);
                }else{
                    System.out.print(c+" ");
                }
                // System.out.println(q);
            }
        }

    }
}