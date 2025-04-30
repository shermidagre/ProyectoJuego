let boton = document.querySelector("#boton")

let bastosLabel = document.querySelector("#bastos")
let orosLabel = document.querySelector("#oros")
let espadasLabel = document.querySelector("#espadas")
let copasLabel = document.querySelector("#copas")

let carta1 = document.querySelector("#carta1")
let carta2 = document.querySelector("#carta2")
let carta3 = document.querySelector("#carta3")
let carta4 = document.querySelector("#carta4")
let carta5 = document.querySelector("#carta5")
let carta6 = document.querySelector("#carta6")
let carta7 = document.querySelector("#carta7")

let cartas = [carta1,carta2,carta3,carta4,carta5,carta6,carta7]

let contadorCopas = 0
let contadorBastos = 0
let contadorEspadas = 0
let contadorOros = 0

boton.addEventListener("click",xeraraMan)

const paus = ["oro","copa","basto","espada"]
const numeros = ["As","2","3","4","5","6","7","Sota","Caballo","Rey"]

function xerarCartaAleatoria(){
    randomPau = paus[Math.floor(Math.random()*paus.length)]
    randomIndice = Math.floor(Math.random()*numeros.length)
    randomNumero = numeros[randomIndice]

    return{
        pau: randomPau,
        numero: randomNumero,
        nombre: randomNumero + " de " +randomPau,
        ruta: "baraja/"+randomPau + (randomIndice+1) +".png" 
    }

}

console.log(xerarCartaAleatoria().nombre)
function xeraraMan(){
    let man =[]
    let nomes = []

    contadorBastos=0
    contadorCopas=0
    contadorEspadas=0
    contadorOros=0
    
    for(let carta of cartas){
        let novaCarta = xerarCartaAleatoria()
        nomes.push(novaCarta.nombre)
        man.push(novaCarta)
        carta.src = novaCarta.ruta

        if(novaCarta.pau=="oro"){
            contadorOros++
        }else if(novaCarta.pau=="espada"){
            contadorEspadas++
        }else if(novaCarta.pau=="copa"){
            contadorCopas++
        }else if(novaCarta.pau=="basto"){
            contadorBastos++
        }

    }

    bastosLabel.innerHTML = "BASTOS: "+contadorBastos
    espadasLabel.innerHTML = "ESPADAS: "+contadorEspadas
    copasLabel.innerHTML = "COPAS: "+contadorCopas
    orosLabel.innerHTML = "OROS: "+contadorOros
}
