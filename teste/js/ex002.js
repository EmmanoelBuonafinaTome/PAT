function ver (){
    let pais = document.querySelector('#pais')

    let res = window.document.querySelector('#res')

    let paisVerificar = pais.value

    if(paisVerificar == 'Brasil'){
        res.innerHTML = 'alo'
    } else{
        res.innerHTML = 'Gringo'
    }
}


