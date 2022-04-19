var user = document.getElementById('user')
var list = ["CLOUD", "LX2018", "KIWI"]

function checkUser(){
    let res = user.value.toUpperCase()
    window.alert(res)
    for(var pos in list){
        if(res == list[pos]){
            alert(`O nome ${user.value} é inválido!`)
        }else{}
    }
}