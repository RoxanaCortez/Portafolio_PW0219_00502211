function decimalBinario(n){
    var arr = [];
    while(n >= 2) {
        arr.push(n % 2);
        n = Math.floor(n / 2);
    }
    arr.push(n % 2);
    arr.push(Math.floor(n / 2));
    return (arr.reverse().join("")-'0');
}