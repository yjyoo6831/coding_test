"""# 구간합 알고리즘

# 구간의 길이
K = 3
numbers = [1, 2, 3, 4, 5]

for i in range(len(numbers) - K + 1):
    # i : 구간의 시작 좌표
    print(i)
    
    # 구간 길이(K) 만큼의 리스트 슬라이싱
    # split_list = numbers[i:i+K]

    split_list = []
    for j in range(i, i+K):
        split_list.append(numbers[j])
    
    # 구간 리스트
    print(split_list)
    
    # 구간 합
    print(sum(split_list))

# 시간 복잡도 O(n)

# 더 효율적인 구간합 알고리즘
# 슬라이딩 윈도우 알고리즘

# 첫번째 구간의 합
split_sum = sum(numbers[0:K])
print(split_sum)


for i in range(len(numbers) - K):
    # 기준 위치 i
    split_sum = split_sum - numbers[i] + numbers[i+K]
    print(split_sum)

# 슬라이딩 윈도우는 구간의 최대값/최소값을 구하는데 활용

"""

# 구간합 중 가장 큰 값을 구하라.
numbers = [3, -2, -4, -9, 0, 3, 7, 13, 8, -3]
N = 10
K = 2


# 슬라이딩 윈도우를 위한 첫 구간의 합
split_sum = sum(numbers[:K])
print(split_sum)

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

"""
# 가장 큰 값을 갱신하는 방법
# 임의의 가장 큰 값 -> 입력의 범위에서 가장 작은 값을 저장
max_number = 0

numbers = [-1, 1, 2, 3, 4, 5]
for number in numbers:
    # 임의의 가장 큰 값보다 원소가 더 크다면 값을 갱신
    if max_number < number:
        max_number = number
"""


# 가장 큰 값, 양의 무한대
max_number = float('inf')

# 가장 작은 값, 음의 무한대
min_number = float('-inf')

print(max_number, min_number)