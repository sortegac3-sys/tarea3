//21. concatenar las palabras dentro de un arreglo
function concatenar(){
    let palabras=[]
    let cantidad=parseInt(prompt("Ingrese cuántas palabras va a tener el arreglo:"));
    for(let C1=0;C1<cantidad;C1++){
        N[C1]=parseInt(prompt("Ingrese la palabra:"+(C1+1)));
    }
    let total
    for(let C2=0;C2<palabras.length;C2++){
        total=total+palabras[C2]+" ";
    }
    console.log(+total)
}