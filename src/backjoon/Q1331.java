package backjoon;

import java.util.*;

public class Q1330 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("숫자 두개 입력하세요");
		Scanner sc=new Scanner(System.in);
		int a=sc.nextInt();
		int b=sc.nextInt();
		System.out.println(a>b?  ">" : (a==b?"==":"<"));
		
	}

}
