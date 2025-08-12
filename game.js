// Juego Frío o Caliente en JavaScript

// Genera un número aleatorio entre 1 y 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

console.log("🎯 Bienvenido al juego Frío o Caliente");
console.log("Adivina el número entre 1 y 100");

function adivinarNumero(guess) {
    intentos++;

    if (isNaN(guess)) {
        console.log("⚠️ Ingresa un número válido.");
        return;
    }

    let diferencia = Math.abs(guess - numeroSecreto);

    if (guess === numeroSecreto) {
        console.log(`✅ ¡Correcto! El número era ${numeroSecreto}. Lo lograste en ${intentos} intentos.`);
    } else if (diferencia <= 5) {
        console.log("🔥 Muy caliente");
    } else if (diferencia <= 15) {
        console.log("🌡️ Caliente");
    } else {
        console.log("❄️ Frío");
    }
}

// Ejemplo de uso en consola:
adivinarNumero(50); // Cambia el número para probar
