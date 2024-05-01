function procesarTexto() {
    var texto = document.getElementById("texto_in").value;
    var regex = /[A-ZáéíóúüÁÉÍÓÚÜ!@#$%^&*(),.?":{}|<>]/; // Expresión regular para caracteres especiales y mayúsculas

    if (texto.toLowerCase() === texto && !regex.test(texto)) {
        let resultado = texto.replace(/e/g, 'enter')
                              .replace(/i/g, 'imes')
                              .replace(/a/g, 'ai')
                              .replace(/o/g, 'ober')
                              .replace(/u/g, 'ufat');
          
        document.getElementById('texto_resultado').textContent = resultado;
        document.getElementById("resultado").style.visibility = "visible"; 
        document.getElementById("default").style.display = "none";
          
        return resultado;
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El texto contiene mayúsculas o caracteres especiales.",
              });
    }
}

function desencriptar() {
    let texto = document.getElementById('texto_in').value;

    let resultado = texto.replace(/enter/g, 'e')
                        .replace(/imes/g, 'i')
                        .replace(/ai/g, 'a')
                        .replace(/ober/g, 'o')
                        .replace(/ufat/g, 'u');

    console.log("Texto desencriptado:", resultado);

    document.getElementById('resultado').textContent = resultado;
    document.getElementById("resultado").style.visibility = "visible"; 
    document.getElementById("default").style.display = "none";
    

    return resultado; 
}


function copiarAlPortapapeles() {
    var resultado = document.getElementById('resultado').textContent;

    if (resultado.trim() !== "") {
        var textarea = document.createElement('textarea');
        textarea.value = resultado;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        Swal.fire({
            icon: "success",
            title: "Yey!",
            text: "Texto copiado",
          });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No hay texto para copiar",
          });
    }
}

