//17. promedio de los númerows de un arreglo
function promedio_arreglo(){
    let N=[]
    let cantidad=parseInt(prompt("Ingrese cuantos números van a ser:"));
    for(let C1=0;C1<cantidad;C1++){
        N[C1]=parseInt(prompt("Ingrese el número:"+(C1+1)));
    }
    let P
    for(let C2=0;C2<N.length;C2++){
        P=P+N[C2];
    }
    P=P/(N.length);
    console.log("El promedio es de:"+P)
}