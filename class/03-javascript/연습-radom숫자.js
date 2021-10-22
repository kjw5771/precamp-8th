Math.random()
// 0.939370230483833
Math.random() * 10000
// 4994.947426527032


Math.floor(Math.random() * 1000000)
// 681756


String(Math.floor(Math.random() * 1000000))
// '912473'
String(Math.floor(Math.random() * 1000000))
// '556607'
String(Math.floor(Math.random() * 10))
// '7'
String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// '531860'
String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// '574324'
String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// '712469'
String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// '014771'
String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// '714963'
const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// undefined
token
// '616177'

String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// '110951'
const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
// undefined
token
// '921716'
token
// '921716'
token
// '921716'




//토큰번호 원래 계속 똑같은 번호 생성되는데 펑션에 넣어서 하면 매번 번호가 다른게 나온다

function getToken(){
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    console.log(token)
}
// undefined
getToken()
// VM1089:3 072787
// undefined
getToken()
// VM1089:3 662951
// undefined
getToken()
// VM1089:3 686133
// undefined
getToken()
// VM1089:3 844079