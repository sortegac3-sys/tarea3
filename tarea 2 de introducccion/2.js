//2. contar apariciones de una letra específicaa
function contar_letra(){
let P, A=0, C=0
P=prompt("Ingrese una texto:");
while (C<P.length){
    if (P[C]="A"||"a"){
        A=A+1;
    }
    C=C+1;
}
console.log("Hay"+A, "letras A en " +P)
}