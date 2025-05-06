document.addEventListener("DOMContentLoaded", () => {
    const tablaBody = document.getElementById("tabla-body");
    const historial = JSON.parse(localStorage.getItem("tablaPuntuacionesTemp")) || [];
  
    if (historial.length === 0) {
      tablaBody.innerHTML = "<tr><td colspan='2'>No hay puntuaciones aún.</td></tr>";
    } else {
      // Ordenar de mayor a menor
      const historialOrdenado = historial.sort((a, b) => b.pasos - a.pasos);
  
      historialOrdenado.forEach((registro) => {
        const fila = document.createElement("tr");
  


        
        let mensaje;
        let color;
  
        if (registro.pasos > 200) {
            mensaje = " El colega es un tryhard de cuidao ";
            color = "purple";
        } 
        else if (registro.pasos > 100) {
          mensaje = "  MAS DE 100 PASOS MUY BIEN ";
          color = "blue";
        } 
         else if (registro.pasos > 50) {
          mensaje = "  MAS DE 50 PASOS POCO MAS CARDIO ";
          color = "green";
        } else if (registro.pasos > 30) {
          mensaje = " Duras menos que paquirrin";
          color = "orange";
        } else {
          mensaje = " Salida exprés...";
          color = "red";
        }
  
        fila.innerHTML = `
          <td>${registro.nombre}</td>
          <td style="color:${color}">${registro.pasos} — <small>${mensaje} <</small></td>
        `;
        tablaBody.appendChild(fila);
      });
    }
  
    localStorage.removeItem("tablaPuntuacionesTemp"); // Limpiar después de mostrar
  
    document.getElementById("volver").addEventListener("click", () => {
      window.location.href = "index.html"; // Ajusta esta ruta si es necesario
    });

  });
