# 입력 방식을 파일 읽기로 대체
import sys

sys.stdin = open("./input.txt")

# input()함수보다 빠른 입력 방법
import sys

# input 함수 코드를 readline 코드로 대체
input = sys.stdin.readline

# 공백을 기준으로 입력되는 2개의 정수
# strip() : 문자열 양쪽의 공백, 개행 문자를 제거
# N, M = map(int, sys.stdin.readline().strip().split())
N, M = map(int, input().strip().split())

print(N, M)

name_set = set()
# 듣도 못한 이름 입력 반복
for _ in range(N):
    # 문자열 1개 입력
    name = input().strip()
    # print(name)

    # 이름 저장
    name_set.add(name)

name_list = []

# 보다 못한 이름 입력 반복
for _ in range(M):
    # 문자열 1개 입력
    name = input().strip()
    # print(name)

    # 듣도 못한 이름 목록에서 탐색
    if name in name_set:
        # 듣도 못한 이름 목록과 보도 못한 이름 목록 저장
        name_list.append(name)
# print(name_list)

# 듣도 보도 못한 이름의 수 - 리스트의 길이 저장
count = len(name_list)

# sorted(): 정렬된 리스트 반환
sorted_list = sorted(name_list)

print(count)
# print(count, sorted_list)
for name in sorted_list:
    print(name)
