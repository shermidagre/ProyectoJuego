
function generarmensaje() {

    const quien = "Regenerado";


    return `${quien}`;

}

document.getElementById('BotonReset').addEventListener('click', function() {

    const generarreset = generarmensaje();

    document.getElementById('container2').innerText = generarreset;
    

    
});

function c(Contador) {
    let total = 0;
  
  
    return { total };
  }