//22. el cubo de los elementos de un arreglo
function cubos(){
    let N=[]
    let cantidad=parseInt(prompt("Ingrese cuantos números van a ser:"));
    for(let C1=0;C1<cantidad;C1++){
        N[C1]=parseInt(prompt("Ingrese el número:"+(C1+1)));
    }
    let cubos=[]
    for(let C2=0;C2<N.length;C2++){
        cubos[C2]=N[C2]**3;
    }
    console.log("Resultados:"+cubos);
}