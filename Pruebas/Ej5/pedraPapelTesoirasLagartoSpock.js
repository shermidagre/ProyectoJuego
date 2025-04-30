let imagenes = document.querySelectorAll(".imagenes"); // Selecciona todos los objetos del HTML con la clase "imagenes"

// Variables para almacenar las selecciones de los jugadores
let datosXogador1 = null;
let datosXogador2 = null;

// Reglas de victoria
let reglas = {
    "pedra": ["tesoiras", "lagarto"], // Pedra gana contra Tesoiras y Lagarto
    "papel": ["spock", "pedra"],     // Papel gana contra Spock y Pedra
    "tesoiras": ["papel", "lagarto"],// Tesoiras gana contra Papel y Lagarto
    "lagarto": ["spock", "papel"],   // Lagarto gana contra Spock y Papel
    "spock": ["tesoiras", "pedra"]   // Spock gana contra Tesoiras y Pedra
};

// Añade el evento "click" a cada imagen
for (let img of imagenes) {
    img.addEventListener("click", piezasSeleccionadas);
}

// Función para manejar las selecciones
function piezasSeleccionadas() {
    let valor = this.dataset.valor; // Accede al atributo data-valor
    let tipo = this.dataset.tipo;  // Accede al atributo data-tipo

    // Asignar la selección al jugador correspondiente
    if (parseInt(tipo) === 1) {
        datosXogador1 = valor;
        console.log("Xogador 1 seleccionó: " + datosXogador1);
    } else if (parseInt(tipo) === 2) {
        datosXogador2 = valor;
        console.log("Xogador 2 seleccionó: " + datosXogador2);
    }

    // Si ambos jugadores han realizado una selección, determinar el ganador
    if (datosXogador1 && datosXogador2) {
        let resultado = determinarGanador(datosXogador1, datosXogador2);
        console.log(resultado); // Muestra el resultado en la consola
        // Puedes mostrar el resultado en el DOM si lo prefieres
        document.querySelector(".resultado").innerHTML = resultado;

        // Resetear para una nueva partida
        datosXogador1 = null;
        datosXogador2 = null;
    }
}

// Función para determinar el ganador
function determinarGanador(seleccion1, seleccion2) {
    if (seleccion1 === seleccion2) {
        return "Empate"; // Si ambos seleccionan lo mismo, es empate
    } else if (reglas[seleccion1].includes(seleccion2)) {
        return "Xogador 1 gana"; // Selección 1 gana contra Selección 2
    } else {
        return "Xogador 2 gana"; // Selección 2 gana contra Selección 1
    }
}
