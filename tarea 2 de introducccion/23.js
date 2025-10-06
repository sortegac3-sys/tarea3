//23. tablas de multiplicar de los elementos de un arreglo
function tablas(){
    let N=[]
    let valortabla=[]
    let cantidad=parseInt(prompt("Ingrese a cuantos números se le realizaran las tablas:"));
    for(let C1=0;C1<cantidad;C1++){
        N[C1]=parseInt(prompt("Ingrese el número:"+(C1+1)));
    }
    let limite=parseInt(prompt("Escriba hasta qué número será la tabla:"));
for(let C2=0;C2<N.length;C2++){
    let tabla=N[C2]
    for(let C3=0;C3<limite;C3++){
        valortabla[C3]=tabla*(C3+1);
    }
    console.log("La tabla de "+N[C2]+ " es= "+valortabla);
}
}