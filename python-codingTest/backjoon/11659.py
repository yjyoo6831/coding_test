# ㅂ
import sys

# N과 M 입력  5 3
N, M = list(map(int,sys.stdin.readline().strip().split()))

# 입력 값을 확인하는 코드
# print(N, M)

# N개의 수열 입력
numbers = list(map(int, sys.stdin.readline().strip().split()))

# 누적합 계산
# 누적합을 저장한 새로운 리스트
S = [0] * N

# 첫 번째 누적합 저장
S[0] = numbers[0]

# 두 번째 ~ n번째 누적합을 계산
for n in range(1, N):
    S[n] = S[n-1] + numbers[n]

# M개 줄 만큼 i와 j 입력
for _ in range(M):
    i, j = list(map(int, sys.stdin.readline().strip().split()))
    
    i = i - 1
    j = j - 1
    
    # 누적합을 활용한 구간합 계산
    if i != 0:
        number = S[j] - S[i-1]
        print(number)
    
    elif i == 0:
        number = S[j]
        print(number)