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
      conexiones[id] = {
        arriba: fila > 0 ? `celda${(fila - 1) * columnas + columna + 1}` : null,
        abajo: fila < filas - 1 ? `celda${(fila + 1) * columnas + columna + 1}` : null,
        izquierda: columna > 0 ? `celda${fila * columnas + columna}` : null,
        derecha: columna < columnas - 1 ? `celda${fila * columnas + columna + 2}` : null,
      };
    }
  }
}

// Crear el laberinto visual
function crearLaberinto() {
  /*
  const laberintoDiv = document.getElementById("laberinto");
  for (let i = 1; i <= filas * columnas; i++) {
    const celda = document.createElement("div");
    celda.id = `celda${i}`;
    celda.classList.add("celda");
  */
    // Colocar al jugador y al asesino
    if (i === 1) celda.textContent = "😊"; // Jugador
    if (i === filas * columnas) celda.textContent = "💀"; // Asesino

    laberintoDiv.appendChild(celda);

}

// Actualizar la zona de peligro
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

// Movimiento del asesino
function moverAsesino() {
  let posiblesDirecciones = [];
  if (conexiones[asesino].arriba) posiblesDirecciones.push("arriba");
  if (conexiones[asesino].abajo) posiblesDirecciones.push("abajo");
  if (conexiones[asesino].izquierda) posiblesDirecciones.push("izquierda");
  if (conexiones[asesino].derecha) posiblesDirecciones.push("derecha");

  if (posiblesDirecciones.length === 0) return;

  let direccionAleatoria = posiblesDirecciones[Math.floor(Math.random() * posiblesDirecciones.length)];
  document.getElementById(asesino).textContent = "";
  asesino = conexiones[asesino][direccionAleatoria];
  document.getElementById(asesino).textContent = "💀";

  if (asesino === jugador) {
    alert("¡El asesino te ha atrapado! 💀 Game Over.");
  }
}

// Evento de movimiento del jugador
document.addEventListener("keydown", function (event) {
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

  if (jugador === "celda64") {
    alert("¡Felicidades, has escapado del laberinto! 🏆");
  }
});

// Inicializar el juego
generarLaberinto();
crearLaberinto();
actualizarPeligro();