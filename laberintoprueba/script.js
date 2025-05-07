const filas = 16;
const columnas = 16;
const conexiones = {};
const fantasmas = {};
let jugador = "celda2"; // Posición inicial del jugador
let asesino = "celda153"; // Posición inicial del asesino
let powerup = "celda232";
let cantidaddeFantasmas = 0;
let tiempodeInvulnerabilidad = 0;
let invulnerabilidad = false;
let recogidoPowerup = false;
let pulgar = false;
let posibleCasilladeFantasma = "a";
let pasos = 0;
let puntuacion = 0;
let laberintos = 1;
let gameOver = false;
const contenedorPasos = document.getElementById("Pasos");
const contenedorPuntuacion = document.getElementById("Puntuacion");
const contenedorLaberintosPuntuacion = document.getElementById("LaberintosPuntuacion");


const secuencia = []; //estas van a ser las casillas donde se coloquen los fantasmas, para que queden siempre a 1 casilla de distrancia del jugador
    /*let num = 2; 
    let cuenta = 0;
    let cuenta2 = 0;

    while (num <= 256) {
      if (num>64)secuencia.push(num);  //esto es para que te spawnee un poco alejado
    
        if (cuenta < 7) {
            num += 2;
            cuenta++;
            cuenta2++;
        } else if (cuenta === 7) {
            num += 1;
            cuenta = 0; 
        } else if (cuenta2 === 14) {
          num += 1;
          cuenta2 = 0; 
        }
    }
*/
//no me voy a cimplicar la vida +17,+15 
for(j=1;j<100;j++) {
  let n1 =49;
  let n2 =63;
for(i=n1; i<=n2;i+=2){
  secuencia.push(i);
}
if(j%2){
  n1+=15;
  n2+=15;
}
else{
  n1+=17;
  n2+=17;
}
if(n2>256)break;
}

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
function crearLaberinto() {
  const laberintoDiv = document.getElementById("laberinto");
  for (let i = 1; i <= filas * columnas; i++) {
    const celda = document.createElement("div");
    celda.id = `celda${i}`;
    if (i === 2) {
      celda.innerHTML = '<img src="./personajes/eustaquio.jpeg" alt="jugador" class="asesino">';
    }
    laberintoDiv.appendChild(celda);
  }
}





// Crear el laberinto 1
function crearLaberinto1() {
  document.querySelectorAll(".celda").forEach(celda => {
    celda.classList.remove("celda");
  });
  document.querySelectorAll(".muro").forEach(muro => {
    muro.classList.remove("muro");
  });
  const celdasPermitidas = [2, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    34, 38, 42, 46, 50, 51, 52, 53, 54, 56, 57, 58, 59, 60, 62, 63,
    68, 70, 76, 82, 83, 84, 86, 88, 89, 90, 91, 92, 93, 94, 95,
    102, 104, 106, 110, 114, 115, 116, 117, 118, 120, 122, 123, 124, 126, 127,
    130, 132, 136, 140, 146, 148, 149, 150, 151, 152, 153, 154, 156, 157, 158, 159,
    162, 166, 170, 175, 178, 180, 181, 182, 184, 185, 186, 188, 189, 190, 191,
    194, 196, 200, 204, 210, 212, 214, 215, 216, 218, 219, 220, 221, 222, 223,
    226, 227, 228, 229, 230, 232, 233, 234, 239, 255];

  for (let i = 1; i <= filas * columnas; i++) {
    if (celdasPermitidas.includes(i)) {
      document.getElementById(`celda${i}`).classList.add("celda");
    }
    else {
      document.getElementById(`celda${i}`).classList.add("muro");
    }
  }
  jugador = "celda2";
  document.getElementById(jugador).innerHTML = '<img src="./personajes/eustaquio.jpeg" alt="jugador" class="asesino">';
  asesino = "celda153";
  powerup = "celda154";

  for (let i = 1; i <= cantidaddeFantasmas; i++) {
    do {
      posibleCasilladeFantasma = 'celda' + Math.floor(Math.random() * secuencia.length);
    } while (!document.getElementById(posibleCasilladeFantasma).classList.contains('celda'));
    fantasmas[`fantasma${i}`] = posibleCasilladeFantasma;
  }


}





