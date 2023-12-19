const username = "diva"
const password = "240805"

function auth(){
    //tangkap nilai yang di input user
    let userinput = document.getElementById("username").value
    let passwordinput = document.getElementById("password").value

    let Form = document.getElementById('form')

    if(username == userinput && password == passwordinput){
        alert("login berhasil")
        Form.submit()
    } else {
        alert("login gagal")
    }
}