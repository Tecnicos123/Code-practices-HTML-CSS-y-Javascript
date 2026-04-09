// Crea una función declarada que reciba dos números como parámetros y retorne la suma de ambos.

// 1. Declaramos la función con la palabra 'function' y le damos un nombre: 'sumar'.
// 2. Recibe dos parámetros: 'a' y 'b'.
// 3. Retornamos el resultado de 'a + b'.

function sumar(a, b) {
    return a + b;
}

// Para pedir números al usuario con ventanas emergentes:

let num1 = prompt('Ingresa el primer número:');
let num2 = prompt('Ingresa el segundo número:');
const resultado = sumar(parseFloat(num1), parseFloat(num2));
alert('La suma es: ' + resultado);