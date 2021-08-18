function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'img/main/manha.jpg'
        document.body.style.background = "#E2CD9F"
    } else if(hora >= 12 && hora < 18){
        img.src = 'img/main/tarde.jpg'
        document.body.style.background = "#B9846F"
    } else {
        img.src = 'img/main/noite.jpg'
        document.body.style.background = "#515154"
    }
}