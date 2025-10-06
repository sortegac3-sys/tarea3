//20. buscar un valor en un arreglo
function buscar_valor(){
    let N=[]
    let cantidad=parseInt(prompt("Ingrese cuantos números van a ser:"));
    for(let C1=0;C1<cantidad;C1++){
        N[C1]=parseInt(prompt("Ingrese el número:"+(C1+1)));
    }
    let V=parseInt(prompt("Ingrese el valor que se revisará si existe o no:"));
    let B
    for(let C2=0;C2<N.length;C2++){
        if(N[C2]===V){
            B=B+1;
        }
    }
    if(B>0){
        console.log("El valor "+V+ " SÍ existe")
    }else{
        console.log("El valor "+V+ " NO existe")
    }
}