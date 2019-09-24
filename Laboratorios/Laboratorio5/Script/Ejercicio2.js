function sumaPromedio(arreg){
    let suma=0, prom=0;
    arreg.forEach((element) => {
        suma+=element;
    });
    prom=suma/(arreg.length);
    return console.log("La suma es ",suma +" y el promedio es ",prom);
}