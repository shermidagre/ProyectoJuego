const filas = 16;
 const columnas = 16;
 const conexiones = {};
 let jugador = "celda2"; // Posición inicial del jugador
 let asesino = "celda153"; // Posición inicial del asesino
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

// Crear el laberinto
function crearLaberinto1() {

  const celdasPermitidas = [2, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    34, 38, 42, 46, 50, 51, 52, 53, 54, 56, 57, 58, 59, 60, 62, 63,
    68, 70, 76, 82, 83, 84, 86, 88, 89, 90, 91, 92, 93, 94, 95,
    102, 104, 106, 110, 114, 115, 116, 117, 118, 120, 122, 123, 124, 126, 127,
    130, 132, 136, 140, 146, 148, 149, 150, 151, 152, 153, 154, 156, 157, 158, 159,
    162, 166, 170, 175, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 191,
    194, 196, 200, 204, 210, 212, 214, 215, 216, 218, 219, 220, 221, 222, 223,
    226, 227, 228, 229, 230, 232, 233, 234, 239, 255];

  const laberintoDiv = document.getElementById("laberinto");
  for (let i = 1; i <= filas * columnas; i++) {
    const celda = document.createElement("div");
    celda.id = `celda${i}`;
     if (celdasPermitidas.includes(i)){
      celda.classList.add("celda");
      }
      else {
      celda.classList.add("muro");
    }
    // Colocar al jugador y al asesino

    if (i === 2) celda.textContent = "😊"; // Jugador
   if (i === 153) {
    const imgAsesino = document.createElement("img");
    imgAsesino.src = "./personajes/parca.jpg";
    imgAsesino.alt = "Asesino";
    imgAsesino.classList.add("asesino"); // para editarlo con CSS
    celda.appendChild(imgAsesino);
  }


    laberintoDiv.appendChild(celda);
  }
}

function actualizarPeligro() {//zona de peligro
  document.querySelectorAll(".celda.peligro").forEach(celda => {
    celda.classList.remove("peligro");
  });
//aqui lo hago para que solo aparezca cuando este dentro del radio de vision del personaje
  let celdasAdyacentes = [];
  if (conexiones[asesino].arriba==conexiones[jugador].abajo||
      conexiones[asesino].arriba==conexiones[jugador].derecha||
      conexiones[asesino].arriba==conexiones[jugador].izquierda
  ) celdasAdyacentes.push(conexiones[asesino].arriba);
  if (conexiones[asesino].abajo==conexiones[jugador].arriba||
      conexiones[asesino].abajo==conexiones[jugador].derecha||
      conexiones[asesino].abajo==conexiones[jugador].izquierda
  ) celdasAdyacentes.push(conexiones[asesino].abajo);
  if (conexiones[asesino].izquierda==conexiones[jugador].derecha||
      conexiones[asesino].izquierda==conexiones[jugador].arriba||
      conexiones[asesino].izquierda==conexiones[jugador].abajo
  ) celdasAdyacentes.push(conexiones[asesino].izquierda);
  if (conexiones[asesino].derecha==conexiones[jugador].izquierda||
      conexiones[asesino].derecha==conexiones[jugador].arriba||
      conexiones[asesino].derecha==conexiones[jugador].abajo
  ) celdasAdyacentes.push(conexiones[asesino].derecha);

  if(document.getElementById(asesino).classList.contains("vision")||document.getElementById(asesino).classList.contains("vision2"))
  document.getElementById(asesino).classList.add("peligro");

  celdasAdyacentes.forEach(idCelda => {
    document.getElementById(idCelda).classList.add("peligro");
  });
}

