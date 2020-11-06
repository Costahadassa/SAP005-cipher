import cipher from './cipher.js';


let MsgCod = document.getElementById("MsgCod").value;
let offsetCod = document.getElementById("offsetCod").value;

const buttonCodificar = document.getElementById("codificar");
buttonCodificar.addEventListener("click", function(){


let encode = cipher.encode(Number(offsetCod),MsgCod);

document.getElementById("codResultado").value=encode; 

});

let MsgDecodificar = document.getElementById("MsgDecodificar").value;
let offsetDeco = document.getElementById("offsetDeco").value;

const buttonDecodificar = document.getElementById("btnDecodificar");
buttonDecodificar.addEventListener("click", function(){

let decode = cipher.decode(Number(offsetDeco),MsgDecodificar)
document.getElementById("decoResultado").value=decode; 

});