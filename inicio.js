
try {

    // Recuperar usuarios del localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];


    console.log('Usuarios iniciales:', usuarios); 

    // Verificar si el usuario ya existe
        
        const Usuarioexistente = usuarios.find(Usuarioexistente => Usuarioexistente.NombredeleUsuario === nuevoUsuario);
        
        if (Usuarioexistente) {
            alert('El nombre de usuario ya está en uso. Por favor, elige otro.');
            console.log('El usuario ya existe:', Usuarioexistente); // Mensaje de depuración
            return; // Salir de la función si el usuario ya existe
        }

        // Verificar que los datos se guardaron correctamente
        console.log('Usuarios guardados en localStorage:', JSON.parse(localStorage.getItem('users')));

    // Manejar el evento de envío del formulario de inicio de sesión
    document.getElementById('inicio')?.addEventListener('submit', function(event) {
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