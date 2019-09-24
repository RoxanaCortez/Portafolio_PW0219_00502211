function areaCircunferencia(){
    radio=prompt("Ingrese en radio de una circunferencia: ");
    if(radio<=0){
        return -1;
    }
    else{
        let area;
        area = Math.pow(radio,2)* Math.PI;
        return area;
    }
    
}