// Función para encriptar el texto
function encriptar() {
    const texto = document.getElementById("textoIntroducido").value;
    const textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.querySelector(".main__div_desencriptador textarea").value = textoEncriptado;
    document.querySelector(".main__div_final p").textContent = textoEncriptado ? "" : "Ningún mensaje fue encontrado";
}

// Función para desencriptar el texto
function desencriptar() {
    const texto = document.getElementById("textoIntroducido").value;
    const textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.querySelector(".main__div_desencriptador textarea").value = textoDesencriptado;
    document.querySelector(".main__div_final p").textContent = textoDesencriptado ? "" : "Ningún mensaje fue encontrado";
}


document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".main__div_buttonEncriptar").addEventListener("click", encriptar);
    document.querySelector(".main__div_buttonDesencriptar").addEventListener("click", desencriptar);
});


//Funcion para copiar el texto final
function myFunction() {
    // Get the text field
    var copyText = document.getElementById("textoFinal");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }
