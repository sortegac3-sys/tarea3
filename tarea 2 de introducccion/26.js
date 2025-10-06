//26. suma de dos arreglos en un tercer arreglo
function suma_arreglos(){
    let N1=[]
    let N2=[]
    let total=[]
    let cantidad=parseInt(prompt("Ingrese cuantos valores son para los arreglos:"));
 for(let C2=0;C2<cantidad;C2++){
    N1[C2]=parseInt(prompt("Ingrese el número "+(C2+1)+ "del grupo 1"));
 }
 for(let C3=0;C3<cantidad;C3++){
 N2[C3]=parseInt(prompt("Ingrese el número "+(C3+1)+ "del grupo 2"));
 }
 for(let C4=0;C4<N1.length;C4++){
    total[C4]=N1[C4]+N2[C4]
 }   
 console.log(+total)
}