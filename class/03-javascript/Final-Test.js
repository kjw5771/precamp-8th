//전화번호 넣기

function changePhone1(){
    const phone1 = document.getElementById("phone1").value
    if(phone1.length === 3){
        document.getElementById("phone2").focus()
    }
}

function changePhone2(){
    const phone2 = document.getElementById("phone2").value
    if(phone2 === 4){
        document.getElementById("phone3").focus()
    }
}

// 인증번호 구현
function getToken(){
    const Token = String(Math.floor(Math.random()) * 1000000).padStart(6, "0") //여기 잘못됨
    document.getElementById("code").innerText = Token

    let time = 180
    setInterval(function(){
        if(time >= 0){
            const minutes = String(Math.floor(time / 60)).padStart(2,"0")
            const seconds = String(time % 60).padStart(2, "0")
            document.getElementById("settime").innerText = minutes + ":" + seconds
            time = time - 1
        }
        else{
            alert("이미 인증번호를 보냈습니다.")
        }
    }, 1000)
    
    
    
}
