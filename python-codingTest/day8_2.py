import bisect 

list_ = [1, 4, 6, 8, 9, 12, 13]

left_index = bisect.bisect_left(list_,8)
print(left_index)

right_index = bisect.bisect_right(list_,8)
print(right_index)

# bisect를 활용한 탐색(in)

target = 4
target = 14  # 리스트의 최대값을 벗어나는 값 
left_index = bisect.bisect_left(list_,target)
print(left_index)

# 삽입 인덱스가 리스트 길이와 다르고 삽입 인덱스의 원소의 값과 타겟 값이 같으면
if left_index != len(list_) and target == list_[left_index]:
    print('값을 찾았다.')
else:
    print('값을 찾지 못했다.')

# 비정렬된 리스트를 정렬을 해서 이진 탐색을 하는게 유리한가 ?
# nlogn / logn -> nlogn
# 탐색을 n번 한다고 가정했을 때, 정렬(nlogn) 1번, n번의 logn -> (nlogn)

# 비정렬된 리스트를 일반 탐색을 하는게 유리한가 ?
# O(n), 탐색을 n번하면 O(n^2)

