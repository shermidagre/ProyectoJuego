document.addEventListener('DOMContentLoaded', () => {
  // Interacción en la sección de Red Interna
  document.querySelectorAll('.device').forEach(device => {
    device.addEventListener('click', () => {
      document.getElementById('infoPanel').textContent = device.dataset.info;

      // Marcar tarea Red Interna como completada
      if (!tasks.redInterna) {
        tasks.redInterna = true;
        updateProgress('redInterna'); // Actualizar barra de progreso
        checkCompletion(); // Verificar si todas las tareas están completas
      }
    });
  });

  // Simulación de DNS
  const dnsLookup = {
    "google.com": "172.217.16.68",
    "facebook.com": "157.240.20.15",
    "example.com": "93.184.216.34",
    "localhost": "127.0.0.1"
  };

  document.getElementById('dnsButton')?.addEventListener('click', () => {
    const url = document.getElementById('urlInput').value.trim().toLowerCase(); // Limpiar y normalizar la entrada
    const result = document.getElementById('result');

    if (dnsLookup[url]) {
      result.textContent = `IP: ${dnsLookup[url]}`;
      result.style.color = "#00ff00";

      // Caso especial para localhost/127.0.0.1
      if (url === "localhost" || url === "127.0.0.1") {
        result.textContent += " (Loopback: transmisión a sí mismo)";
      }

      // Marcar tarea DNS como completada
      if (!tasks.dns) {
        tasks.dns = true;
        updateProgress('dns'); // Actualizar barra de progreso
        checkCompletion(); // Verificar si todas las tareas están completas
      }
    } else {
      result.textContent = "Dirección no encontrada.";
      result.style.color = "#ff0000";
    }
  });

  // Botón de información DNS
  document.getElementById('infoButton')?.addEventListener('click', () => {
    const infoBox = document.getElementById('infoBox');
    if (infoBox.style.display === 'none') {
      infoBox.style.display = 'block';
    } else {
      infoBox.style.display = 'none';
    }
  });

  // Simulación del viaje de los datos
  let step = 0;
  const steps = [
    "Consulta DNS...",
    "Envía solicitud HTTP...",
    "Servidor procesa la solicitud...",
    "Recibes la página web."
  ];

  document.getElementById('nextButton')?.addEventListener('click', () => {
    if (step < steps.length) {
      document.getElementById('simulationText').textContent = steps[step];
      step++;
    }

    // Marcar tarea Viaje de Datos como completada cuando termine
    if (step === steps.length && !tasks.viajeDatos) {
      tasks.viajeDatos = true;
      updateProgress('viajeDatos'); // Actualizar barra de progreso
      checkCompletion(); // Verificar si todas las tareas están completas
    }
  });

  // Drag-and-drop en el juego de roles
  const packet = document.getElementById('packet');
  const server = document.getElementById('server');

  packet?.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', 'packet');
  });

  server?.addEventListener('drop', (e) => {
    e.preventDefault();
    alert("¡Paquete entregado al servidor!");

    // Marcar tarea Juego de Paquetes como completada
    if (!tasks.juegoPaquetes) {
      tasks.juegoPaquetes = true;
      updateProgress('juegoPaquetes'); // Actualizar barra de progreso
      checkCompletion(); // Verificar si todas las tareas están completas
    }
  });

  server?.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  /* 
    Barra de progreso 
  */
  let progress = 0;

  function updateProgress(taskName) {
    // Incrementar progreso según la tarea completada
    const taskProgress = {
      redInterna: 25,
      dns: 25,
      viajeDatos: 25,
      juegoPaquetes: 25
    };

    progress += taskProgress[taskName];
    document.getElementById('progressFill').style.width = `${progress}%`;
    document.getElementById('progressMessage').textContent = `${Math.round(progress)}% Completado`;

    // Marcar ícono como completado
    const icon = document.getElementById(`icon-${taskName}`);
    if (icon) icon.classList.add('completed');
  }

  // Lista de tareas a completar
  const tasks = {
    redInterna: false,
    dns: false,
    viajeDatos: false,
    juegoPaquetes: false
  };

  // Función para verificar si todas las tareas están completas
  function checkCompletion() {
    const allCompleted = Object.values(tasks).every(task => task === true);
    if (allCompleted) {
      showMessage("¡Felicidades! Has completado todos los objetivos.");
      showConclusion(); // Mostrar la sección de conclusión
    }
  }

  // Mostrar mensaje de éxito
  function showMessage(message) {
    const successMessage = document.createElement('div');
    successMessage.textContent = message;
    successMessage.style.position = 'fixed';
    successMessage.style.bottom = '20px';
    successMessage.style.left = '50%';
    successMessage.style.transform = 'translateX(-50%)';
    successMessage.style.padding = '10px 20px';
    successMessage.style.backgroundColor = '#00ff00';
    successMessage.style.color = '#0a0a0a';
    successMessage.style.borderRadius = '5px';
    successMessage.style.fontFamily = "'Press Start 2P', monospace";
    successMessage.style.fontSize = '16px';
    successMessage.style.boxShadow = '0 0 10px #00ff00';
    successMessage.style.zIndex = '1000';
    successMessage.style.margin = '100px';
    document.body.appendChild(successMessage);

    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => {
      successMessage.remove();
    }, 5000);
  }

  // Mostrar la sección de conclusión
  function showConclusion() {
    const conclusionSection = document.getElementById('conclusion');
    conclusionSection.style.display = 'block'; // Mostrar la sección
    conclusionSection.scrollIntoView({ behavior: 'smooth' }); // Desplazarse suavemente hacia ella
  }
});