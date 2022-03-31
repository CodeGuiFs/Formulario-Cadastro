var txtname = document.getElementById('txtname')
var txtpass = document.getElementById('txtpass')
var list = ["cloud","CLOUD", "lx2018", "LX2018", "kiwi", "KIWI"]

function checkName(){
    if(txtname.value == ""){
        alert('O campo "Nome" é Obrigatório')
    }else{
        for(var pos in list){
            if(txtname.value == list[pos]){
                return alert(`O nome ${txtname.value} é inválido!`)
            }else{
            }
        }

    }
}

function checkPass(){
    const regex = /^(?=.*[a-z])(?=.*\d)(?=.*[!#@$%&*+=-]).{6,16}$/;
    let check = regex.test(txtpass.value)
    if(check == true){
        return alert("Você foi cadastrado com sucesso")
    }else{
        return alert("Revise os requisitos de Senha")
    }
}

function runCode(){
    checkName()
    checkPass()
}
