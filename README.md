
---

# Proyecto Juego

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

### 3. **Página de selección**
- Después de iniciar sesión, los usuarios son redirigidos a una página de selección (`Seleccion`) que sirve como punto de conexión para acceder a diferentes juegos interactivos.
    - **Diseño retro**: La página tiene un diseño inspirado en videojuegos clásicos, con colores vivos y efectos visuales estilo arcade.
    - **Botones interactivos**: Botones con efectos de pulsación permiten navegar hacia el generador de excusas y el simulador de dados.

### 4. **Generador de excusas retro gaming**
- **Reproductor de excusas**: Este sistema crea frases humorísticas inspiradas en situaciones típicas de partidas multijugador.
    - **Botón interactivo**: Un botón con diseño retro permite generar una nueva excusa cada vez que se hace clic.
    - **Texto dinámico**: La excusa generada aparece en un área destacada con tipografía pixelada y efectos visuales retro.
    - **Imagen de fondo**: Utiliza una imagen de bienvenida (`Bienvenido.avif`) para realzar la estética retro.

### 5. **Simulador de dados**
- **Funcionalidad**: Permite seleccionar el número de dados (hasta 6) que se desean lanzar. Cada dado muestra un resultado aleatorio, y se calcula la suma total de los resultados.
    - **Animaciones**: Los dados tienen imágenes animadas (`dado1.png` a `dado6.png`) que simulan el lanzamiento.
    - **Interacción**: Los usuarios pueden lanzar los dados y ver los resultados en tiempo real.

### 6. **Diseño retro gaming**
- **Colores**: Fondo oscuro con detalles rojos (inicio de sesión) y verdes (creación de cuenta) brillantes.
- **Animaciones**:
    - Título parpadeante en el formulario de inicio de sesión.
    - Título desplazándose horizontalmente en el formulario de creación de cuenta.
- **Botones interactivos**: Efecto de pulsación al hacer clic en los botones "Entrar", "Crear ahora" y otros botones interactivos.
- **Fondo pixelado**: Un patrón de fondo pixelado estilo arcade añade un toque auténtico de videojuegos retro.
- **Efecto CRT**: Simulación de un monitor CRT antiguo con rayas horizontales y un ligero parpadeo para realzar la estética retro.

### 7. **Mejoras de experiencia del usuario**
- **Mensajes de éxito/advertencia**: Mensajes claros y animados para informar sobre errores o éxitos.
- **Redirecciones automáticas**: Después de crear una cuenta, el usuario es redirigido automáticamente al formulario de inicio de sesión después de 3 segundos.
- **Mostrar/ocultar contraseñas**: Íconos para alternar la visibilidad de las contraseñas en ambos formularios.

### 8. **Interfaz responsiva**
- El diseño es compatible con dispositivos móviles gracias a media queries que ajustan el tamaño de los elementos según la pantalla.

---

## Tecnologías utilizadas

- **HTML5**: Estructura básica del proyecto.
- **CSS3**: Estilos y animaciones retro gaming.
- **JavaScript**: Lógica de validación, cifrado de contraseñas, generación de excusas y manejo de `localStorage`.
- **CryptoJS**: Biblioteca para cifrar contraseñas utilizando el algoritmo SHA-256.
- **Live Server**: Servidor local para pruebas y persistencia de `localStorage`.

---

## Estructura del proyecto

El proyecto está organizado en las siguientes carpetas y archivos:

