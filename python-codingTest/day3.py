# 파이썬 함수
# def 함수명(매개변수):


def function(par1, par2):
    total = par1 + par2

    return total


total = function(1, 2)

# print(total) # 3

# print()는 반환값이 없는 함수

# 중첩 반복문
# 이차원 리스트의 순회를 위한 이중 반복문

# 한 좌표에서 델타 탐색
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

number = matrix[0][1]

# 세로길이 (n,N) 와 가로 길이(m,M)
n = len(matrix)
m = len(matrix[0])

# print(n,m)  # 3 3

# 인덱스를 통한 순회
for y in range(n):
    # print(matrix[y])
    for x in range(m):
        print(matrix[y][x])


y = 1
x = 1
dy = [-1, 1, 0, 0]  # y에 대한 상하좌우 변화값
dx = [0, 0, -1, 1]  # x에 대한 상하좌우 변화값

for d in range(4):
    next_y = y + dy[d]
    nx = x + dx[d]
    # 범위 조건문
    if -1 < next_y < n and -1 < nx < m:
        print(next_y, nx, matrix[next_y][nx])

# 이차원 리스트의 모든 좌표에서의 델타 탐색
# 이차원 리스트의 이중 반복문을 통한 인덱스 순회

# 2. 델타 탐색
matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

number = matrix1[0][1]

# 세로길이 (n,N) 와 가로 길이(m,M)
n = len(matrix1)
m = len(matrix1[0])

# 모든 좌표에서의 델타 탐색 코드 작성
for y in range(n):
    for x in range(m):
        # 델타 탐색의 기준 좌표 y, x
        
        # y,x에 대한 변화값
        dy = [-1, 1, 0, 0]
        dx = [0, 0, -1, -1]

        # 델타 탐색(4방향 탐색)
        for d in range(4):
            next_y = y + dy[d]
            next_x = x + dx[d]
            
            # 범위에 대한 조건문
            if -1 < next_y < n and -1 < next_x < m:
                print(y,x, matrix[next_y][next_x]) 
                

# 파이썬 입력 경우의 수 
#1. 정수 1개를 입력하는 경우 
# number = int(input())
#2. 정수 2개를 입력하는 경우 

# 파일 읽기를 통한 예제 입력
import sys
sys.stdin = open('./input.txt','r')

# 언패킹: 리스트의 개수만큼 변수가 존재하면 원소 위치에 맞는 변수에 값이 저장
N, M = list(map(int, input().split(" ")))
# print(N, M)

# 3. 이차원 리스트를 입력받는 경우
# 세로 길이(N)가 꼭 필요하다.
# 1차원 리스트를 저장할 빈 리스트 변수
matrixA = []
for _ in range(N):
    input_list = input().split(" ") # 예시  ["1","1","1"]
    number_list = list(map(int,input_list)) # 결과 예시 [1, 1, 1]
    matrixA.append(number_list)

# print (N,M)    
# print(matrixA)
# print(matrixB)

# 두 행렬의 덧셈 코드 
# 2차원 리스트의 인덱스 순회 
for n in range(N):
    for m in range(N):
        matrixA[n][m] = matrixA[n][m] + matrixB[n][m]

print(matrixA)

for n in range(N):
    for m in range(M):
        print(matrixA[n][m], end=" ")
        # print() end 인자 : 출력의 끝 문자를 변경한다. 
    print()