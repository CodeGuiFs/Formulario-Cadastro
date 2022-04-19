var user = document.getElementById('user')
var list = ["CLOUD", "LX2018", "KIWI"]

function checkUser(){
    let res = user.value.toUpperCase()
    for(var pos in list){
        if(res == list[pos]){
            alert(`O nome ${user.value} é inválido!`)
            user.value = ""
            user.focus()
        }else{}
    }
}

function send(){
    window.alert('Você foi cadastrado com sucesso')
}