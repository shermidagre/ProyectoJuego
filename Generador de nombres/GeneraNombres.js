 
const nombres = [
    'Anaconda', 'Bumerán', 'Cocodrilo', 'Delfín', 'Elefante', 'Fénix', 'Gorila', 'Hipopótamo', 'Iguana', 'Jirafa', 
    'Koala', 'León', 'Murciélago', 'Narval', 'Orca', 'Pulpo', 'Quetzal', 'Rinoceronte', 'Serpiente', 'Tigre', 
    'Urraca', 'Víbora', 'Wombat', 'Xilófono', 'Yeti', 'Zorro'
];

const apellidos = [
    'Águila', 'Búho', 'Camaleón', 'Dragón', 'Espejo', 'Fuego', 'Gato', 'Hamaca', 'Isla', 'Jaguar', 
    'Kiwi', 'Lobo', 'Mono', 'Nube', 'Oso', 'Pingüino', 'Quokka', 'Ratón', 'Sapo', 'Tiburón', 
    'Umbrella', 'Vela', 'Waffle', 'Xenón', 'Yunque', 'Zafiro'
];

function cogerprimeraletra (palabra){ // Esta funcion sirve para coger la primera letra de una palabra

    return palabra.charAt(0).toUpperCase(); // Convertimos a mayúscula para evitar problemas de comparación

}

// Función para generar un nombre aleatorio que coincida con la primera letra
function generarNombreAleatorio(lista, letra) {
    const nombresFiltrados = lista.filter(nombre => cogerprimeraletra(nombre) === letra);
    if (nombresFiltrados.length === 0) { // Lo qe comprueba es que mete en la constante nombres filtrados la primera letra de todos los nombres en la arary y si no encuentra la letra a comparar manda exception
        return "Sin coincidencias"; 
    }
    const indice = Math.floor(Math.random() * nombresFiltrados.length);
    return nombresFiltrados[indice];
}

// Variables para almacenar el nombre y apellido ingresados
let nombreUsuario = "";
let apellidoUsuario = "";

function generarNombreCompleto() {

    nombreUsuario = prompt("Introduce tu nombre:");
    apellidoUsuario = prompt("Introduce tu apellido:");

    const primeraLetraNombre = cogerprimeraletra(nombreUsuario);
    const primeraLetraApellido = cogerprimeraletra(apellidoUsuario);

    const nombreAleatorio = generarNombreAleatorio(nombres, primeraLetraNombre);
    const apellidoAleatorio = generarNombreAleatorio(apellidos, primeraLetraApellido);

    const resultadoFinal = `${nombreAleatorio} ${apellidoAleatorio}`;
    mostrarResultado(resultadoFinal);}



// libreria anime.js

function mostrarResultado(resultado) {
    const resultadoElement = document.getElementById('resultado');

    // Animación de entrada del botón
    anime({
        targets: '#BotonGenerador',
        scale: [1, 1.2, 1],
        rotate: [0, 10, -10, 0],
        duration: 500,
        easing: 'easeInOutQuad'
    });

    // Animación del texto generado
    resultadoElement.textContent = '';
    anime({
        targets: resultadoElement,
        opacity: [0, 1],
        scale: [0.8, 2],
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 500,
        
        
        complete: () => {
            let i = 0;
            const interval = setInterval(() => {
                if (i <= resultado.length) {
                    resultadoElement.textContent = resultado.substring(0, i) + '_';
                    i++;
                } else {
                    clearInterval(interval);
                    resultadoElement.textContent = resultado; // Eliminar el cursor al final
                }
            }, 50);
        }
    });
}

document.getElementById('BotonGenerador').addEventListener('click', generarNombreCompleto);