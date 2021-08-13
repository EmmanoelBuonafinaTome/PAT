let cpf = document.querySelector("#cpf")

cpf.addEventListener('focusout', validarCPF);

function validarCPF(){

    console.log("aaa")

    if(cpf.length < 10) {
        console.log(cpf)
        console.log("hahaha")
    }  else if(cpf.toString() >10) {
        console.log("foi")
    }

    cpf = 0

    // if((resultadoModulo1 + resultadoModulo2) === cpfSoNumero.substr(9, 2)) {
    //     // document.getElementById("cpfvalid").innerHTML = "foi!";
    // } else {
    //     document.getElementById("cpfvalid").innerHTML = "Insira um CPF valido!";
    // }
}