//12. suma de los divisores en un arreglo
function suma_divisores(){
let N=[]
let cantidad=parseint(prompt("Ingrese cuantos números van a ser:"));
for(let C1=0;C1<cantidad;C1++){
    N[C1]=parseint(prompt("Ingrese el número:"+(C1+1)));
}
for(let C2=0;C2<N.length;C2++){
    let num=N[C2];
    let D=[];
    for(let C3=1;C3<num;C3++){
        if(num%C3===0){
            D[C3-1]=C3;
        }else{
            D[C3-1]=0;
        }
    }
    let total
    for(let C4=0;C4<D.length;C4++){
        total=total+D[C4];
    }
    console.log("El total de la suma de los divisores del número es:"+total);
}
}