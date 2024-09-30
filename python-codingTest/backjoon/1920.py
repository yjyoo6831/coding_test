import sys

sys.stdin = open('input.txt')

import bisect
N = int(input().strip())

# 정수가 저장된 리스트 
number_list = list(map(int, input().strip().split()))

M = int(input().strip())

# 타겟 정수가 저장된 리스트
target_list = list(map(int, input().strip().split()))

# print(number_list) # [4, 1, 5, 2, 3]
# print(target_list) # [1, 3, 7, 9, 5]

res = 0
# target들이 number_list에 존재하는가 ?
number_list= sorted(number_list)
for t in target_list:
    idx = bisect.bisect_left(number_list,t)
    # print(idx)
    if idx < len(number_list) and t == number_list[idx]:
        res = 1
    else : res=0       
    print(res)