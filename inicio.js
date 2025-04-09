try {
    // Recuperar usuarios del localStorage
    console.log('Clave "usuarios" en localStorage:', localStorage.getItem('usuarios'));
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    console.log('Usuarios cargados:', usuarios);

    // Función para validar el nombre de usuario
    function validarNombreUsuario(nombreDeUsuario) {
        const usernameRegex = /^[a-zA-Z0-9_]+$/;
        return usernameRegex.test(nombreDeUsuario);
    }

    // Función para validar la contraseña
    function validarContraseña(contraseña) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(contraseña);
    }

    // Función para cifrar contraseñas
    function cifrarContraseña(contraseña) {
        return CryptoJS.SHA256(contraseña).toString();
    }
    

    // Manejar el evento de envío del formulario de registro
    document.getElementById('registro')?.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        const nombreDeUsuario = document.getElementById('nuevoUsuario').value.trim();
        const nuevaContraseña = document.getElementById('nuevaContraseña').value.trim();
        const confirmarContraseña = document.getElementById('confirmarContraseña').value.trim();
        const errorMessage = document.getElementById('error-message');

        errorMessage.textContent = '';

        if (!nombreDeUsuario || !nuevaContraseña || !confirmarContraseña) {
            errorMessage.textContent = 'Por favor, completa todos los campos.';
            return;
        }

        if (!validarNombreUsuario(nombreDeUsuario)) {
            errorMessage.textContent = 'El nombre de usuario solo puede contener letras, números y guiones bajos.';
            return;
        }

        if (nuevaContraseña !== confirmarContraseña) {
            errorMessage.textContent = 'Las contraseñas no coinciden.';
            return;
        }

        if (!validarContraseña(nuevaContraseña)) {
            errorMessage.textContent = 'La contraseña debe tener minimo 8 caracteres, una letra mayúscula, una minúscula y un número.';
            return;
        }

        const usuarioExistente = usuarios.find(usuario => usuario.NombredeleUsuario === nombreDeUsuario);
        if (usuarioExistente) {
            errorMessage.textContent = 'El nombre de usuario ya está en uso. Por favor, elige otro.';
            return;
        }

        const hashedPassword = cifrarContraseña(nuevaContraseña);
        usuarios.push({ NombredeleUsuario: nombreDeUsuario, Contraseña: hashedPassword });
        console.log('Usuarios después de agregar:', usuarios);

        // Guardar en localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        console.log('Usuarios guardados en localStorage:', JSON.parse(localStorage.getItem('usuarios')));

        alert('Cuenta creada exitosamente. Puedes iniciar sesión ahora.');
        window.location.href = 'inicio.html';
    });

    // Manejar el evento de envío del formulario de inicio de sesión
    document.getElementById('inicio')?.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombreDeUsuario = document.getElementById('Usuario').value.trim();
        const contraseña = document.getElementById('Contraseña').value.trim();
        const errorMessage = document.getElementById('error-message');

        errorMessage.textContent = '';

        console.log('Intentando iniciar sesión con:', `"${nombreDeUsuario}"`, `"${contraseña}"`);
        console.log('Usuarios cargados:', usuarios);

        const usuarioEncontrado = usuarios.find(usuario => usuario.NombredeleUsuario === nombreDeUsuario);
        if (!usuarioEncontrado) {
            errorMessage.textContent = 'El nombre de usuario no existe.';
            return;
        }

        const contraseñaCifrada = cifrarContraseña(contraseña);
        if (usuarioEncontrado.Contraseña !== contraseñaCifrada) {
            errorMessage.textContent = 'La contraseña es incorrecta.';
            return;
        }

        errorMessage.textContent = '';
        alert('Inicio de sesión exitoso.');
        window.location.href = './Seleccion/index.html';
    });

    // Función reutilizable para alternar visibilidad de contraseñas
    function togglePasswordField(fieldId, iconId) {
        const passwordField = document.getElementById(fieldId);
        const iconElement = document.getElementById(iconId);

        if (!passwordField || !iconElement) {
            console.error(`Campo de contraseña o ícono con id "${fieldId}" / "${iconId}" no encontrado.`);
            return;
        }

        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        iconElement.textContent = type === 'password' ? '👁️' : '🙈';
    }

    // Mostrar/ocultar contraseña (campo principal)
    document.getElementById('toggle-password-crear')?.addEventListener('click', function() {
        togglePasswordField('nuevaContraseña', 'toggle-password-crear');
    });

    // Mostrar/ocultar contraseña (campo de confirmación)
    document.getElementById('toggle-confirm-password')?.addEventListener('click', function() {
        togglePasswordField('confirmarContraseña', 'toggle-confirm-password');
    });

    // Mostrar/ocultar contraseña (inicio de sesión)
    document.getElementById('toggle-password-inicio')?.addEventListener('click', function() {
        togglePasswordField('Contraseña', 'toggle-password-inicio');
    });

    // Actualizar el indicador de fortaleza de contraseña
document.getElementById('nuevaContraseña').addEventListener('input', function() {
    const password = this.value;
    const strengthBar = document.querySelector('#password-strength .bar');

    if (password.length === 0) {
        strengthBar.style.width = '0%';
    } else if (password.length < 6) {
        strengthBar.style.width = '33%';
        strengthBar.style.backgroundColor = '#ff0000'; // Rojo
    } else if (password.length < 8) {
        strengthBar.style.width = '66%';
        strengthBar.style.backgroundColor = '#ffff00'; // Amarillo
    } else {
        strengthBar.style.width = '100%';
        strengthBar.style.backgroundColor = '#00ff00'; // Verde
    }
});

    // Mostrar mensaje de error
function mostrarError(mensaje) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = mensaje;
    errorMessage.classList.add('show');
    setTimeout(() => errorMessage.classList.remove('show'), 3000); // Ocultar después de 3 segundos
}

// Mostrar mensaje de éxito
function mostrarExito(mensaje) {
    const successMessage = document.getElementById('success-message');
    successMessage.textContent = mensaje;
    successMessage.classList.add('show');
    setTimeout(() => successMessage.classList.remove('show'), 3000); // Ocultar después de 3 segundos
}

} catch (error) {
    console.error('Error encontrado:', error);
}