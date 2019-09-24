function adivinaNumero(){
    let a = new Array(20);
    for(let i =0;i<20;i++){
        a[i] = Math.floor(Math.random()*21);
    } 
    //console.log(a);
    n = prompt('Adivine un numero del arreglo:');
    cont=0;
    for(let j of a){
        if(a[j] == n){
            return console.log("Ganaste!!");
        }cont++;
    }
    if(cont ==20){
        return console.log("Perdiste");
    }
}