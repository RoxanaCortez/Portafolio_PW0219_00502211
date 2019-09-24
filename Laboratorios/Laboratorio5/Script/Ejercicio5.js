function palabraPalindromo(palabra){
    let n = palabra.length
	for (var i=0;i<n;i++){
		if(palabra[i]!=palabra[n-i-1]){
			return console.log("No es palindromo");
		}
	}
	return console.log("Es palindromo");
}