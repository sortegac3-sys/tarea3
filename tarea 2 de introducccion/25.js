//25. copiar pares hacia otro arreglo
function pares(){
     let N=[]
     let pares=[]
    let cantidad=parseInt(prompt("Ingrese cuantos números van a ser:"));
    for(let C1=0;C1<cantidad;C1++){
        N[C1]=parseInt(prompt("Ingrese el número:"+(C1+1)));
    }
    for(let C2=0;C2<N.length;C2++){
        if((N[C2]%2===0)){
            pares.push(N[C2]);
        }
    }
    console.log("Los números pares del grupo "+N+ " son los siguientes: "+pares)
}