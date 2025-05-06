document.getElementById("conversion").addEventListener("click", function () {


      let letraNome = document.getElementById("nome").value.charAt(0);
      let letraApelido = document.getElementById("apellido").value.charAt(0);
      letraNome=letraNome.toLowerCase()
      letraApelido=letraApelido.toLowerCase()

      let nome = "pata";
  
      if (letraNome=='a')nome="Pantera";
      if (letraNome=='b')nome="Muerte";
      if (letraNome=='c')nome="Barriga";
      if (letraNome=='d')nome="Tormenta";
      if (letraNome=='e')nome="Máscara";
      if (letraNome=='f')nome="Nalga";
      if (letraNome=='g')nome="Gacela";
      if (letraNome=='h')nome="Tempestad";
      if (letraNome=='i')nome="Sombra";
      if (letraNome=='j')nome="Barba";
      if (letraNome=='k')nome="Gacela";
      if (letraNome=='l')nome="Bestia";
      if (letraNome=='m')nome="Venganza";
      if (letraNome=='n')nome="Capibara";
      if (letraNome=='o')nome="Florecilla";
      if (letraNome=='p')nome="Águila";
      if (letraNome=='q')nome="Juventud";
      if (letraNome=='r')nome="Estrella";
      if (letraNome=='s')nome="Serpiente";
      if (letraNome=='t')nome="Fuerza";
      if (letraNome=='u')nome="Masacre";
      if (letraNome=='v')nome="Niebla";
      if (letraNome=='w')nome="Masa";
      if (letraNome=='x')nome="Greña";
      if (letraNome=='y')nome="Pesadilla";
      if (letraNome=='z')nome="Quimera";

      let apellido = "pata";

      if (letraApelido=='a')apellido="Desnuda";
      if (letraApelido=='b')apellido="Dorada";
      if (letraApelido=='c')apellido="Sanguinaria";
      if (letraApelido=='d')apellido="Letal";
      if (letraApelido=='e')apellido="Sexy";
      if (letraApelido=='f')apellido="Demoníaca";
      if (letraApelido=='g')apellido="Flácida";
      if (letraApelido=='h')apellido="Implacable";
      if (letraApelido=='i')apellido="Destructora";
      if (letraApelido=='j')apellido="Veloz";
      if (letraApelido=='k')apellido="Plateada";
      if (letraApelido=='l')apellido="Suicida";
      if (letraApelido=='m')apellido="Bailonga";
      if (letraApelido=='n')apellido="Mugrienta";
      if (letraApelido=='o')apellido="Amorosa";
      if (letraApelido=='p')apellido="Infernal";
      if (letraApelido=='q')apellido="del Espacio";
      if (letraApelido=='r')apellido="Salvaje";
      if (letraApelido=='s')apellido="Fornida";
      if (letraApelido=='t')apellido="Colosal";
      if (letraApelido=='u')apellido="Feroz";
      if (letraApelido=='v')apellido="del Abismo";
      if (letraApelido=='w')apellido="Rocosa";
      if (letraApelido=='x')apellido="Fiestera";
      if (letraApelido=='y')apellido="Fantasmal";
      if (letraApelido=='z')apellido="Voladora";
    
      const contenedor = document.getElementById("resultado");

      contenedor.innerHTML = "";

      
      contenedor.innerHTML = nome+" "+ apellido;
    
    });
    