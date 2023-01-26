function soloLetras(e){
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key).toLowerCase();
    letras = " abcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-38-46-164";
    teclado_especial = false;

    for (var i in especiales){
        if (key == especiales[i]){
            teclado_especial = true;
            break;
        }
    }

    if (letras.indexOf(teclado) == -1 && !teclado_especial) {
        return false;
    }
}

function encriptar() {
   var texto = document.getElementById("idTexto").value;
   texto = texto.toLowerCase(); //esta line se quitara al corregir lo de las letras minusculas
   texto = texto.replace(/e/g,"enter");
   texto = texto.replace(/i/g,"imes");
   texto = texto.replace(/a/g,"ai");
   texto = texto.replace(/o/g,"ober");
   texto = texto.replace(/u/g,"ufat"); 
   document.getElementById("textArea").value = texto;
   document.getElementById('btnCopiar').style.display = 'inline-block';
   document.getElementById('textArea').style.display = 'flex';
   document.getElementById('img').style.visibility = 'hidden';
   document.getElementById('txtUno').style.visibility = 'hidden';
   document.getElementById('txtDos').style.visibility = 'hidden';
}


function desencriptar(){
  var texto = document.getElementById("idTexto").value;
   texto = texto.toLowerCase(); //esta line se quitara al corregir lo de las letras minusculas
   texto = texto.replace(/ufat/g,"u");
   texto = texto.replace(/ober/g,"o");
   texto = texto.replace(/ai/g,"a")
   texto = texto.replace(/imes/g,"i");
   texto = texto.replace(/enter/g,"e");

   document.getElementById("textArea").value = texto;
   document.getElementById('btnCopiar').style.display = 'inline-block';
   document.getElementById('textArea').style.display = 'flex';
   document.getElementById('img').style.visibility = 'hidden';
   document.getElementById('txtUno').style.visibility = 'hidden';
   document.getElementById('txtDos').style.visibility = 'hidden';
}

function limpiarCampos(){
    location.href = location.href;
}

function copiado() {
    let textoCopiado = document.getElementById('textArea');
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand('copy');

    alert("Texto copiado: " + textoCopiado.value)
}


