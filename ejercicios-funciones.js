/**Ejercicios para esta sesion
 *
 * Declara una funcion para cada problema planteado
 *
 * calcular el perimetro de un circulo
 * calcular el area de un rectangulo
 * calcular el cuadrado de un numero
 * calcular la conversion de grados celsius a farenheit
 * calcular el valor del voltaje dadas la resistencia y la corriente
 * calcular el volumen de una esfera
 *
 * CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */

//***************** Ejercicios Funciones con nombre***********************

//!funcion perimetro de un circulo
const pi = 3.1416;
function perimetroCirculo(radio) {
    return `El perimetro del circulo es: ${2 * pi * radio}`;
}

//!funcion area de un rectangulo
function areaRectangulo(largo, alto) {
    return `El area del rectangulo es: ${largo * alto}`;
}

//! funcion cuadrado de un numero
function cuadradoNumero(numero) {
    return `El cuadrado del numero es: ${numero ** 2}`;
}

//!funcion  conversion de grados celsius a farenheit
function celciusFarenheit(celcius) {
    return `La conversion de ${celcius} grados celcius a Farenheit es: ${celcius * 1.8 + 32} `;
}

//! funcion valor del voltaje dadas la resistencia y la corriente
function voltajeOhm(resistencia, corriente) {
    return `El voltaje de la resistencia es : ${resistencia * corriente}`;
}

function volumenEsfera(radio) {
    return `El volumen de la esfera es: ${(radio ** 3 * 4 * pi) / 3}`;
}

console.log(perimetroCirculo(3));
console.log(areaRectangulo(10, 5));
console.log(cuadradoNumero(5));
console.log(celciusFarenheit(60));
console.log(voltajeOhm(500, 1));
console.log(volumenEsfera(8));
