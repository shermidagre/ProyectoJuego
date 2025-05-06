let aciertos=0;
let fallos=0;
document.getElementById("reiniciar").addEventListener("click", function () {
    const vaso1 = document.getElementById("vaso1");
    const vaso2 = document.getElementById("vaso2");
    const vaso3 = document.getElementById("vaso3");
    const contenedor = document.getElementById("resultado");


        let img = document.createElement("img");
      
        img.src = `../Examen_sandark/vaso.jpg`;
       
        img.alt = `vaso`;

        vaso1.innerHTML =  '<img src="../Examen_sandark/vaso.jpg" alt="vaso">' ;
        vaso2.innerHTML =  '<img src="../Examen_sandark/vaso.jpg" alt="vaso">' ;
        vaso3.innerHTML =  '<img src="../Examen_sandark/vaso.jpg" alt="vaso">' ;
        contenedor.innerHTML = "";
    });
    
    document.getElementById("vaso1").addEventListener("click", function () {
        const contenedorAciertos = document.getElementById("aciertos");
        const contenedorFallos = document.getElementById("fallos");

        const contenedor = document.getElementById("resultado");
        let valor = Math.floor(Math.random() * 3) + 1;
        if (valor == 1){
            aciertos=aciertos+1;
            vaso1.innerHTML =  '<img src="../Examen_sandark/moneda.png" alt="moneda">' ;
            contenedor.innerHTML = "acertaste";
            contenedorAciertos.innerHTML=`${aciertos}`;

        }
        else{
            fallos = fallos+1;
            vaso1.innerHTML = "";
            contenedor.innerHTML = "fallaste";
            contenedorFallos.innerHTML = `${fallos}`;
        } 
    })

    document.getElementById("vaso2").addEventListener("click", function () {
        const contenedorAciertos = document.getElementById("aciertos");
        const contenedorFallos = document.getElementById("fallos");

        const contenedor = document.getElementById("resultado");
        let valor = Math.floor(Math.random() * 3) + 1;
        if (valor == 2){
            aciertos=aciertos+1;
            vaso2.innerHTML =  '<img src="/Exame JavaScript - HTML - CSS/moneda.png" alt="moneda">' ;
            contenedor.innerHTML = "acertaste";
            contenedorAciertos.innerHTML=`${aciertos}`;

        }
        else{
            fallos = fallos+1;
            vaso2.innerHTML = "";
            contenedor.innerHTML = "fallaste";
            contenedorFallos.innerHTML = `${fallos}`;
        } 
    })

    document.getElementById("vaso3").addEventListener("click", function () {
        const contenedorAciertos = document.getElementById("aciertos");
        const contenedorFallos = document.getElementById("fallos");

        const contenedor = document.getElementById("resultado");
        let valor = Math.floor(Math.random() * 3) + 1;
        if (valor == 3){
            aciertos=aciertos+1;
            vaso3.innerHTML =  '<img src="/Exame JavaScript - HTML - CSS/moneda.png" alt="moneda">' ;
            contenedor.innerHTML = "acertaste";
            contenedorAciertos.innerHTML=`${aciertos}`;

        }
        else{
            fallos = fallos+1;
            vaso3.innerHTML = "";
            contenedor.innerHTML = "fallaste";
            contenedorFallos.innerHTML = `${fallos}`;
        } 
    })