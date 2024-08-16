//CAMILO ANDRES DAZA E.
//PROYECTO ENCRIPTAR Y DESENCRIPTAR TEXTO
//LOGICA DE PROGRAMACION ALURA LATAM - ORACLE

// Función para encriptar texto
function encryptText() {
    const text = document.getElementById('inputText').value;
    const encryptedText = btoa(text); // Codificación en Base64
    document.getElementById('outputText').value = encryptedText;
}

// Función para desencriptar texto
function decryptText() {
    const text = document.getElementById('inputText').value;
    try {
        const decryptedText = atob(text); // Decodificación de Base64
        document.getElementById('outputText').value = decryptedText;
    } catch (e) {
        alert('Texto inválido para desencriptar.');
    }
}

// Función para copiar texto al portapapeles
function copyText() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles!');
}

/* EXPLICACION DEL CODIGO

se tienen tres funciones que son (por simplicidad para el suscrito las pongo es inglés) que hace lo que 
el aplicativo quiere que hagamos: Encriptar, Desencriptar y Copiar para un texto que se ingrese.

para encritptar se hace con btoa(text) que permite encriptar el texto a base 64 que se guarda en la variable
encryptedText la variable text que se refiere al input.

Para desencriptar el texto se encuentra en el bloque de la funcion decryptedText. para desencriptar se hace con
atob(text) y se guarda en la variable decryptedText. si se presentan errores se hac con los bloques try y catch
si hay carcteres no compatibles para no perturbar la ejecucion de codigo

Ahora la funcion de copiar texto, lo que hace es que copia el texto encriptado, para ser pegado en el campo de texto
para posteriormente hacer clic en desencriptar

Las tres funciones son para cada boton de la interfaz html: "encriptar", "desencriptar" y "copiar"
*/
