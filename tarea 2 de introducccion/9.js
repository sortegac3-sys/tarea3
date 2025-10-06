//9. contar las apariciones de un caracter elegido
function contar_eleccion(){
let P, A=0, C=0, E
P=prompt("Ingrese un texto:");
E=prompt("Ingrese el caracter a analizar:")
while (C<P.length){
    if (P[C]=E.toLowerCase||E.toUpperCase){
        A=A+1;
    }
    C=C+1;
}
console.log("Hay"+A, "letras A en " +P)
}