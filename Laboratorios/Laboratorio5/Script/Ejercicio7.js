function serieFibonacci(n){
    var a=0;
    var b=1;
    var c = a + ',';
    for(let i=0; i<n-1;i++){
        var aux = a;
        a = b;
        b = aux + b;
        c = c + a + ',';
    }
    return c;
 }