# sorted_list = sorted(iterable, key, reverse)
# iterable : 반복 가능한 자료형
# key : 정렬 기준
# reverse : 정렬 결과를 뒤집는다.(기본값 : False)

arr = [3, 5, 7, 1, 2]
sorted_list = sorted(arr)
print(sorted_list)  # [1, 2, 3, 5, 7]

arr = [3, 5, 7, 1, 2]

# reverse=True 를 통한 역순 정렬(내림차순)
sorted_list = sorted(arr, reverse=True)
print(sorted_list)  # [7, 5, 3, 2, 1]

words = ["apple", "cherry", "banana", "strawberry"]

# 각 원소의 길이를 기준으로 정렬한다.
sorted_words = sorted(words, key=len)
print(sorted_words)

# ['apple', 'cherry', 'banana', 'strawberry']

matrix = [
    [2, 4, 5],
    [1, 0, 4],
    [5, 3, 1],
]

# 내부 리스트의 두 번째(index = 1) 원소를 기준으로 정렬한다.
sorted_list = sorted(matrix, key=lambda x: (x[1]))
print(sorted_list)
"""
[
    [1, 0, 4],
    [5, 3, 1],
    [2, 4, 5],
]
"""

matrix = [
    [2, 0, 5],
    [1, 0, 4],
    [5, 3, 1],
    [5, 3, 0],
]

# 내부 리스트의 두 번째와 첫 번째 원소를 기준으로 정렬
# 두 번째 원소의 우선순위가 높다.
sorted_list = sorted(matrix, key=lambda x: (x[1], x[2]))
print(sorted_list)
"""
[
    [1, 0, 4],
    [2, 0, 5],
    [5, 3, 0],
    [5, 3, 1],
]
"""

# 딕셔너리
dic = {1: "kiwi", 3: "apple", 2: "banana"}

# 기본 딕셔너리 정렬
sorted_dic = sorted(dic)
print(sorted_dic)  # [1,2,3]

# 딕셔너리.items() : {key: value} => (k,v)
dic_items = dic.items()
print(dic_items)
# [(1, 'kiwi'), (3, 'apple'), (2, 'banana')]

# 딕셔너리 key를 기준으로 정렬
sorted_dic = dict(sorted(dic.items(), key=lambda x: x[0]))
print(sorted_dic)

# 딕셔너리 value 기준으로 정렬
sorted_dic = dict(sorted(dic.items(), key=lambda x: x[1]))
print(sorted_dic)
# {3: 'apple', 2: 'banana', 1: 'kiwi'}

# 여러개의 기준 정렬
matrix = [
    (1,0),
    (3,0),
    (2,0),
    (0,1),
    (1,1)
]

# 정렬 우선순위 두 번째 원소 -> 첫 번째 원소
sorted_matrix = sorted(matrix, key=lambda x:(x[1],x[0]))
print(sorted_matrix)
# [(1, 0), (2, 0), (3, 0), (0, 1), (1, 1)]

# 정렬 우선순위 두 번째 원소 -> 첫 번째 원소(역순)
sorted_matrix = sorted(matrix, key = lambda x:(x[1], -x[0]))
print(sorted_matrix)

# 합 또는 차를 기준으로 정렬 
# 두번째 원소 - 첫번재 원소를 기준으로 정렬
sorted_matrix = sorted(matrix, key = lambda x:(x[1] - x[0]))
print(sorted_matrix)
# [(3, 0), (2, 0), (1, 0), (1, 1), (0, 1)]

