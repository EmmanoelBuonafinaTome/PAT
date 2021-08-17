dayName = new Array (
    
    "domingo", 
    "segunda", 
    "terça", 
    "quarta", 
    "quinta", 
    "sexta", 
    "sábado"
)

monName = new Array (

    "janeiro", 
    "fevereiro", 
    "março", 
    "abril", 
    "maio", 
    "junho",
    "julho", 
    "agosto",
    "setembro", 
    "outubro", 
    "novembro", 
    "dezembro"

)

now = new Date

dateAndTime= document.querySelector('.date')
dateAndTime.innerHTML = (" Hoje é " + 
dayName[now.getDay() ] + ", " + 
now.getDate() + " de " + 
monName[now.getMonth() ] + " de " + 
now.getFullYear())

console.log(monName)

console.log(now.getMonth())