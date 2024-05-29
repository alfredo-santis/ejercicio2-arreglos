
//1. array vacio
/*

var array = [];

// Generar 10 números al azar y guardarlos en el array
array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

// Mostrar en consola el resultado del array
console.log(array);

*/

//2. ingresar un string
/*
// Mostrar un popup al usuario para ingresar un string
var userInput = prompt("Ingrese varias palabras separadas por coma:");

// Convertir el string ingresado en un array, eliminando espacios innecesarios
var resultArray = userInput.split(',').map(item => item.trim());


console.log(resultArray);
*/

//3. arreglo ordenado


let arr = [10, 40, 30, 20, 15, 5];

// Ordenar el arreglo de menor a mayor
// .slice() crea una copia para no modificar el original
let sortedArr = arr.slice().sort((a, b) => a - b); 


let minNum = sortedArr[0];

// Obtener el número mayor (último elemento del arreglo ordenado)
let maxNum = sortedArr[sortedArr.length - 1];

// Imprimir el arreglo ordenado
console.log("Arreglo ordenado de menor a mayor:", sortedArr);

// Imprimir el número menor
console.log("Número menor:", minNum);


console.log("Número mayor:", maxNum);
