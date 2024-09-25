from collections import deque

def solution(arr):
    answer = []
    arr = deque(arr)
    
    # popleft() 메서드로 값을 앞에서 꺼내기
    number = arr.popleft()
    
    # 가장 맨 앞 값을 새로운 빈 리스트에 추가
    answer.append(number)
    
    # answer의 마지막 값과 arr의 맨 앞 값을 비교
    # arr에 원소가 없을 때 까지 비교
    while len(arr) != 0:
        number = arr.popleft()
        
        # 이전 값과 현재 값이 다르면
        if answer[-1] != number:
            answer.append(number)
        
    
    return answer