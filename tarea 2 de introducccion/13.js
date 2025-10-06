//13. números perfectos en un arreglo
function numeros_perfectos(){
    let N=[]
    let P=[]
    let cantidad=parseInt(prompt("Ingrese cuantos números van a ser:"));
    for(let C1=0;C1<cantidad;C1++){
        N[C1]=parseInt(prompt("Ingrese el número:"+(C1+1)));
    }
    for(let C2=0;C2<N.length;C2++){
        let num=N[C2]
        let D=0
        for(let C3=1;C3<num;C3++){
            if(num%C3===0){
                D=D+C3;
            }
        }
        if(D===num){
            P.push(num)
        }
    }
    console.log("Los números perfectos son"+P.join(","));
}