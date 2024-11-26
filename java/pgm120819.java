import java.util.ArrayList;
import java.util.Arrays;
import java.util.stream.IntStream;

class pgm120819 {
    public static int[] solution(int n) {
        int[] answer = new int[2]; // 크기 고정된 빈 배열 선언
        int a = n / 5500; // 살 수 있는 아메리카노의 잔수
        int b = n % 5500; // 남은 돈

        answer[0]=a;
        answer[1]=b; // 배열의 인덱스에 맞게 넣어줌
//        return answer;
        return new int[] {a,b}; // 새 배열 생성하고 값 바로 넣어주어 리턴
    }
    public static void main(String[] args){
        int[] arr = new int[] {0,2,3,4};
        System.out.println(solution(5500));
    }
}


