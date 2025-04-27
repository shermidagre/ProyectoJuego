const filas = 8;
 const columnas = 8;
 const conexiones = {};
 let jugador = "celda1"; // Posición inicial del jugador
 let asesino = "celda64"; // Posición inicial del asesino
// Función para generar las conexiones del laberinto
function generarLaberinto() {
  for (let fila = 0; fila < filas; fila++) {
    for (let columna = 0; columna < columnas; columna++) {
      const id = `celda${fila * columnas + columna + 1}`;
      conexiones[id] = {//con esto indicamos que es arriba, abajo etc... simplemente es restar o sumar 10 o 1, para realizar un movimiento entre casillas
        arriba: fila > 0 ? `celda${(fila - 1) * columnas + columna + 1}` : null,
        abajo: fila < filas - 1 ? `celda${(fila + 1) * columnas + columna + 1}` : null,
        izquierda: columna > 0 ? `celda${fila * columnas + columna}` : null,
        derecha: columna < columnas - 1 ? `celda${fila * columnas + columna + 2}` : null,
      };
    }
  }
}


function posicionPersonajes() {//colocamos los personajes

    if (i === 1) celda.textContent = "😊"; // Jugador
    if (i === filas * columnas) celda.textContent = "💀"; // Asesino

}

// Actualizar la zona de peligro
// hay que cambiar esto en un futuro
function actualizarPeligro() {
  document.querySelectorAll(".celda.peligro").forEach(celda => {
    celda.classList.remove("peligro");
  });

  let celdasAdyacentes = [];
  if (conexiones[asesino].arriba) celdasAdyacentes.push(conexiones[asesino].arriba);
  if (conexiones[asesino].abajo) celdasAdyacentes.push(conexiones[asesino].abajo);
  if (conexiones[asesino].izquierda) celdasAdyacentes.push(conexiones[asesino].izquierda);
  if (conexiones[asesino].derecha) celdasAdyacentes.push(conexiones[asesino].derecha);

  celdasAdyacentes.forEach(idCelda => {
    document.getElementById(idCelda).classList.add("peligro");
  });
}

function vision() {
  document.querySelectorAll(".celda.vision").forEach(celda => {
    celda.classList.remove("vision");
  });

  let celdasAdyacentes = [];

  if (conexiones[jugador].arriba) celdasAdyacentes.push(conexiones[jugador].arriba);
  if (conexiones[jugador].abajo) celdasAdyacentes.push(conexiones[jugador].abajo);
  if (conexiones[jugador].izquierda) celdasAdyacentes.push(conexiones[jugador].izquierda);
  if (conexiones[jugador].derecha) celdasAdyacentes.push(conexiones[jugador].derecha);


  celdasAdyacentes.forEach(idCelda => {
    document.getElementById(idCelda).classList.add("vision");
  });
}

// Movimiento del asesino
function moverAsesino() {
  let posiblesDirecciones = [];//ponemos cuales son las casillas contiguas al asesino
  if (conexiones[asesino].arriba) posiblesDirecciones.push("arriba");
  if (conexiones[asesino].abajo) posiblesDirecciones.push("abajo");
  if (conexiones[asesino].izquierda) posiblesDirecciones.push("izquierda");
  if (conexiones[asesino].derecha) posiblesDirecciones.push("derecha");

  if (posiblesDirecciones.length === 0) return;

  let direccionAleatoria = posiblesDirecciones[Math.floor(Math.random() * posiblesDirecciones.length)];//establecemos la direccion, una de las 4 de arriba
  let asesinoPosicionFutura = conexiones[asesino][direccionAleatoria];//posible posicion futura
  let celdaDestinoAsesino = document.getElementById(asesinoPosicionFutura);//la celda del asesino
  do {
      // Tenemos que verificar que la casilla no sea un muro, si lo es hacemos q se repita el proceso hasta que sea una celda
      if (!celdaDestinoAsesino.classList.contains("celda")) {
        direccionAleatoria = posiblesDirecciones[Math.floor(Math.random() * posiblesDirecciones.length)];
        asesinoPosicionFutura = conexiones[asesino][direccionAleatoria];
        celdaDestinoAsesino = document.getElementById(asesinoPosicionFutura);
      }
    }
    while(!celdaDestinoAsesino.classList.contains("celda"))
  document.getElementById(asesino).textContent = "";//la posicion antigua quitamos el emogi
  asesino = asesinoPosicionFutura//como ya sabemos q la posicion es posible, es seguro trasladar al asesino
  document.getElementById(asesino).textContent = "💀";//colocamos el emogi que simboliza al asesino

  if (asesino === jugador) {//
  // 
  // <--hay q cambiar esto, tenemos que poner que solo pierda si el asesino se coloca en la antigua posicion del jugado y a la vez la viceversa-->

    alert("¡El asesino te ha atrapado! 💀 Game Over.");
  }
}

// Evento de movimiento del jugador
document.addEventListener("keydown", function (event) {//direccion asignada via teclas
  let direccion;
  if (event.key === "ArrowUp") direccion = "arriba";
  if (event.key === "ArrowDown") direccion = "abajo";
  if (event.key === "ArrowLeft") direccion = "izquierda";
  if (event.key === "ArrowRight") direccion = "derecha";

  let nuevaCeldaID = conexiones[jugador][direccion];
  if (!nuevaCeldaID) return;

  // Verificar si la celda destino es un muro
  const celdaDestino = document.getElementById(nuevaCeldaID);
  if (celdaDestino.classList.contains("muro")) {
  return; // No se puede mover si hay un muro
  }

  document.getElementById(jugador).textContent = "";
  jugador = nuevaCeldaID;
  document.getElementById(jugador).textContent = "😊";

  if (document.getElementById(jugador).classList.contains("peligro")) {
    alert("¡Cuidado! El asesino está cerca... 💀");
  }

  moverAsesino();
  actualizarPeligro();
  vision();

  if (jugador === "celda64") {
    alert("¡Felicidades, has escapado del laberinto! 🏆");
  }
});

// Inicializar el juego
generarLaberinto();
posicionPersonajes();
actualizarPeligro();
vision();