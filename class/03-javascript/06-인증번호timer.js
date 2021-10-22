

let isStarted = false
function getToken(){
    if(isStarted === false){
        isStarted = true

        const getToken=()=>{
            const Token = String(Math.floor(Math.random()) * 1000000).padStart(6, "0")
            document.getElementById("111").innerText = Token
        
        
        
        
        let time = 180
        setInterval(function(){
            if(time >=0){
                const minutes = String(Math.floor(time / 60)).padStart(2,"0")
                const seconds = String(time % 60).padStart(2,"0")
                document.getElementById("222").innerText = minutes + ":" + seconds //1  --> 순서주의 
                time = time - 1                                 //2 time에 -1을 빼고 상자에 담고 -1은 time에 담기는데
                                                                // 위에 출력문은 0보다 큰거를 출력이니까 -1빼고 0이 출력
            }
            
           
        }, 1000)
        else{
            alert("이미 실행되었습니다.!")
        }
    
    }
}
}