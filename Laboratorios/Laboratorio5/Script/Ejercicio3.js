function ocurrenciasNumero(arreg,n){
    let cont=0;
    for(let x of arreg){
        if(x==n){
            cont=cont+1;
        }
    }
    console.log(cont);
}