
let generar = document.getElementById("generar");
let reset = document.getElementById("reset");
let resultado = document.getElementById("resultado");


function generarNumeroAleatorio() {

    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    return numeroAleatorio;
}

function mostrarNumeroAleatorio() {

    numeroAleatorio = generarNumeroAleatorio();

    resultado.innerHTML = "Número aleatorio: " + numeroAleatorio;
}
generar.addEventListener("click", mostrarNumeroAleatorio);


function limpiarResultado() {
    resultado.innerHTML = " número entre 1 y 100";
    resultadoFrase.innerHTML = " frase aleatoria";
    document.getElementById("nombre").textContent = "Nombre";
    document.getElementById("frase").textContent = "Aquí aparecerá la frase.";
    document.getElementById("foto").src = ""; 
}

generar.addEventListener("click", mostrarNumeroAleatorio);

reset.addEventListener("click", limpiarResultado);


// Ahora hare una arraay de objetos con frases aleatorias 

let frases = [
    { frase: "La vida es un viaje, no un destino." },
    { frase: "El éxito es la suma de pequeños esfuerzos repetidos día tras día." },
    { frase: "La felicidad no es algo hecho. Proviene de tus propias acciones." },
    { frase: "No cuentes los días, haz que los días cuenten." },
    { frase: "La vida es lo que  pasa mientras estás ocupado haciendo otros planes." }
];

let nombres = [
    { nombre: "Juan" },
    { nombre: "María" },
    { nombre: "Pedro" },
    { nombre: "Ana" },
    { nombre: "Luis" }
];

let generarFrase = document.getElementById("generarFrase");
let resultadoFrase = document.getElementById("resultadoFrase");

function generarFraseAleatoria() {
    let fraseAleatoria = frases[Math.floor(Math.random() * frases.length)].frase;
    let nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)].nombre;
    return `${nombreAleatorio}: ${fraseAleatoria}`;
}

function mostrarFraseAleatoria() {
    let fraseAleatoria = generarFraseAleatoria();
    resultadoFrase.innerHTML = fraseAleatoria;
}
generarFrase.addEventListener("click", mostrarFraseAleatoria);


let personajes = [
    {
      nombre: "María",
      frase: "La vida es como una caja de chocolates.",
      foto: "maria.jpg"
    },
    {
      nombre: "Carlos",
      frase: "Nunca dejes para mañana lo que puedes hacer hoy.",
      foto: "carlos.jpg"
    }
  ];


  function mostrarAleatorio() {
   
    let indice = Math.floor(Math.random() * personajes.length);


    let personaje = personajes[indice];

    document.getElementById("nombre").textContent = personaje.nombre;
    document.getElementById("frase").textContent = personaje.frase;
    document.getElementById("foto").src = personaje.foto;

  }



// Comprobar si el usuario ya ha seleccionado un tema
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleBtn.querySelector(".icon").textContent = "🌕";
}

document.addEventListener("DOMContentLoaded", function () {

    // 🔘 Botón de modo oscuro
    const toggleBtn = document.getElementById("toggle-dark-mode");

    // Verificar si el usuario ya tenía activado el modo oscuro
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        toggleBtn.querySelector(".icon").textContent = "🌕";
    }

    // Cambiar entre modo claro y oscuro
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        const icon = toggleBtn.querySelector(".icon");
        if (document.body.classList.contains("dark-mode")) {
            icon.textContent = "🌕"; // Luna llena
            localStorage.setItem("darkMode", "enabled");
        } else {
            icon.textContent = "🌙"; // Media luna
            localStorage.setItem("darkMode", "disabled");
        }
    });
});