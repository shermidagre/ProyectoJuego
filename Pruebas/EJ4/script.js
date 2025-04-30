let branco = document.querySelector("#branco")
let azul = document.querySelector("#azul")
let vermello = document.querySelector("#vermello")
let amarelo = document.querySelector("#amarelo")

let boton = document.querySelector("#boton")

let xogadores = [branco,amarelo,azul,vermello]



let listaRecursos = {
    2:{
        blanco:[],
        rojo:["oveja"],
        azul:[],
        amarillo:[]
    },
    3:{
        blanco:["madera"],
        rojo:[],
        azul:["piedra"],
        amarillo:["piedra"]
    },
    4:{
        blanco:[],
        rojo:[],
        azul:["trigo"],
        amarillo:["trigo","oveja"]
    },
    5:{
        blanco:["oveja"],
        rojo:[],
        azul:["barro","oveja"],
        amarillo:[]
    },
    6:{
        blanco:["barro"],
        rojo:["barro"],
        azul:[],
        amarillo:["trigo"]
    },
    7:{
        blanco:[],
        rojo:[],
        azul:[],
        amarillo:[]
    },
    8:{
        blanco:["piedra"],
        rojo:["madera"],
        azul:["madera"],
        amarillo:[]
    },
    9:{
        blanco:[],
        rojo:["trigo"],
        azul:[],
        amarillo:["madera"]
    },
    10:{
        blanco:[],
        rojo:["piedra"],
        azul:[],
        amarillo:["barro"]
    },
    11:{
        blanco:["madera"],
        rojo:["madera"],
        azul:["oveja"],
        amarillo:[]
    },
    12:{
        blanco:["trigo"],
        rojo:[],
        azul:[],
        amarillo:[]
    }
    
}



function lanzarDados(){
    let dado1 = Math.floor(Math.random()*6)+1
    let dado2 = Math.floor(Math.random()*6)+1
    let resultado = dado1 +dado2
    return resultado
}


function asignarRecursos(){

    let resultado = lanzarDados()
    let lista = listaRecursos[resultado]

    for (let recurso of lista.blanco){
        branco.innerHTML += "<img src = '" + recurso + ".png'>"
    }
    for (let recurso of lista.rojo){
        // vermello.innerHTML += "<img src = '" + recurso + ".png'>"
        vermello.innerHTML += `<img src = '${recurso}.png'>`
    }
    for (let recurso of lista.amarillo){
        amarelo.innerHTML += "<img src = '" + recurso + ".png'>"
    }
    for (let recurso of lista.azul){
        azul.innerHTML += "<img src = '" + recurso + ".png'>"
    }
    console.log(resultado)
    console.log(lista)
}

boton.addEventListener("click",asignarRecursos)