```
/proyecto
│
├── CrearCuenta.html       # Formulario de creación de cuenta
├── CrearCuenta.css        # Estilos específicos para el formulario de creación de cuenta
├── inicio.html            # Formulario de inicio de sesión
├── inicio.css             # Estilos específicos para el formulario de inicio de sesión
├── inicio.js              # Lógica principal del proyecto (validaciones, cifrado, etc.)
│
├── Seleccion              # Carpeta para la página de selección
│   ├── index.html         # Página de selección con enlaces a juegos interactivos
│   └── index.css          # Estilos específicos para la página de selección
│
├── generador-de-excusas   # Carpeta para el generador de excusas
│   ├── excusa.html        # Interfaz del generador de excusas
│   ├── excusa.css         # Estilos específicos para el generador de excusas
│   └── excusa.js          # Lógica del generador de excusas
│
├── Dados                  # Carpeta para los dados virtuales
│   ├── dados.html         # Interfaz de los dados virtuales
│   ├── dados.css          # Estilos específicos para los dados virtuales
│   └── dados.js           # Lógica de los dados virtuales
│
├── img                    # Carpeta para imágenes
│   ├── dado1.png          # Imagen del dado 1
│   ├── dado2.png          # Imagen del dado 2
│   ├── dado3.png          # Imagen del dado 3
│   ├── dado4.png          # Imagen del dado 4
│   ├── dado5.png          # Imagen del dado 5
│   ├── dado6.png          # Imagen del dado 6
│   └── Bienvenido.avif    # Imagen de bienvenida usada en el generador de excusas
│
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
    - Si los datos son correctos, serás redirigido a la página de selección (`Seleccion/index.html`).

### 3. Página de selección
1. Navega a la carpeta `Seleccion` y abre el archivo `index.html`.
2. Usa los botones interactivos para acceder al generador de excusas o al simulador de dados.

### 4. Generador de excusas retro gaming
1. Navega a la carpeta `generador-de-excusas` y abre el archivo `excusa.html`.
2. Haz clic en el botón "Generar Excusa".
    - Aparecerá una frase humorística única en el área de texto.
3. Personaliza la experiencia cambiando los estilos en `excusa.css` o ajustando la lógica en `excusa.js`.

### 5. Simulador de dados
1. Navega a la carpeta `Dados` y abre el archivo `dados.html`.
2. Selecciona el número de dados que deseas lanzar (hasta 6).
3. Haz clic en el botón para lanzar los dados.
    - Los dados mostrarán un resultado aleatorio usando las imágenes de la carpeta `img`, y se calculará la suma total de los resultados.
4. Personaliza las animaciones y estilos en `dados.css` o modifica la lógica en `dados.js`.

---

## Mejoras futuras

- **Base de datos**: Reemplazar `localStorage` con una base de datos como Firebase o MongoDB para manejar más usuarios y datos.
- **Recuperación de contraseña**: Añadir una opción para recuperar la contraseña en caso de que el usuario la olvide.
- **Seguridad mejorada**: Implementar tokens de autenticación o cifrado adicional para proteger las contraseñas.
- **Multijugador**: Añadir funcionalidades adicionales relacionadas con juegos multijugador.
- **Sonidos retro**: Incorporar efectos de sonido estilo arcade al interactuar con los botones y dados.

---

## Contribuciones

Si deseas contribuir al proyecto, ¡eres bienvenido! Puedes realizar mejoras en el código o añadir nuevas funcionalidades. Para contribuir:

1. Clona este repositorio.
2. Realiza tus cambios.
3. Envía un pull request explicando tus mejoras.

---

## Autor

- Samuel Hermida Gregores
- **Contacto**: samuelhermida55@gmail.com

---

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

### Cambios destacados en esta versión:
- **Nueva carpeta `Seleccion`**: Se añadió una página de selección (`index.html` y `index.css`) que conecta con los diferentes juegos interactivos.
- **Carpeta `Inicio imagenes`**: Se incluyó una imagen (`Bienvenido.avif`) en la carpeta `img` para usarla en el generador de excusas.
- **Simulador de dados mejorado**: Ahora permite seleccionar hasta 6 dados, mostrar sus resultados y calcular la suma total.
- **Estructura modular**: Se reorganizaron las carpetas y archivos para facilitar la gestión y personalización del proyecto.

¡Seguimos avanzando! 🚀

