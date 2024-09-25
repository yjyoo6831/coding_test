import sys
input = sys.stdin.readline

# input에 의해 실제 실행되는 코드 : sys.stdin.readline
K = int(input().strip())

# 정수를 저장할 스택
stack = list()

for _ in range(K):
    number = int(input().strip())
    # 모든 수를 저장하는데 입력이 0이면 마지막 값을 삭제
    """
    3
    0
    4
    0
    """
    
    if number == 0:
        stack.pop()
    elif number != 0:
        stack.append(number)

# 모든 수의 합을 출력
# 리스트 원소들의 합을 반환하는 sum(리스트)
print(sum(stack))
