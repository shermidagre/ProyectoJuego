document.getElementById("boton-lanzar").addEventListener("click", manejarLanzamiento);

function manejarLanzamiento() {
  const cantidadDados = parseInt(document.getElementById("cantidad-dados").value);
  const seccionResultado = document.getElementById("resultado");

  // Limpiar resultados anteriores
  seccionResultado.innerHTML = "";

  // Validación de entrada
  if (!esEntradaValida(cantidadDados)) {
    mostrarError(seccionResultado, "Error: Debes seleccionar entre 1 y 6 dados.");
    return;
  }

  // Generar dados y calcular total
  const { imagenesDados, total } = generarDados(cantidadDados);

  // Mostrar resultados
  mostrarResultados(seccionResultado, imagenesDados, total);
}

function esEntradaValida(cantidadDados) {
  return cantidadDados >= 1 && cantidadDados <= 6;
}

function mostrarError(seccionResultado, mensaje) {
  const elementoError = document.createElement("p");
  elementoError.textContent = mensaje;
  elementoError.style.color = "red";
  seccionResultado.appendChild(elementoError);
}

function generarDados(cantidadDados) {
  let total = 0;
  const imagenesDados = [];

  for (let i = 0; i < cantidadDados; i++) {
    const valorDado = Math.floor(Math.random() * 6) + 1;
    total += valorDado;

    const imagen = document.createElement("img");
    imagen.src = `img/dado${valorDado}.png`;
    imagen.alt = `Dado ${valorDado}`;
    imagen.classList.add("imagen-dado");
    imagenesDados.push(imagen);
  }

  return { imagenesDados, total };
}

function mostrarResultados(seccionResultado, imagenesDados, total) {
  const textoTotal = document.createElement("p");
  textoTotal.textContent = `Total: ${total}`;
  textoTotal.classList.add("texto-total");
  seccionResultado.appendChild(textoTotal);

  imagenesDados.forEach((imagen) => seccionResultado.appendChild(imagen));
}