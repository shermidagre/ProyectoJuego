
# Pasos que hemos seguido desde el comienzo obviando la distribucion 

## Descripción

Este proyecto es un sistema de autenticación simple que permite a los usuarios crear una cuenta e iniciar sesión. El diseño está inspirado en la estética **gaming retro**, con colores oscuros, detalles brillantes y animaciones características de los videojuegos clásicos. Además, se han implementado mejoras visuales y de experiencia del usuario para hacer el sistema más atractivo y funcional.

---

## Características principales

### 1. **Creación de cuenta**
- **Nombre de usuario**: Los usuarios pueden elegir un nombre de usuario único que cumpla con las siguientes reglas:
    - Solo puede contener letras, números y guiones bajos (`_`).
    - No puede estar en uso por otro usuario.
- **Contraseña segura**: Las contraseñas deben cumplir con los siguientes requisitos:
    - Al menos 8 caracteres.
    - Una letra mayúscula, una minúscula y un número.
- **Confirmación de contraseña**: Se requiere que el usuario confirme su contraseña para evitar errores al escribirla.
- **Indicador de fortaleza de contraseña**: Un indicador dinámico muestra la fortaleza de la contraseña mientras el usuario la escribe.

### 2. **Inicio de sesión**
- Los usuarios pueden iniciar sesión con su nombre de usuario y contraseña.
- Si el nombre de usuario no existe o la contraseña es incorrecta, se muestran mensajes de error claros y visibles.

### 3. **Diseño retro gaming**
- **Colores**: Fondo oscuro con detalles rojos (inicio de sesión) y verdes (creación de cuenta) brillantes.
- **Animaciones**:
    - Título parpadeante en el formulario de inicio de sesión.
    - Título desplazándose horizontalmente en el formulario de creación de cuenta.
- **Botones interactivos**: Efecto de pulsación al hacer clic en los botones "Entrar" y "Crear ahora".

### 4. **Mejoras de experiencia del usuario**
- **Mensajes de éxito/advertencia**: Mensajes claros y animados para informar sobre errores o éxitos.
- **Redirecciones automáticas**: Después de crear una cuenta, el usuario es redirigido automáticamente al formulario de inicio de sesión después de 3 segundos.
- **Mostrar/ocultar contraseñas**: Íconos para alternar la visibilidad de las contraseñas en ambos formularios.

### 5. **Interfaz responsiva**
- El diseño es compatible con dispositivos móviles gracias a media queries que ajustan el tamaño de los elementos según la pantalla.

---

## Tecnologías utilizadas

- **HTML5**: Estructura básica del proyecto.
- **CSS3**: Estilos y animaciones retro gaming.
- **JavaScript**: Lógica de validación, cifrado de contraseñas y manejo de `localStorage`.
- **CryptoJS**: Biblioteca para cifrar contraseñas utilizando el algoritmo SHA-256.
- **Live Server**: Servidor local para pruebas y persistencia de `localStorage`.

---

## Estructura del proyecto

El proyecto está organizado en los siguientes archivos:

```
/proyecto
│
├── CrearCuenta.html       # Formulario de creación de cuenta
├── CrearCuenta.css        # Estilos específicos para el formulario de creación de cuenta
├── inicio.html            # Formulario de inicio de sesión
├── inicio.css             # Estilos específicos para el formulario de inicio de sesión
├── inicio.js              # Lógica principal del proyecto (validaciones, cifrado, etc.)
└── README.md              # Documentación del proyecto
```

---

## Funcionamiento

### 1. Crear una cuenta
1. Abre el archivo `CrearCuenta.html` en tu navegador.
2. Ingresa un nombre de usuario único y una contraseña segura.
3. Confirma la contraseña.
4. Haz clic en "Crear ahora".
    - Si todo es correcto, se mostrará un mensaje de éxito y serás redirigido automáticamente al formulario de inicio de sesión después de 3 segundos.

### 2. Iniciar sesión
1. Abre el archivo `inicio.html` en tu navegador.
2. Ingresa el nombre de usuario y contraseña que usaste al crear la cuenta.
3. Haz clic en "Entrar".
    - Si los datos son correctos, se mostrará un mensaje de éxito y serás redirigido a la página principal (`Seleccion/index.html`).

---

## Mejoras futuras

- **Base de datos**: Reemplazar `localStorage` con una base de datos como Firebase o MongoDB para manejar más usuarios y datos.
- **Recuperación de contraseña**: Añadir una opción para recuperar la contraseña en caso de que el usuario la olvide.
- **Seguridad mejorada**: Implementar tokens de autenticación o cifrado adicional para proteger las contraseñas.
- **Multijugador**: Añadir funcionalidades adicionales relacionadas con juegos multijugador.

---

## Contribuciones

Si deseas contribuir al proyecto, ¡eres bienvenido! Puedes realizar mejoras en el código o añadir nuevas funcionalidades. Para contribuir:

1. Clona este repositorio.
2. Realiza tus cambios.
3. Envía un pull request explicando tus mejoras.

---

## Autor

-  Samuel Hermida gregores
- **Contacto**: samuelhermida55@gmail.com

---

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

