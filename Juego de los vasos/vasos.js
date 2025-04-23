
let aciertos = document.querySelector("#aciertos")
let fallos = document.querySelector("#fallos")

let vaso1 = document.querySelector("#vaso1")
let vaso2 = document.querySelector("#vaso2")
let vaso3 = document.querySelector("#vaso3")

let boton = document.querySelector("#reset")

let xogou = false

let posicionMoneda = esconderMoneda()

console.log(posicionMoneda)

let contadorAcertos = 0
let contadorFallos = 0

vaso1.addEventListener("click", comprobarVaso1)
vaso2.addEventListener("click", comprobarVaso2)
vaso3.addEventListener("click", comprobarVaso3)

boton.addEventListener("click", reset)

function esconderMoneda() {

    return Math.floor(Math.random() * 3)

}

function comprobarVaso1() {
    if (xogou === false) {
        if (posicionMoneda === 0) {
            contadorAcertos++
            aciertos.innerHTML = "Aciertos: " + contadorAcertos
            vaso1.scr = "moneda.png"

        } else {
            contadorFallos++
            fallos.innerHTML = "Fallos: " + contadorFallos
            vaso1.style.visibility = "hidden"
        }
        xogou = true
    }
}
function comprobarVaso2() {
    if (xogou === false) {
        if (posicionMoneda === 0) {
            contadorAcertos++
            aciertos.innerHTML = "Aciertos: " + contadorAcertos
            vaso2.scr = "moneda.png"

        } else {
            contadorFallos++
            fallos.innerHTML = "Fallos: " + contadorFallos
            vaso2.style.visibility = "hidden"
        }
        xogou = true
    }
}
function comprobarVaso3() {
    if (xogou === false) {
        if (posicionMoneda === 0) {
            contadorAcertos++
            aciertos.innerHTML = "Aciertos: " + contadorAcertos
            vaso3.scr = "moneda.png"

        } else {
            contadorFallos++
            fallos.innerHTML = "Fallos: " + contadorFallos
            vaso3.style.visibility = "hidden"
        }
        xogou = true
    }
}

function reset(){
    posicionMoneda = esconderMoneda()
    xogou = false
    vaso1.src= "vaso.jpg"
    vaso2.src= "vaso.jpg"
    vaso3.src= "vaso.jpg"

    vaso1.style.visibility = "visible"
    vaso2.style.visibility = "visible"
    vaso3.style.visibility = "visible"
}