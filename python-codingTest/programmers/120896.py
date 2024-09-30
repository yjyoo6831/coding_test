from collections import defaultdict
def solution(s):
    answer = ''
    dic = defaultdict(int)
    for c in s:
        dic[c] = dic[c]+1
    for k in dic:
        if dic[k] == 1:
            answer=answer+k
    answer=''.join(sorted(answer))
    return answer