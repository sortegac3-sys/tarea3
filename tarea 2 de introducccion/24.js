//24. factorial de los números de un arreglo
 
function factoriales(){
    let N=[]
    let cantidad=parseInt(prompt("Ingrese cuantos números van a ser:"));
    for(let C1=0;C1<cantidad;C1++){
        N[C1]=parseInt(prompt("Ingrese el número:"+(C1+1)));
    }
for(let C2=0;C2<N.length;C2++){
let ctdfactorial=N[C2];
let factorial=1;
for(let C3=1; C3<=ctdfactorial;C3++){
    factorial=factorial*C3;
}
console.log("El factorial de "+N[C2]+"es de "+factorial)
}
}