# 구간합 중 가장 큰 값을 구하라.
numbers = [3, -2, -4, -9, 0, 3, 7, 13, 8, -3]
N = 10
K = 2

""" 백준용 입력 코드
N, K = list(map(int, input().split()))
numbers = list(map(int, input().split()))
"""

# 슬라이딩 윈도우를 위한 첫 구간의 합
split_sum = sum(numbers[:K]) 

# 모든 구간 합을 리스트에 저장 후 max() 함수 사용
# 첫 번째 구간합도 저장해야한다.
answer_list = [split_sum]

# 기준 위치 i 를 순회할 반복문
# 0 -> N - K
for i in range(0, N - K):
    split_sum = split_sum - numbers[i] + numbers[i+K]
    # 모든 구간 합을 저장한다.
    answer_list.append(split_sum)

# 리스트에 저장된 원소 중 가장 큰 값을 출력
print(max(answer_list))