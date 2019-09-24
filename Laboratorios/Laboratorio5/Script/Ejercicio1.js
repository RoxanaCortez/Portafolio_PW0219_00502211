function tipoDato(arr){
    let tipos = [];
    let canti = [];
    arr.forEach((ele)=>{
        if(!tipos.includes(typeof(ele))){
            tipos.push(typeof(ele));
            canti.push(0);        
        }
    }); 
    for(let i = 0; i<arr.length;i++){
        let element = typeof(arr[i]);
        for(let j = 0; j<arr.length;j++){
            if(element == tipos[j]) canti[j]+=1;
        }
    }
    return [tipos,canti];
}
//[3,false,'nido','cueva',[2,3,4],true]
