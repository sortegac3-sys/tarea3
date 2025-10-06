//18. contar cuantos impares hay en un arrgelo
function arreglo_impares(){
    let N=[]
    let cantidad=parseInt(prompt("Ingrese cuantos números van a ser:"));
    for(let C1=0;C1<cantidad;C1++){
        N[C1]=parseInt(prompt("Ingrese el número:"+(C1+1)));
    }
    let impares
    for(let C2=0;C2<N.length;C2++){
        if ((N[C2]%2)!==0){
            impares=impares+1;
        }
    }
    console.log("Hay"+impares+"números impares en total.")
}