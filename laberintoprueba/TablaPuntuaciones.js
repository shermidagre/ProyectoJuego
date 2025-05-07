document.addEventListener("DOMContentLoaded", () => {
    const tablaBody = document.getElementById("tabla-body");
    const historial = JSON.parse(localStorage.getItem("tablaPuntuacionesTemp")) || [];
  
    if (historial.length === 0) {
      tablaBody.innerHTML = "<tr><td colspan='2'>No hay puntuaciones aún.</td></tr>";
    } else {
      // Ordenar de mayor a menor
      const historialOrdenado = historial.sort((a, b) => b.puntuacion - a.puntuacion);
  
      historialOrdenado.forEach((registro,index) => {
        const fila = document.createElement("tr");
  

        // Primero se declara la medalla en un String vacio y luego ya se asigna dependiendo de la posicion

        let medalla = "";
        if (index === 0) {
          medalla = "🥇";
        } else if (index === 1) {
          medalla = "🥈";
        } else if (index === 2) {
          medalla = "🥉";
        }

        
        let mensaje;
        let color;
  
        if (registro.puntuacion > 200) {
            mensaje = " El colega es un tryhard de cuidao ";
            color = "purple";
        } 
        else if (registro.puntuacion > 100) {
          mensaje = "  Disco nunu ";
          color = "blue";
        } 
         else if (registro.puntuacion > 50) {
          mensaje = "  MAS DE 50 PASOS POCO MAS CARDIO ";
          color = "green";
        } else if (registro.puntuacion > 30) {
          mensaje = " Duras menos que paquirrin";
          color = "orange";
        } else {
          mensaje = " Salida exprés...";
          color = "red";
        }
  
        //  añadido medalla a los tres primeros puestos, simplemente la hemos concatenado con el color, etc

        fila.innerHTML = `  
        <td>${registro.nombre}</td>
        <td style="color:${color}">${medalla} ${registro.puntuacion} — <small>${mensaje}</small></td>
      `;
      tablaBody.appendChild(fila);
      });
    }
  
    localStorage.removeItem("tablaPuntuacionesTemp"); // Limpiar después de mostrar
  
    document.getElementById("volver").addEventListener("click", () => {
      window.location.href = "index.html"; 
    });

  });
