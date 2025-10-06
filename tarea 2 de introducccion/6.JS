//6. reemplazo de caracteres específicos
function reemplazo(){
    let P, C=0, R
    P=prompt("Ingrese una palabra:");
    while (C<P.length){
        if (P[C]=("O"||"o")){
            R=R+"#";
        }else{
            R=P[C];
        }
        C=C+1;
    }
    console.log(+R)
}