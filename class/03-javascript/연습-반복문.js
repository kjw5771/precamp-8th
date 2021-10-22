for(let i=0 ; i<3 ; i=i+1){
    console.log(classmates[i] + "입니다!!!")
}
// VM5810:2 철수입니다!!!
// VM5810:2 영희입니다!!!
// VM5810:2 훈이입니다!!!


let classmates = ["철수","영희","훈이"]
// undefined
for(let i=0;i<classmates.length;i++){}
// undefined
for(let i=0;i<classmates.length;i++){
    console.log(classmates[i] + "입니다.")
}
// VM370:2 철수입니다.
// VM370:2 영희입니다.
// VM370:2 훈이입니다.


//실시간검색어 과일 순위 반복문의로 뽑기

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i].number + " " + fruits[i].title)
}
// 1 레드향
// VM1894:2 2 샤인머스켓
// VM1894:2 3 산청딸기
// VM1894:2 4 한라봉
// VM1894:2 5 사과
// VM1894:2 6 애플망고
// VM1894:2 7 딸기
// VM1894:2 8 천혜향
// VM1894:2 9 과일선물세트
// VM1894:2 10 귤

for(let i=0; i<10; i++){
    console.log(fruits[i].number + " "+ fruits[i].title)
}
// VM1915:2 1 레드향
// VM1915:2 2 샤인머스켓
// VM1915:2 3 산청딸기
// VM1915:2 4 한라봉
// VM1915:2 5 사과
// VM1915:2 6 애플망고
// VM1915:2 7 딸기
// VM1915:2 8 천혜향
// VM1915:2 9 과일선물세트
// VM1915:2 10 귤