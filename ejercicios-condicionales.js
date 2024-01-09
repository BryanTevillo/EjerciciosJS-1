// Ejercicios para esta sesion

/** Ejercicio 1
 *
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 *
 * Debe recibir como parametro la edad
 *
 * Consideraciones: utilizar la estructura if-else
 */

const edadVotar = (edad) => (edad >= 18 ? "si tienes edad para votar" : "no tienes edad para votar");

console.log(edadVotar(18));

/** Ejercicio 2
 *
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 *
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 *
 * Consideraciones: utilizar la estructura if-else
 *
 */

const promedioAlumno = (calificacion1, califiacion2, califiacion3, califiacion4) => {
    let promedio = (calificacion1 + califiacion2 + califiacion3 + califiacion4) / 4;
    return promedio >= 7 ? "Aprobado" : "Reprobado";
};

console.log(promedioAlumno(5, 7, 3, 9, 10));

/** Ejercicio 4
 *
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 *
 * Debe recibir como parametro un numero, cual sea
 *
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 *
 *
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */
const divisble7Y8 = (numero) => {
    return numero % 7 === 0 && numero % 8 === 0 ? "Verdadero" : "Falso";
};

console.log(divisble7Y8(56));

/** Ejercicio 5
 *
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 *
 * Debe recibir como parametro un numero aleatorio
 *
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 *
 * Consideracion - Utilizar la estructura if-else
 */
const divisble4O9 = (numero) => {
    return numero % 4 === 0 || numero % 9 === 0 ? "Verdadero" : "Falso";
};

console.log(divisble4O9(4));
/** Ejercicio 6
 *
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 *
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 *
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 *
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 *
 * Consideraciones: utilizar la estructura switch
 */

const calculadora = (operacion, numero1, numero2) => {
    switch (operacion.toLowerCase()) {
        case "suma":
            return numero1 + numero2;
        case "resta":
            return numero1 - numero2;
        case "multiplicacion":
            return numero1 * numero2;
        case "division":
            return numero1 / numero2;
        default:
            return "Operacion desconocida";
    }
};

console.log(calculadora("multiplicacion", 10, 20));

/** Ejercicio 7
 *
 * Realizar un programa que reciba como parametro una categoria de peliculas
 *
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 *
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 *
 * Consideraciones: utilizar la estructura switch
 */
const peliculas = (categoria) => {
    switch (categoria.toLowerCase()) {
        case "accion":
            return "Bad Boys 2";
        case "drama":
            return "Lo imposible";
        case "comedia":
            return "Jacuzzi al pasado";
        case "romance":
            return "Cuestion de tiempo";
        case "suspenso":
            return "Los ilusionistas nada es lo que parece";
        case "terror":
            return "El exorcista";
        default:
            return "No tengo esa categoria";
    }
};

console.log(peliculas("comedia"));
/** Ejercicio 8
 *
 * Crear una interfaz de un cajero ATM
 *
 * Debe recibirse como parametro alguna de las siguientes opciones
 *
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 *
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */

/** Ejercicio 9
 *
 * Escribir en codigo un programa conversor de divisas
 *
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 *
 * 1. A dolares estadounidenses
 * 2. A euros
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 *
 * Consideracion: estructura switch
 *
 */

/** Ejercicio 10
 *
 * Realizar un programa que calcule un descuento del 10% a un producto si se ingresa el codigo
 * de descuento correcto
 *
 * Debe recibir como parametros el precio del producto
 * y el codigo de descuento
 *
 * Sugerencia de codigo de descuento DESCUENTO10
 *
 * Consideracion: utilizar la estructura if-else
 *
 */
