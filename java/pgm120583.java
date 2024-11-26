import java.util.ArrayList;
import java.util.stream.IntStream;

class pgm120583 {
    public static int solution(int[] array, int n) {
        int answer = 0;
//        for(int i=0; i < array.length;i++){
//            if(array[i]==n){
//                answer++;
//            }
//        }
        for(int i:array){
//            System.out.println(">> " +i);
            if(i == n) answer++;
        }
        return answer;
    }
    public static void main(String[] args){
        int[] arr = new int[] {0,2,3,4};
        int r = solution(arr,1);
        System.out.println(r);
    }
}


