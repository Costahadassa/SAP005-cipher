const cipher = {

    encode: function (numDeslocamento, MsgCod) {
    let tamAlfabeto = 26;
    let CodigoAscii = 65;
    let Soma ="";
    for(let i = 0; i < MsgCod.length; i++) {
        Soma += String.fromCharCode((( MsgCod.charCodeAt(i) - CodigoAscii + numDeslocamento) % tamAlfabeto) + CodigoAscii);

    }
    
return Soma; 
},
    decode: function (numDeslocamento, MsgCod) {
    let tamAlfabeto = 26;
    let CodigoAscii = 65;
    let SomaDecode="";
    for(let i = 0; i < MsgCod.length; i++) {
        SomaDecode += String.fromCharCode((( MsgCod.charCodeAt(i) - CodigoAscii - numDeslocamento) % tamAlfabeto) + CodigoAscii);

}
return SomaDecode;
},
};
export default cipher;

