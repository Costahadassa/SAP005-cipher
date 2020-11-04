import cipher from './cipher.js';

console.log(cipher);

const buttonCodificar = document.getElementById("button");
buttonCodificar.addEventListener("click", Codificar);
function Codificar(CliqueAquiEvento){
    CliqueAquiEvento.preventDefault();

let MsgCod = document.getElementById("MsgCod").value;
let offsetCod = Number(document.getElementById("offsetCod").value);

const resultadoMsgCod=cipher.encode (offsetCod, MsgCod);
document.getElementById("CodResultado").innerHTML=resultadoMsgCod;
}

const buttonDecodificar = document.getElementById("Decodificar");
buttonDecodificar.addEventListener("click", Decodificar);

function Decodificar(CliqueAquiEvento){
    CliqueAquiEvento.preventDefault();

let MsgDeco = document.getElementById("MsgDeco").value;
let offsetCod = Number(document.getElementById("offsetDeco").value);

const resultadoMsgDeco=cipher.decode (offsetCod, MsgDeco);
document.getElementById("DecoResultado").innerHTML=resultadoMsgDeco;
}

