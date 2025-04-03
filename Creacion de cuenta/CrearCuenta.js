
try {

    // Recuperar usuarios del localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];


    console.log('Usuarios iniciales:', usuarios); 

    // Registro de la cuenta

    document.getElementById('registro')?.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        const nuevoUsuario = document.getElementById('nuevoUsuario').value; // Obtener el nombre de usuario
        const nuevaContraseña = document.getElementById('nuevaContraseña').value; // Obtener la contraseña

        // Asi se definen los nuevos usuarios y contraseñas

        console.log('Nuevo usuario:', nuevoUsuario, nuevaContraseña); // Mensaje de depuración

        // Verificar si el usuario ya existe
        
        const Usuarioexistente = usuarios.find(Usuarioexistente => Usuarioexistente.NombredeleUsuario === nuevoUsuario);
        
        if (Usuarioexistente) {
            alert('El nombre de usuario ya está en uso. Por favor, elige otro.');
            console.log('El usuario ya existe:', Usuarioexistente); // Mensaje de depuración
            return; // Salir de la función si el usuario ya existe
        }

        // Agregar nuevo usuario
        usuarios.push({ NombredeleUsuario: nuevoUsuario, Contraseña: nuevaContraseña });
        console.log('Usuarios después de agregar:', usuarios); // Mensaje de depuración
        localStorage.setItem('Usuarios', JSON.stringify(usuarios)); // Guardar en localStorage

        // Verificar que los datos se guardaron correctamente
        console.log('Usuarios guardados en localStorage:', JSON.parse(localStorage.getItem('Usuarios')));

        alert('Cuenta creada exitosamente. Puedes iniciar sesión ahora.');
        window.location.href = '../inicio.html'; // Redirigir a la página de inicio de sesión
    });

    // Manejar el evento de envío del formulario de inicio de sesión
    document.getElementById('registro')?.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        const NombredeleUsuario = document.getElementById('Usuario').value; // Obtener el nombre de usuario
        const Contraseña = document.getElementById('Contraseña').value; // Obtener la contraseña

        console.log('Intentando iniciar sesión con:', NombredeleUsuario, Contraseña); // Mensaje de depuración

        // Buscar el usuario en el array de usuarios
        const Usuario = usuarios.find(Usuario => Usuario.NombredeleUsuario === NombredeleUsuario && Usuario.Contraseña === Contraseña);

        // Verificar si el usuario existe
        if (Usuario) {
            alert('Inicio de sesión exitoso');
            window.location.href = '../index.html'; // Redirigir a la página de inicio
        } else {
            alert('Nombre de usuario o contraseña incorrectos');
        }
    });
} catch (error) {
    console.error('Error encontrado:', error); // Mostrar cualquier error en la consola
}