
//1초가 1000, 1초뒤에 기능실행
setTimeout(function(){ 
    console.log("기능 실행!!")
}, 2000)

// VM1558:2 기능 실행!!



//1초뒤 안녕하세요 실행 무한반복
setInterval(function(){
    console.log("안녕하세요")
}, 1000)

// 6VM1562:2 안녕하세요