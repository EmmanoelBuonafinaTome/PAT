function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/main/menino.jpg')
            } else if(idade < 21){
                img.setAttribute('src', 'img/main/homem-jovem.jpg')
            } else if(idade < 50){
                img.setAttribute('src', 'img/main/tarde.jpg')
            } else {
                img.setAttribute('src', 'img/main/menino.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/main/menina.jpg')
            } else if(idade < 21){
                img.setAttribute('src', 'img/main/mulher-jovem.jpg')
            } else if(idade < 50){
                img.setAttribute('src', 'img/main/noite.jpg')
            } else {
                img.setAttribute('src', 'img/main/mulher-velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}