//19. mayores de edad enun arreglo
function arreglo_mayoredad(){
    let N=[]
    let cantidad=parseInt(prompt("Ingrese cuantos números van a ser:"));
    for(let C1=0;C1<cantidad;C1++){
        N[C1]=parseInt(prompt("Ingrese el número:"+(C1+1)));
    }
    let M
    for(let C2=0;C2<N.length;C2++){
        if (N[C2]>18){
            M=M+1;
        }
    }
    console.log("Hay"+M+" personas mayores de edad en total.")
}