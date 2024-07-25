package backjoon_step1_입출력과_사칙연산;

import java.util.Scanner;

public class Q11382 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		
		System.out.print("첫번째 두번째 세번째 숫자를 차례대로 입력하세요 > ");
		long a=sc.nextLong();
		long b=sc.nextLong();
		long c=sc.nextLong();
		long sum=a+b+c;
		System.out.print(sum);
		sc.close();
	}

}
