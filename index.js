/** Ejercicio para esta sesion
 *
 * Declarar 10 variables de cada tipo de dato sin tomar en cuenta objetos, arrays y null
 * Pueden variar entre las palabras reservadas var, let y const
 *      -number
 *      -string
 *      -boolean
 */

//Numericas
var edad = 25;
var temperatura = 30.5;
var deuda = -2000;
var cantidadProductos = 100;
var hexadecimal = 0xff;
let notacionExponencial = 42e3;
let ejemploEntero = 100000000;
const numeroAureo = 1.618;
const pi = 3.1416;
const piNegativo = -3.1426;
//Representacion en consola  numerico:D
console.log(edad);
console.log(temperatura);
console.log(deuda);
console.log(cantidadProductos);
console.log(hexadecimal);
console.log(notacionExponencial);
console.log(ejemploEntero);
console.log(numeroAureo);
console.log(pi);
console.log(piNegativo);

//String
var saludo = "Hola";
var despedida = "Adiós";
var plantilla = `Texto con plantilla`;
let lenguajeProgramacion = "JavaScript";
let pais = "Mexico";
const cadenaUnicode = "Cadena con caracteres especiales: \u00A9";
const cadenaLarga = "Una cadena más larga para demostrar longitud";
const cadenaVacia = "";
const cadenaNumerica = "12345";
const cadenaBooleana = "true";

//Representacion en consola String
console.log(saludo);
console.log(despedida);
console.log(plantilla);
console.log(lenguajeProgramacion);
console.log(pais);
console.log(cadenaUnicode);
console.log(cadenaLarga);
console.log(cadenaVacia);
console.log(cadenaNumerica);
console.log(cadenaBooleana);

//Bopleano
var esDia = true;
var esNoche = false;
var esMayor = 10 > 5;
let esIgual = 3 === 5;
let esMenor = 1 < 0;
const esMayorIgual = 5 >= 5;
const noEsIgual = 100 !== "100";
const yLogico = true && false;
const oLogico = false || true;
const negacion = !esDia;

//Representacion en consola boolean

console.log(esDia);
console.log(esNoche);
console.log(esMayor);
console.log(esIgual);
console.log(esMenor);
console.log(esMayorIgual);
console.log(noEsIgual);
console.log(yLogico);
console.log(oLogico);
console.log(negacion);

/*
 * Declarar variables numericas y realizar las operaciones aritmeticas basicas
 *      -suma
 *      -resta
 *      -multiplicacion
 *      -division
 *
 */

//Operaciones aritmeticas con las variables numericas

//SUMA
const suma = edad + numeroAureo;
console.log(suma);

//RESTA
const resta = pi - numeroAureo;
console.log(resta);

//MULTIPLICACION
const multiplicacion = temperatura * deuda;
console.log(multiplicacion);

//DIVISIOM
const division = edad / pi;
console.log(division);

/*
 * Declarar variables que concatenen cadenas de texto
 *      -5 mensajes diferentes en pantalla, sin limite de palabras.
 *
 */
//Mensaje N°1
const saludoyDespedida = saludo + " " + despedida;
console.log(saludoyDespedida);

//Mensaje N°2
const textoNumerioBoleano = cadenaNumerica + " " + cadenaBooleana;
console.log(textoNumerioBoleano);

//Mensaje N°3
const textoPaisPlantilla = pais + " " + plantilla;
console.log(textoPaisPlantilla);

//Mensaje N°4
const textoCadenaLargaBooleano = cadenaLarga + " " + cadenaBooleana;
console.log(textoCadenaLargaBooleano);

//Mensaje N°5
const textoTodo = saludo + despedida + plantilla + lenguajeProgramacion + pais + cadenaBooleana + cadenaLarga + cadenaNumerica + cadenaUnicode + cadenaVacia;
console.log(textoTodo);

/*
 * Declarar 5 variables y convertirlas a otro tipo de dato
 *
 *  CONSIDERACIONES: poner en practica las mejores practicas para declaracion de variables.
 * Imprimir los resultados en pantalla con un console.log()
 */
