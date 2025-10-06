//1. divisores de un numero en un arreglo
function divisores_numeros(){
    let N=[]
    let cantidad=parseInt(prompt("Ingrese la cantidad de números que se van a ingresar:"));
    for(let C1=0;C1<cantidad;C1++){
        N[C1]=parseInt(prompt("Ingrese el número:"+(C1+1)));
    }
    for(let C2=0;C2<N.length;C2++){
        let numerito=N[C2];
        let D="";
        for(let C3=1;C3<=numerito;C3++){
            if(numerito%C3===0){
D=D+C3+",";
            }
        }
        D=D.slice(0, -1);
        console.log("Los divisores de"+numerito, "son:"+D);
    }
}