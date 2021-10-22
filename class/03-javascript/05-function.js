const getToken=()=>{
    const getToken = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("111").innerText = getToken
}