//10. dividir oración en palabras
function dividir_oracion(){
    let O
    let P
    O=("Escriba una oración:");
    for (let C=0;C<O.length;C++){
        if (O[C]!==" "){
            P=P+O[C];
        }else if (P!==""){
            console.log(+P);
        }
    }
    if (P!==""){
        console.log(P);
    }
}