
// asi se escribe un comentario en linea

/* asi se escribe un comentario
en varias lineas */

console.log("hola mundo"); // se muestra en la consola del navegador

//------------------------------------------------------------------------------

//variables:

// var es la manera en como se declaraban las variables antes de ES6
var numero = 19;

// a partir de ES6 nacieron 2 maneras de declarar variables --> let y const
let primerNumero = 1; // variable la cual vamos a poder modificar cuando sea necesario
console.log(primerNumero);

primerNumero = 2;
console.log(primerNumero);

/* const a diferencia de let es una variable que indica que el dato permanece de manera 
constante, no podra ser modificado */
// se suelen escribir en mayuscula y se utilizan guiones bajos
const CONSTANTE_NUMERO = 4;
console.log(CONSTANTE_NUMERO);

CONSTANTE_NUMERO = 5;
console.log(CONSTANTE_NUMERO); //da error, porque las constantes no cambian el dato

//------------------------------------------------------------------------------

//declaracion - inicializacion

let nombre; // declarar la variable

nombre = "Marco"; // inicializacion

//-------------------------------------------------------------------------------

// TIPOS DE DATOS:

let numero = 1; // tipo numerico
let string = "cadena de caracteres"; //cadena de caracteres, se escriben entre ""
let boolean = true; // 2 tipos de datos: true - false

//-------------------------------------------------------------------------------

// DATOS NUMERICOS --> operadores aritmeticos 
// numeros enteros = 10 / numeros florantes = 10.5 (decimales)

/*
SUMA = +
RESTA = -
MULTIPLICACION = *
DIVISION = /
RESTO O MODULO = % 
INCREMENTO = ++
DECREMENTAR = --
*/

//-----------------------------------------------------------------------------

let suma = 5 + 3; // guarda el resultado, no la operacion
console.log(suma); 

//-----------------------------------------------------------------------------

let numero1 = 1;
let numero2 = 5;

let resultado = numero1 + numero2; // una variable creada con 2 otras variables
console.log(resultado);

//----------------------------------------------------------------------------

// DATOS STRINGS

let nombre0 = "Marco";
let apellido = "Belsito";
let vacio =  " "; // espacio

let nombreApellido = nombre0 + apellido;
console.log(nombreApellido);
console.log("hola, mi nombre es " + nombre0 + " " + apellido + " y fui top 10");

//----------------------------------------------------------------------------

// ademas de console.log, otras 2 funciones pueden ser prompt y alert

// prompt se utiliza para pedir un dato
// alert para reflejar el dato capturado

let nombre1 = prompt("ingresa tu nombre");
console.log(nombre1); // en la linea de arriba te pide ingresar tu nombre y luego lo vemos en la consola

//-------------------------------------------------------------------------------

let numeroUno = prompt("ingresa tu numero");
let numeroDos = prompt("ingresa tu otro numero");

let resultadoo = numeroUno + numeroDos;

alert(resultadoo); // no da el resultado porque prompt es de tipo string

// hay que usar otra funcion  llamada parseInt() que lo que contenga lo convierte en dato de tipo numero
// seria:

let numeroUnoNuevo = parseInt(prompt("ingresa tu numero"));
let numeroDosNuevo = parseInt(prompt("ingresa tu otro numero"));

let resultadoNuevo = numeroUnoNuevo + numeroDosNuevo;

alert(resultadoNuevo);

//------------------------------------------------------------------------------------

// ejercicio:
// pidele al usuario que ingrese 3 numeros
// luego realiza la siguiente operacion:

// primero que el numero1 se sume con el numero2
// y que el resultado se multiplique por numero3
// y luego numero2 se divida por numero1

// que todo esto muestre un resultado en un alert
