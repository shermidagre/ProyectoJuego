
// Ejercicio 2: Crear un programa que permita al usuario ingresar palabras y las almacene en un array.

const r = document.getElementById("resultado");
let palabras = [];

function jugar() {

    r.innerHTML = "Palabras: " + palabras.join(", ");

   const palabra = prompt("Introduce una palabra: ");

    palabras.push(palabra);
    

    actualizar();
    }

function resetear() {
    palabras = []; 
    actualizar();
}

function actualizar() {
r.innerHTML = "Palabras: " + palabras.join(", ");
}

document.getElementById("Generar").addEventListener("click", jugar);
document.getElementById("Resetear").addEventListener("click", resetear);
