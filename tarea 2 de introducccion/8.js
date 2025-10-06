//8. frase con mayor cantidad de caracteres
function comparar_frases(){
    let F1, F2, L1, L2
    F1=prompt("Ingrese la primera frase:");
    L1=F1.length;
    F2=prompt("Ingrese la segunda frase:");
    L2=F2.length;
    if (L1<L2){
        console.log(+F2, "tiene más letras que " +F1)
    } else if (L2<L1){
        console.log(+F1, "tiene más letras que " +F2)
    } else {
        console.log("tienen la misma cantidad de letras.")
    }
}