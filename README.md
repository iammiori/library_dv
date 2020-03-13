# Sejong Univ. 학술정보원 설문조사 시각화

[Go to site](https://iammiori.github.io/library_dv/wc_index6.html)

## 기능
1. word cloud
2. force directed graph
<br>
- 기본적으로 문항별로 키워드를 카운트하여, wordcloud를 그림 <br>
- wordcloud 만으로는 문맥등을 파악하기 힘들기 때문에, 연관도를 분석해 froce directed graph를 그림 <br>
- wordcloud 에서 단어 선택시 force directed graph page로 넘어감 <br>
- froce directed graph 에서 키워드 count와 color mapping
- force directed graph 에서 핵심 키워드는 node의 size로 mapping
- force directed graph 에서 node 선택시, 해당 node 에 해당해는 raw data 뿌려줌 <br>

## How to Run
1. word cloud 보고,
2. word cloud 클릭시, force directed graph 를 보여줌
3. 관심있는 node 클릭시, raw data 뿌려줌

## 사용언어
- html + css + js (web)
- pyhon (analysis)

## 사용라이브러리
- d3.js

## 회고
- text 분석과, 시각화에 중점을 둔 프로젝트로, 웹이 안예쁨..
