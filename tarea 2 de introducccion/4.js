//4. comparar longitudes en cadenas
function comparar_cadenas(){
    let P1, P2, L1, L2
    P1=prompt("Ingrese la primera palabra:");
    L1=P1.length;
    P2=prompt("Ingrese la segunda palabra:");
    L2=P2.length;
    if (L1<L2){
        console.log(+P2, "tiene más letras que " +P1)
    } else if (L2<L1){
        console.log(+P1, "tiene más letras que " +P2)
    } else {
        console.log("tienen la misma cantidad de letras.")
    }
}