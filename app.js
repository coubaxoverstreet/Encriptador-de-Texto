// Función para encriptar el texto
function encriptar() {
    let texto = document.getElementById("textoIntroducido").value;

    // Validar que solo contenga letras minúsculas
    if (!/^[a-z\s]*$/.test(texto)) {
        alert("Por favor, introduzca solo letras minúsculas y espacios.");
        return;
    }

    const textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    document.getElementById("textoFinal").value = textoEncriptado;
    document.querySelector(".main__div_final p").textContent = textoEncriptado ? "" : "¡Gracias por haber utilizado mi encriptador de texto!";
}

// Función para desencriptar el texto
function desencriptar() {
    let texto = document.getElementById("textoFinal").value;

    // Validar que solo contenga letras minúsculas y secuencias válidas
    if (!/^[a-z\s]*(enter|imes|ai|ober|ufat)*$/.test(texto)) {
        alert("El texto contiene caracteres inválidos.");
        return;
    }

    const textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    document.getElementById("textoFinal").value = textoDesencriptado;
    document.querySelector(".main__div_final p").textContent = textoDesencriptado ? "" : "¡Gracias por haber utilizado mi encriptador de texto!";
}


function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copiado: " + copyText.value);
}
