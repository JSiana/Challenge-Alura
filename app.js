function cifrar(){
    let texto = document.getElementById("texto").value;
    let tMensaje = document.getElementById("tMensaje");
    let vacio = "";

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/o/gi, "ober")
        .replace(/a/gi, "ai")
        .replace(/u/gi, "ufat");

        if(texto == 'escriba un texto'){
            alert("Campo vacío");
            tMensaje.textContent = "Ninguna palabra cifrada";
        }else{
            if (texto.length != 0){
                document.getElementById("texto-cifrado").value = textoCifrado;
                tMensaje.textContent = "Texto cifrado correctamente";
                document.getElementById("texto").value = vacio;
            } else {
                    alert("Escriba un texto para cifrar");
            }
        } 
}

function decifrar(){
    let texto = document.getElementById("texto-cifrado").value;
    let tMensaje = document.getElementById("tMensaje");
    let vacio = "";

    let textoDecifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ai/gi, "a")
    .replace(/ufat/gi, "u");

    if(texto == 'escriba un texto'){
        alert("Campo vacío");
        tMensaje.textContent = "Ninguna palabra descifrada";
    }else{
        if (texto.length != 0){
            document.getElementById("texto").value = textoDecifrado;
            tMensaje.textContent = "Texto decifrado correctamente";
            document.getElementById("texto-cifrado").value = vacio;
        } else {
            alert("Escriba un texto para desifrar");
        }
    }
}