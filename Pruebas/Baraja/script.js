
let boton = document.querySelector('#boton')

let bastosLabel = document.querySelector('#bastos')
let copasabel = document.querySelector('#copas')
let espadasLabel = document.querySelector('#espadas')
let ourosLabel = document.querySelector('#oros')

let carta1= document.querySelector('#carta1')
let carta2= document.querySelector('#carta2')
let carta3= document.querySelector('#carta3')
let carta4= document.querySelector('#carta4')
let carta5= document.querySelector('#carta5')
let carta6= document.querySelector('#carta6')
let carta7= document.querySelector('#carta7')


let palos = ["oros","copas","espadas","bastos"]
const numeros = ["As","2","3","4","5","6","7","Sota","Caballo","Rey"]

boton.addEventListener("click",generarmano)

function generarcartaAleatoria(){
    randomPalo = palos[Math.floor(Math.random()*palos.length)]
    randomNumero = numeros[Math.floor(Math.random()*numeros.length)]
 
    return {
        palo:randomPalo,
        numero:randomNumero,
        nome:randomNumero + "de" + randomPalo
    }
}

console.log(generarcartaAleatoria().nome)

function generarmano(){
    let mano = []
    let nombres = []

    for(let i=0; i<7; i++){

        let nuevaCarta = generarcartaAleatoria
        mano.push(nuevaCarta)
        nombres.push(nuevaCarta,nome)
    }


    return {mano,nombres}
}

function comprobarArray(mano,nombres){

    for ( let i= 0; i< mano.length; i++){
        if (mano[i].nome !== nombres[i]){
            return false;
        }
    }

    return true;
}