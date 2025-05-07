document.addEventListener("DOMContentLoaded", () => {
    const tablaBody = document.getElementById("tabla-body");
    const historial = JSON.parse(localStorage.getItem("tablaPuntuacionesTemp")) || [];
  
    if (historial.length === 0) {
      tablaBody.innerHTML = "<tr><td colspan='2'>No hay puntuaciones aún.</td></tr>";
    } else {
      // Ordenar de mayor a menor
      const historialOrdenado = historial.sort((a, b) => b.puntuacion - a.puntuacion);
  
      historialOrdenado.forEach((registro) => {
        const fila = document.createElement("tr");
  


        
        let mensaje;
        let color;
  
        if (registro.puntuacion > 200) {
            mensaje = " El colega es un tryhard de cuidao ";
            color = "purple";
        } 
        else if (registro.puntuacion > 100) {
          mensaje = "  Incerible, más de 100 ";
          color = "blue";
        } 
         else if (registro.puntuacion > 50) {
          mensaje = "  No esta mal, estas mejorando ";
          color = "green";
        } else if (registro.puntuacion > 30) {
          mensaje = " Duras menos que paquirrin";
          color = "orange";
        } else {
          mensaje = " Salida exprés...";
          color = "red";
        }
  
        fila.innerHTML = `
          <td>${registro.nombre}</td>
          <td style="color:${color}">${registro.puntuacion} — <small>${mensaje} <</small></td>
        `;
        tablaBody.appendChild(fila);
      });
    }
  
    localStorage.removeItem("tablaPuntuacionesTemp"); // Limpiar después de mostrar
  
    document.getElementById("volver").addEventListener("click", () => {
      window.location.href = "index.html"; // Ajusta esta ruta si es necesario
    });

  });
