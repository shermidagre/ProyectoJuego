const quienes = [
    "Mi jungla, el rascabicho que estaba de vacaciones 🌴 y solo sirve para dar oro gratis 💰",
    "El soporte mamaguevo, que se fue a la base a tomar un café ☕ en vez de ayudar 😒",
    "El mid laner, un mariconazo que se cree Faker pero no hace ni mierda 😎",
    "El ADC, que no sabe lo que es un 'kiting' 🏹 y parece un bot oxidado 🤖",
    "El top laner, farmeando mientras yo moría 🌾, como un estúpido agricultor 🚜",
    "El enemigo, que claramente tiene hacks 🖥️ o soy yo el único sin suerte 😤",
    "El equipo rival, jugando en otra liga 🏆, mientras los míos parecen bronce 5 🤡",
    "El AFK, un desgraciado que decidió dormir en plena ranked 😴",
    "El troll, un idiota que arruinó el juego por diversión 🤡 porque su vida no tiene sentido 🤬",
    "El nuevo, que no sabe ni qué hace aquí 🤔, parece que instaló el juego ayer 🎓"
];

const como = [
    "no me gankeó en todo el juego 🚫, jungla de mierda 🧐",
    "se desconectó en el momento clave ❌, mejor apaga la PC pa' siempre 🔋",
    "no me protegió en la pelea 🛡️, inútil de mierda 🤦",
    "se quedó farmeando en vez de ayudar 🌾, mamaguevo con retraso 🚜",
    "no sabe usar su campeón 🤷, pa' qué juega este mariconazo 🔒",
    "se fue a invadir sin avisar ⚔️, cabeza de sandía 🤡",
    "no me siguió en la pelea 🏃, tiene lag mental 🧠🐌",
    "se quedó en la base mientras yo luchaba 🏠, como un muerto viviente 📱",
    "no compró los objetos básicos 🛒, estúpido con las manos de adorno 🔥",
    "se quedó muteado y no comunicó nada 🔇, pero seguro flammea en el chat 🤬"
];

const que = [
    "y por eso perdimos. 💀 Estos rascabichos no sirven 🧠🚫",
    "y eso arruinó todo. 😞 Qué equipo de mancos 🎪",
    "y no pude hacer nada. 🤷 Jugar 1vs9 es imposible 🏋️",
    "y el enemigo se aprovechó. 👿 Porque al menos ellos saben jugar 📞",
    "y no conseguimos la victoria. ❌ Con esta basura de team, imposible 🪵",
    "y eso nos costó el juego. 🏳️ No puedo carrear a estos idiotas 🤡",
    "y no pude hacer el objetivo. 🎯 Porque mis panas son ciegos 🥴",
    "y eso nos dejó en desventaja. ⚠️ Empezamos en desventaja con estos mamaguevos 🛑",
    "y no pude hacer mi trabajo. 🔨 Porque teamwork es un concepto desconocido aquí 🤝",
    "y eso fue decisivo. ⚡ Decisión final: no volver a jugar con esta gente 🚪👋"
];

function generarExcusa() {

    const quien = quienes[Math.floor(Math.random() * quienes.length)];

    const comoParte = como[Math.floor(Math.random() * como.length)];

    const queParte = que[Math.floor(Math.random() * que.length)];

    

    return `${quien} ${comoParte} ${queParte}`;

}


document.getElementById('generarBtn').addEventListener('click', function() {

    const excusaGenerada = generarExcusa();

    document.getElementById('excusa').innerText = excusaGenerada;

});