# 해시 트리 
# 노드 개수 v / 간선 개수 v-1

# 해시 함수 hash()
# 특정 값에 대한 해시값을 계산
print(hash(1))
print(hash(10))

# 일정한 길이의 숫자를 반환
print(hash("1"))
print(hash("2"))
print(hash("3"))
print(hash("hello world"))

"""
# 튜플
print(hash((1,2)))
"""

# 리스트 는 해시를 적용할 수 없다. - 변경이 가능한 자료형이기 때문에
# 해시의 키가 될 수 없다.
# print(hash([1,2]))

# 딕셔너리의 키는 변경 불가능한 자료형 - 문자열, 튜플, 숫자
# - 중복된 키를 사용할 수 없다. 

# set 의 원소는 변경 불가능한 자료형
# 중복 원소를 저장할 수 없다. 
# 해시 함수에 의한 결과값(해시값)을 기준으로 순서를 보장한다.

set_ = set()
set_.add(1)
set_.add(2)
set_.add(3)
set_.add(4)
set_.add("1")
set_.add("2")
set_.add("4")
print(set_)

# 특정 문자열을 저장하고 싶을때 딕셔너리 활용
string = "hello world"

# 문자의 개수 카운팅 
dic = {
    "h" : 1,
    "e" : 1,
    # ...
    
}

# 셋 활용
# 중복 탐색 
# 리스트의 멤버십(in) 연산자 시간 복잡도 O(n)
# 셋의 멤버십 연산자 시간 복잡도 
# O(1)
 
dic = {
    "h" : 1,
    "e" : 1,    
}
# print(dic['l']) 에러 발생
from collections import defaultdict

dic = defaultdict(list)
dic['h'] = 1
dic['e'] = 1
print(dic['l']) # 존재 하지 않는 키에 대해 접근하면 기본값이 나온다. int-0 list-[] set-set()

