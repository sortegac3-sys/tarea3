//16. invertir los números de un arreglo
function invertir_arreglos(){
    let N=[]
    let cantidad=parseInt(prompt("Ingrese cuantos números van a ser:"));
    for(let C1=0;C1<cantidad;C1++){
        N[C1]=parseInt(prompt("Ingrese el número:"+(C1+1)));
    }
    for(let C2=0;C2<N.length;C2++){
        let invertir
        let num=N[C2].toString();
        for(let C3=num.length-1;C3>=0;C3--){
            invertir=invertir=+num[C3];
        }
console.log("La lista de números invertida se ve así:"+N[C2]+"= "+invertir);
    }
}