function vision() {
  document.querySelectorAll(".celda.vision").forEach(celda => {//quita la vision anterior para actualizarla
    celda.classList.remove("vision");
  });
  document.querySelectorAll(".celda.vision2").forEach(celda => {
    celda.classList.remove("vision2");
  });
  document.querySelectorAll(".celda.salida").forEach(celda => {
    celda.classList.remove("salida");
    document.getElementById('celda255').textContent = "";
  });

  let celdasAdyacentes = [];//basicamente que las celdas contiguas al personaje sean su vision

  if (conexiones[jugador].arriba) celdasAdyacentes.push(conexiones[jugador].arriba);
  if (conexiones[jugador].abajo) celdasAdyacentes.push(conexiones[jugador].abajo);
  if (conexiones[jugador].izquierda) celdasAdyacentes.push(conexiones[jugador].izquierda);
  if (conexiones[jugador].derecha) celdasAdyacentes.push(conexiones[jugador].derecha);

  let celdasAdyacentes2 = [];

  // Para cada celda adyacente
  celdasAdyacentes.forEach(idCelda => {//se repite x cada una de las celdas anteriores

    if(document.getElementById(idCelda).classList.contains("celda")){//solo pone vision a las celdas contiguas con vision, puse esto para q no funcione con paredes

    if (conexiones[idCelda].arriba) celdasAdyacentes2.push(conexiones[idCelda].arriba);
    if (conexiones[idCelda].abajo) celdasAdyacentes2.push(conexiones[idCelda].abajo);
    if (conexiones[idCelda].izquierda) celdasAdyacentes2.push(conexiones[idCelda].izquierda);
    if (conexiones[idCelda].derecha) celdasAdyacentes2.push(conexiones[idCelda].derecha);

  }
  });

  document.getElementById(jugador).classList.add("vision");//añade la vision

  celdasAdyacentes.forEach(idCelda => {
    document.getElementById(idCelda).classList.add("vision");
  });

  celdasAdyacentes2.forEach(idCelda => {
    document.getElementById(idCelda).classList.add("vision2");
  });

  document.querySelectorAll(".celda.vision.vision2").forEach(celda => {
    celda.classList.remove("vision2");
  });

  if(document.getElementById('celda255').classList.contains("vision")||document.getElementById('celda255').classList.contains("vision2")){
    document.getElementById('celda255').classList.add("salida");
    document.getElementById('celda255').textContent = "🏆";
    document.querySelectorAll(".celda.salida").forEach(celda => {
      celda.classList.remove("vision");
      celda.classList.remove("vision2");
    });
  }
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
      document.getElementById(asesino).textContent = ""; // Borra imagen anterior
    asesino = asesinoPosicionFutura;

    // Solo mostrar al asesino si está en el campo de visión
    if (celdaDestinoAsesino.classList.contains("vision") || celdaDestinoAsesino.classList.contains("vision2")) {
      const imgAsesino = document.createElement("img");
      imgAsesino.src = "./personajes/parca.jpg"; // ← cambia esto por la ruta correcta
      imgAsesino.alt = "Asesino";
      imgAsesino.classList.add("asesino");
      document.getElementById(asesino).appendChild(imgAsesino);
    }
    /*
    document.getElementById(asesino).textContent = "";//la posicion antigua quitamos el emogi
    asesino = asesinoPosicionFutura//como ya sabemos q la posicion es posible, es seguro trasladar al asesino
    if (celdaDestinoAsesino.classList.contains("vision")||celdaDestinoAsesino.classList.contains("vision2"))
    document.getElementById(asesino).textContent = "💀";//colocamos el emogi que simboliza al asesino
    */

  if (asesino === jugador) {
    document.getElementById('avisoCookies').style.display = 'flex';
}
}
function ocultarAviso() {
  document.getElementById('avisoCookies').style.display = 'none';
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

  vision();
  moverAsesino();
  actualizarPeligro();

  if (jugador == "celda255") {
    alert("¡Felicidades, has escapado del laberinto! 🏆");
  }
});

// Inicializar el juego
generarLaberinto();
/*
const resultado = Math.floor(Math.random() * 3) + 1;

if (resultado === 1) {
*/
crearLaberinto1();
/*
} else if (resultado === 2) {
  crearLaberinto2();
} else if (resultado === 3){
  crearLaberinto3();
} else {
  console.log("Error al elegir que laberinto crear");
}
*/

vision();
actualizarPeligro();