function crearLaberinto2() {
  document.querySelectorAll(".celda").forEach(celda => {
    celda.classList.remove("celda");
  });
  document.querySelectorAll(".muro").forEach(muro => {
    muro.classList.remove("muro");
  });
  const celdasPermitidas = [
    2,
    18, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31,
    34, 35, 36, 40, 44, 47,
    50, 52, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
    66, 68, 70, 79,
    82, 83, 84, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
    98, 102, 104, 108, 110,
    114, 115, 116, 117, 118, 120, 122, 123, 124, 125, 126, 127,
    132, 134, 136, 138,
    146, 148, 150, 151, 152, 153, 154, 156, 157, 158, 159,
    162, 164, 166, 168, 170, 172, 174,
    178, 179, 180, 182, 184, 186, 188, 190,
    194, 198, 202, 203, 204, 206,
    210, 212, 213, 214, 216, 217, 218, 220, 222, 239,
    226, 227, 228, 232, 236, 238,
    255,
  ];

  for (let i = 1; i <= filas * columnas; i++) {
    if (celdasPermitidas.includes(i)) {
      document.getElementById(`celda${i}`).classList.add("celda");
    }
    else {
      document.getElementById(`celda${i}`).classList.add("muro");
    }
  }
  jugador = "celda2";
  document.getElementById(jugador).innerHTML = '<img src="./personajes/eustaquio.jpeg" alt="jugador" class="asesino">';
  asesino = "celda153";
  powerup = "celda232";

  for (let i = 1; i <= cantidaddeFantasmas; i++) {
    do {
      posibleCasilladeFantasma = 'celda' + Math.floor(Math.random() * secuencia.length);
    } while (!document.getElementById(posibleCasilladeFantasma).classList.contains('celda'));
    fantasmas[`fantasma${i}`] = posibleCasilladeFantasma;
  }

}





