//7. palabra palíndroma
function palindroma(){
    let P, I=""
    P=prompt("Ingrese la palabra (todo escrito en minúsculas por favor):");
for (let C= P.length-1;C>=0;C++){
    I=I+P[C];
}
if (P===I){
    console.log("La palabra "+P, " ES un palíndromo.");
}else{
    console.log("La palabra "+P, " NO ES un palíndromo")
}
}