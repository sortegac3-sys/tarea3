//15. factorial de números en un arreglo
function factoriales(){
    let num=[]
    let cantidad=parseInt(prompt("Ingrese cuantos números van a ser:"));
    for(let C1=0;C1<cantidad;C1++){
        num[C1]=parseInt(prompt("Ingrese el número:"+(C1+1)));
    }
    for(let C2=0;C2<num.length;C2++){
        let valor=num[C2];
        let factorial=1;
        for(let C3=1;C3<=valor;C3++){
            factorial=factorial*C3;
        }
        console.log("El factorial de "+num[C2],"!= "+factorial)
    }
}