function actualizarPeligro() {//zona de peligro
  document.querySelectorAll(".celda.peligro").forEach(celda => {
    celda.classList.remove("peligro");
  });
  //aqui lo hago para que solo aparezca cuando este dentro del radio de vision del personaje
  let celdasAdyacentes = [];

  if (conexiones[asesino].arriba == conexiones[jugador].abajo ||
    conexiones[asesino].arriba == conexiones[jugador].derecha ||
    conexiones[asesino].arriba == conexiones[jugador].izquierda
  ) celdasAdyacentes.push(conexiones[asesino].arriba);

  if (conexiones[asesino].abajo == conexiones[jugador].arriba ||
    conexiones[asesino].abajo == conexiones[jugador].derecha ||
    conexiones[asesino].abajo == conexiones[jugador].izquierda
  ) celdasAdyacentes.push(conexiones[asesino].abajo);

  if (conexiones[asesino].izquierda == conexiones[jugador].derecha ||
    conexiones[asesino].izquierda == conexiones[jugador].arriba ||
    conexiones[asesino].izquierda == conexiones[jugador].abajo
  ) celdasAdyacentes.push(conexiones[asesino].izquierda);

  if (conexiones[asesino].derecha == conexiones[jugador].izquierda ||
    conexiones[asesino].derecha == conexiones[jugador].arriba ||
    conexiones[asesino].derecha == conexiones[jugador].abajo
  ) celdasAdyacentes.push(conexiones[asesino].derecha);

  for (let i = 1; i <= cantidaddeFantasmas; i++) {
    if (conexiones[fantasmas[`fantasma${i}`]].arriba == conexiones[jugador].abajo ||
      conexiones[fantasmas[`fantasma${i}`]].arriba == conexiones[jugador].derecha ||
      conexiones[fantasmas[`fantasma${i}`]].arriba == conexiones[jugador].izquierda
    ) celdasAdyacentes.push(conexiones[fantasmas[`fantasma${i}`]].arriba);

    if (conexiones[fantasmas[`fantasma${i}`]].abajo == conexiones[jugador].arriba ||
      conexiones[fantasmas[`fantasma${i}`]].abajo == conexiones[jugador].derecha ||
      conexiones[fantasmas[`fantasma${i}`]].abajo == conexiones[jugador].izquierda
    ) celdasAdyacentes.push(conexiones[fantasmas[`fantasma${i}`]].abajo);

    if (conexiones[fantasmas[`fantasma${i}`]].izquierda == conexiones[jugador].derecha ||
      conexiones[fantasmas[`fantasma${i}`]].izquierda == conexiones[jugador].arriba ||
      conexiones[fantasmas[`fantasma${i}`]].izquierda == conexiones[jugador].abajo
    ) celdasAdyacentes.push(conexiones[fantasmas[`fantasma${i}`]].izquierda);

    if (conexiones[fantasmas[`fantasma${i}`]].derecha == conexiones[jugador].izquierda ||
      conexiones[fantasmas[`fantasma${i}`]].derecha == conexiones[jugador].arriba ||
      conexiones[fantasmas[`fantasma${i}`]].derecha == conexiones[jugador].abajo
    ) celdasAdyacentes.push(conexiones[fantasmas[`fantasma${i}`]].derecha);
  }

  if (document.getElementById(asesino).classList.contains("vision") || document.getElementById(asesino).classList.contains("vision2")) {
    document.getElementById(asesino).classList.add("peligro");
    celdasAdyacentes.forEach(idCelda => {
      document.getElementById(idCelda).classList.add("peligro");
    });
  }

  for (let i = 1; i <= cantidaddeFantasmas; i++) {
    if (document.getElementById(fantasmas[`fantasma${i}`]).classList.contains("vision") || document.getElementById(fantasmas[`fantasma${i}`]).classList.contains("vision2")) {
      document.getElementById(fantasmas[`fantasma${i}`]).classList.add("peligro");
      celdasAdyacentes.forEach(idCelda => {
        document.getElementById(idCelda).classList.add("peligro");
      });
    }
  }


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
  document.querySelectorAll(".celda.powerup").forEach(celda => {
    celda.classList.remove("powerup");
    document.getElementById(powerup).innerHTML = '';
  });


  let celdasAdyacentes = [];//basicamente que las celdas contiguas al personaje sean su vision

  if (conexiones[jugador].arriba) celdasAdyacentes.push(conexiones[jugador].arriba);
  if (conexiones[jugador].abajo) celdasAdyacentes.push(conexiones[jugador].abajo);
  if (conexiones[jugador].izquierda) celdasAdyacentes.push(conexiones[jugador].izquierda);
  if (conexiones[jugador].derecha) celdasAdyacentes.push(conexiones[jugador].derecha);

  let celdasAdyacentes2 = [];

  // Para cada celda adyacente
  celdasAdyacentes.forEach(idCelda => {//se repite x cada una de las celdas anteriores

    if (document.getElementById(idCelda).classList.contains("celda")) {//solo pone vision a las celdas contiguas con vision, puse esto para q no funcione con paredes

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

  if (document.getElementById('celda255').classList.contains("vision") || document.getElementById('celda255').classList.contains("vision2")) {
    document.getElementById('celda255').classList.add("salida");
    document.getElementById('celda255').textContent = "🏆";
    document.querySelectorAll(".celda.salida").forEach(celda => {
      celda.classList.remove("vision");
      celda.classList.remove("vision2");
    });
  }

  if ((document.getElementById(powerup).classList.contains("vision") || document.getElementById(powerup).classList.contains("vision2")) && !recogidoPowerup && !document.getElementById(powerup).classList.contains("peligro")) {
    document.getElementById(powerup).classList.add("powerup");
    document.getElementById(powerup).innerHTML = '<img src="./personajes/monster.jpg" alt="monster" class="asesino">';
    document.querySelectorAll(".celda.powerup").forEach(celda => {
      celda.classList.remove("vision");
      celda.classList.remove("vision2");
    });
  }
}




// Movimiento del asesino
function moverFantasma() {
  for (let i = 1; i <= cantidaddeFantasmas; i++) {

    let posiblesDirecciones = [];//ponemos cuales son las casillas contiguas al asesino
    if (conexiones[fantasmas[`fantasma${i}`]].arriba) posiblesDirecciones.push("arriba");
    if (conexiones[fantasmas[`fantasma${i}`]].abajo) posiblesDirecciones.push("abajo");
    if (conexiones[fantasmas[`fantasma${i}`]].izquierda) posiblesDirecciones.push("izquierda");
    if (conexiones[fantasmas[`fantasma${i}`]].derecha) posiblesDirecciones.push("derecha");

    if (posiblesDirecciones.length === 0) return;

    let direccionAleatoria = posiblesDirecciones[Math.floor(Math.random() * posiblesDirecciones.length)];//establecemos la direccion, una de las 4 de arriba
    let fantasmaPosicionFutura = conexiones[fantasmas[`fantasma${i}`]][direccionAleatoria];//posible posicion futura
    let celdaDestinoFantasma = document.getElementById(fantasmaPosicionFutura);//la celda del asesino
    do {
      // Tenemos que verificar que la casilla no sea un muro, si lo es hacemos q se repita el proceso hasta que sea una celda
      if (!celdaDestinoFantasma.classList.contains("celda")) {
        direccionAleatoria = posiblesDirecciones[Math.floor(Math.random() * posiblesDirecciones.length)];
        fantasmaPosicionFutura = conexiones[fantasmas[`fantasma${i}`]][direccionAleatoria];
        celdaDestinoFantasma = document.getElementById(fantasmaPosicionFutura);
      }
    }
    while (!celdaDestinoFantasma.classList.contains("celda"))
    document.getElementById(fantasmas[`fantasma${i}`]).textContent = ""; // Borra imagen anterior
    fantasmas[`fantasma${i}`] = fantasmaPosicionFutura;

    // Solo mostrar al asesino si está en el campo de visión
    if (celdaDestinoFantasma.classList.contains("vision") || celdaDestinoFantasma.classList.contains("vision2")) {
      const imgFantasma = document.createElement("img");
      imgFantasma.src = "./personajes/chemari.jpeg"; // ← cambia esto por la ruta correcta
      imgFantasma.alt = "fantasma";
      imgFantasma.classList.add("asesino");
      document.getElementById(fantasmas[`fantasma${i}`]).appendChild(imgFantasma);
    }

    if (fantasmas[`fantasma${i}`] === jugador && !invulnerabilidad) {
      gameOver = true;
      document.getElementById('avisoCookies').style.display = 'flex';
      contenedorPasos.innerHTML = `${pasos}`;
      contenedorLaberintosPuntuacion.innerHTML = `${laberintos - 1}`;
      if (laberintos != 1) puntuacion = pasos * (laberintos - 1);
      else puntuacion = pasos * laberintos / 2;
      contenedorPuntuacion.innerHTML = `${puntuacion}`;
    }
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
  while (!celdaDestinoAsesino.classList.contains("celda"))
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

  if (asesino === jugador && !invulnerabilidad) {
    gameOver = true;
    document.getElementById('avisoCookies').style.display = 'flex';
    contenedorPasos.innerHTML = `${pasos}`;
    contenedorLaberintosPuntuacion.innerHTML = `${laberintos - 1}`;
    if (laberintos != 1) puntuacion = pasos * (laberintos - 1);
    else puntuacion = pasos * laberintos / 2;
    contenedorPuntuacion.innerHTML = `${puntuacion}`;
  }
}





function ocultarAviso() {
  const nombre = prompt("Ingresa tu nombre para esta partida:");
  if (!nombre) {
    localStorage.setItem("nombreJugador", "Anónimo");
  } else {
    localStorage.setItem("nombreJugador", nombre);
  }

  document.getElementById('avisoCookies').style.display = 'none';
  guardarIntento();
  window.location.href = 'index.html';
}





// Evento de movimiento del jugador
let juegoActivo = true;

document.addEventListener("keydown", function(event) {
  if (juegoActivo && ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
    
    event.preventDefault(); // Solo bloquea cuando el juego está activo
  }

if (gameOver === false) {
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
    document.getElementById(jugador).innerHTML = '<img src="./personajes/eustaquio.jpeg" alt="jugador" class="asesino">';
    pasos = pasos + 1;
    vision();
    moverAsesino();
    moverFantasma();
    actualizarPeligro();
    if (invulnerabilidad) {
      tiempodeInvulnerabilidad = tiempodeInvulnerabilidad - 1;
      if (tiempodeInvulnerabilidad == 0) invulnerabilidad = false;
    }
    if ((jugador == powerup) && !recogidoPowerup) {
      document.getElementById(powerup).innerHTML = '<img src="./personajes/eustaquio.jpeg" alt="jugador" class="asesino">';
      tiempodeInvulnerabilidad = 10;
      document.querySelectorAll(".powerup").forEach(powerup => {
        powerup.classList.add("vision");
        powerup.classList.remove("powerup");
      });
      recogidoPowerup = true;
      invulnerabilidad = true;
    }

    if (jugador == "celda255") {
      cantidaddeFantasmas = laberintos;
      alert(`laberinto ${laberintos} completo`);

      laberintos = laberintos + 1;

      const resultado = Math.floor(Math.random() * 2) + 1;

      if (resultado === 1) {

        crearLaberinto1();
      } else if (resultado === 2) {
        crearLaberinto2();
      } else {
        console.log("Error al elegir que laberinto crear");
      }
      vision();
      actualizarPeligro();
    }
  }
});





document.getElementById("puntuacionesr").addEventListener("click", () => {
  const historial = JSON.parse(localStorage.getItem("tablaMejores")) || [];

  if (historial.length === 0) {
    alert("No hay partidas guardadas aún.");
    return;
  }

  // Ordenar antes de mostrar
  const ordenado = historial.sort((a, b) => b.puntuacion - a.puntuacion).slice(0, 10);
  localStorage.setItem("tablaPuntuacionesTemp", JSON.stringify(ordenado));
  window.location.href = "TablaPuntuaciones.html";
});





function guardarIntento() {
  const nombre = localStorage.getItem("nombreJugador") || "Anónimo";
  const registro = { nombre, puntuacion };

  let historial = JSON.parse(localStorage.getItem("tablaMejores")) || [];

  // Buscar si ya existe este jugador
  const indice = historial.findIndex(r => r.nombre === nombre);

  if (indice === -1) {
    // No existe -> Añadimos nuevo
    historial.push(registro);
  } else {
    // Ya existe -> Actualizar si es mejor
    if (registro.puntuacion > historial[indice].puntuacion) {
      historial[indice].puntuacion = registro.puntuacion;
    }
  }

  // Ordenar por pasos (de mayor a menor)
  historial.sort((a, b) => b.puntuacion - a.puntuacion);

  // Mantener solo las 10 mejores partidas
  if (historial.length > 10) {
    historial = historial.slice(0, 10);
  }

  localStorage.setItem("tablaMejores", JSON.stringify(historial));
}






// Mostrar el mejor jugador al cargar la página
function mostrarMejorJugador() {
  // Obtener el historial de mejores jugadores de localStorage 
  const historial = JSON.parse(localStorage.getItem("tablaMejores")) || [];

  if (historial.length === 0) return;

  // Ordenar por pasos y obtener al mejor
  const mejor = historial.reduce((prev, current) =>
    (current.puntuacion > prev.puntuacion) ? current : prev
  );

  // Mostrar en pantalla
  document.getElementById("nombrejugador").textContent = mejor.nombre;
  document.getElementById("puntuacionjugador").textContent = mejor.puntuacion;
  document.getElementById("mejorjugador").style.display = "block";
}





// Inicializar el juego
generarLaberinto();

crearLaberinto();

const resultado = Math.floor(Math.random() * 2) + 1;

if (resultado === 1) {

  crearLaberinto1();

} else if (resultado === 2) {
  crearLaberinto2();
} else {
  console.log("Error al elegir que laberinto crear");
}


vision();
actualizarPeligro();
mostrarMejorJugador();