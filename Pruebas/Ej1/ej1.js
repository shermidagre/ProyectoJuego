let numerorandom = Math.floor(Math.random() * 100) + 1;

const numeroUsuario = parseInt(prompt("Adivina el número entre 1 y 100:"));

const r = document.getElementById("resultado");

const r2 = document.getElementById("resultado2");

function jugar() {

    r2.innerHTML = "El número es: " + numerorandom;

    if (numeroUsuario === numerorandom) {
    r.innerHTML = "¡Felicidades! Adivinaste el número.";
    }
    else if (numeroUsuario < numerorandom) {
    r.innerHTML = "MAIS";
    } else {
    r.innerHTML = "MENOS";
    }


}
    function resetear() {
        numeroRandom = Math.floor(Math.random() * 100) + 1; 
        r.innerHTML = ""; 
     }

     // Asignar eventos a los botones
    document.getElementById("Generar").addEventListener("click", jugar);
    document.getElementById("Resetear").addEventListener("click", resetear);