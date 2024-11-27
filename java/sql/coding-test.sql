-- 가장 큰 물고기 10마리 구하기 
-- 길이로 내림차순, 같을경우 id로 오름차순
select ID, LENGTH from FISH_INFO order by LENGTH desc, ID asc LIMIT 10 ;

-- 조건에 부합하는 중고거래 댓글 조회하기
-- 2022-10에 해당하는 월에 해당된 board_id 가 같은 순으로 댓글 가져오기
SELECT ub.title, ub.board_id, ur.reply_id, ur.writer_id, ur.contents, 
DATE_FORMAT(ur.created_date,'%Y-%m-%d') as CREATED_DATE 
FROM USED_GOODS_BOARD as ub 
inner join USED_GOODS_REPLY AS ur 
on ub.board_id = ur.board_id
WHERE ub.CREATED_DATE 
BETWEEN '2022-10-01' AND '2022-10-31' 
order by created_date,ub.title ;

-- 특정 형질을 가지는 대장균 찾기 
select COUNT(BIN(genotype)) as COUNT from ECOLI_DATA 
WHERE bin(GENOTYPE) not regexp('^*1.$') and
(bin(GENOTYPE) REGEXP('^*1$') or bin(GENOTYPE) REGEXP('^*1..$'))

SELECT COUNT(IF(
   BIN(GENOTYPE) NOT LIKE "%1_"
   AND (BIN(GENOTYPE) LIKE "%1" OR BIN(GENOTYPE) LIKE "%1__"), 1, NULL)) COUNT
FROM ECOLI_DATA