
const imageButton = document.getElementById('sonido');

const audio = new Audio('sonido.mp3');

imageButton.addEventListener('click', sonido) 


/* reduce el CD del sonido a 0 */
function sonido(){
audio.currentTime= 0;
audio.play()
}



