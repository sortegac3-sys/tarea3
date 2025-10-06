//3. invertir un texto
function invertir_texto(){
    let P, I, C=0
    P=prompt("Ingrese una palabra:");
while (C<P.length){
        I += P[C];
        C=C+1;
}
console.log (+I)
}