const filas = 16;
      const columnas = 16;
      const conexiones = {};
      // Meta movida al centro de la matriz para desafío
      const meta = "celda240";
      let jugador = "celda2";
      let asesino = "celda153";
      let pasos = 0;

      function generarConexiones() {
        for (let fila = 0; fila < filas; fila++) {
          for (let col = 0; col < columnas; col++) {
            const id = `celda${fila * columnas + col + 1}`;
            conexiones[id] = {
              arriba: fila > 0 ? `celda${(fila - 1) * columnas + col + 1}` : null,
              abajo: fila < filas - 1 ? `celda${(fila + 1) * columnas + col + 1}` : null,
              izquierda: col > 0 ? `celda${fila * columnas + col}` : null,
              derecha: col < columnas - 1 ? `celda${fila * columnas + col + 2}` : null,
            };
          }
        }
      }

      const celdasPermitidas = [
        2,3,4,5,6,7,8,
        10,18,19,20,21,22,23,24,25,26,
        27,28,29,30,31,34,38,42,
        46,50,51,52,53,54,56,57,
        58,59,60,62,63,68,70,76,
        82,83,84,86,88,89,90,91,
        92,93,94,95,102,104,106,110,
        114,115,116,117,118,120,122,
        123,124,126,127,130,132,136,140,
        146,148,149,150,151,152,153,154,
        156,157,158,159,162,166,170,
        175,178,180,181,182,184,185,
        186,188,189,190,191,194,196,
        200,204,210,212,214,215,216,218,
        219,220,221,222,223,226,227,
        228,229,230,232,233,234,239,240
      ];

      function crearLaberinto() {
        const laberintoDiv = document.getElementById("laberinto");
        laberintoDiv.innerHTML = "";
        for(let i=1; i<= filas*columnas; i++){
          const celda = document.createElement("div");
          celda.id = `celda${i}`;
          if (celdasPermitidas.includes(i)){
            celda.classList.add("celda");
          } else {
            celda.classList.add("muro");
          }
          laberintoDiv.appendChild(celda);
        }
      }

      // Vision limitada, sólo celda jugador y vecinos; meta visible si vecino o jugador
      function actualizarVision() {
        document.querySelectorAll(".celda.vision, .celda.vision2, .celda.salida").forEach(c => {
          c.classList.remove("vision", "vision2", "salida");
          if(c.id === meta) c.textContent = "";
        });
        const adyacentes = [];
        if(conexiones[jugador].arriba) adyacentes.push(conexiones[jugador].arriba);
        if(conexiones[jugador].abajo) adyacentes.push(conexiones[jugador].abajo);
        if(conexiones[jugador].izquierda) adyacentes.push(conexiones[jugador].izquierda);
        if(conexiones[jugador].derecha) adyacentes.push(conexiones[jugador].derecha);

        const adyacentes2 = [];
        adyacentes.forEach(idCelda => {
          const celda = document.getElementById(idCelda);
          if(celda && celda.classList.contains("celda")){
            if(conexiones[idCelda].arriba) adyacentes2.push(conexiones[idCelda].arriba);
            if(conexiones[idCelda].abajo) adyacentes2.push(conexiones[idCelda].abajo);
            if(conexiones[idCelda].izquierda) adyacentes2.push(conexiones[idCelda].izquierda);
            if(conexiones[idCelda].derecha) adyacentes2.push(conexiones[idCelda].derecha);
          }
        });

        document.getElementById(jugador).classList.add("vision");
        adyacentes.forEach(id => {
          const c = document.getElementById(id);
          if(c) c.classList.add("vision");
        });
        adyacentes2.forEach(id => {
          const c = document.getElementById(id);
          if(c) c.classList.add("vision2");
        });

        if (adyacentes.includes(meta) || jugador === meta) {
          const salidaCelda = document.getElementById(meta);
          salidaCelda.classList.add("salida");
          salidaCelda.textContent = "🏆";
          salidaCelda.classList.remove("vision", "vision2");
        }
      }

      // Zona peligro: asesino sólo visible si adyacente a jugador, pinta zona alrededor rojo
      function actualizarPeligro() {
        document.querySelectorAll(".celda.peligro").forEach(c => {
          c.classList.remove("peligro");
        });
        const asesinoCelda = document.getElementById(asesino);
        if(!asesinoCelda) return;

        const adj = [
          conexiones[asesino].arriba,
          conexiones[asesino].abajo,
          conexiones[asesino].izquierda,
          conexiones[asesino].derecha
        ].filter(Boolean);

        if (adj.includes(jugador) || asesino === jugador) {
          asesinoCelda.classList.add("peligro");
          adj.forEach(id => {
            const cel = document.getElementById(id);
            if(cel) cel.classList.add("peligro");
          });
        } else {
          asesinoCelda.textContent = "";
        }
      }

      // Movimiento aleatorio del asesino
      function moverAsesino() {
        const direcciones = [];
        if(conexiones[asesino].arriba) direcciones.push("arriba");
        if(conexiones[asesino].abajo) direcciones.push("abajo");
        if(conexiones[asesino].izquierda) direcciones.push("izquierda");
        if(conexiones[asesino].derecha) direcciones.push("derecha");

        if(direcciones.length === 0) return;

        let direccion;
        let nuevaPos;
        let intentos = 0;
        do {
          direccion = direcciones[Math.floor(Math.random() * direcciones.length)];
          nuevaPos = conexiones[asesino][direccion];
          intentos++;
        } while ((!nuevaPos || !celdasPermitidas.includes(Number(nuevaPos.slice(5)))) && intentos < 25);

        const celdaAnterior = document.getElementById(asesino);
        if(celdaAnterior) celdaAnterior.textContent = "";

        asesino = nuevaPos;
        const celdaNueva = document.getElementById(asesino);
        if(!celdaNueva) return;

        const adjJugador = [
          conexiones[jugador].arriba,
          conexiones[jugador].abajo,
          conexiones[jugador].izquierda,
          conexiones[jugador].derecha,
          jugador,
        ];

        if(adjJugador.includes(asesino)) {
          celdaNueva.textContent = "👹";
        }
        if(asesino === jugador) {
          mostrarAviso("¡Has sido atrapado! 😵‍💫");
        }
      }

      function mostrarAviso(mensaje) {
        const aviso = document.getElementById('aviso');
        const mensajeFinal = document.getElementById('mensajeFinal');
        mensajeFinal.textContent = mensaje;
        aviso.classList.add('visible');
        document.getElementById('contadorPasos').textContent = pasos;
      }

      function ocultarAviso() {
        const aviso = document.getElementById('aviso');
        aviso.classList.remove('visible');
      }

      function moverJugador(direccion) {
        const nuevaCeldaID = conexiones[jugador][direccion];
        if(!nuevaCeldaID) return;
        const celdaDestino = document.getElementById(nuevaCeldaID);
        if(!celdaDestino || celdaDestino.classList.contains("muro")) return;

        const celdaActual = document.getElementById(jugador);
        if(celdaActual) celdaActual.textContent = "";

        jugador = nuevaCeldaID;
        pasos++;

        const celdaJugador = document.getElementById(jugador);
        if(celdaJugador) celdaJugador.textContent = "😃";

        actualizarVision();
        moverAsesino();
        actualizarPeligro();

        if(jugador === meta) {
          mostrarAviso("¡Felicidades, has escapado del laberinto! 🏆");
        }
      }

      function iniciarJuego() {
        crearLaberinto();
        const celdaJugador = document.getElementById(jugador);
        if(celdaJugador) celdaJugador.textContent = "😃";
        const celdaAsesino = document.getElementById(asesino);
        if(celdaAsesino) celdaAsesino.textContent = "";

        actualizarVision();
        actualizarPeligro();
      }

      document.addEventListener('keydown', (e) => {
        switch (e.key) {
          case "ArrowUp": moverJugador("arriba"); break;
          case "ArrowDown": moverJugador("abajo"); break;
          case "ArrowLeft": moverJugador("izquierda"); break;
          case "ArrowRight": moverJugador("derecha"); break;
        }
      });

      generarConexiones();
      iniciarJuego();
