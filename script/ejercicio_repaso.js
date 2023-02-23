// Calcula la suma de todos los números enteros positivos entre 0 y el número tecleado por el usuario.
//cualquier valor es valido
let numeroUsuario = parseFloat(prompt('introduce un numero por teclado'));
console.log('el numero es entero?'+Number.isInteger(numeroUsuario));
if (numeroUsuario < 0) {
} else {
    if (typeof numeroUsuario == 'number' && numeroUsuario>0) {
        let suma = factorial(numeroUsuario);
        console.log(suma);
    } else { let suma = 0; console.log('la suma es ' + suma) }
}

const validar = ()=>{

} 

function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}
//si numero de usuario es menos que cero :
