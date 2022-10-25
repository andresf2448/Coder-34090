/* 
estructura de una funcion

function nombreFuncion(){
  codigo de la funcion
}
*/

/* function saludar(){
  console.log("Hola mundo");
}

saludar(); */

/* function pedirNombre(){
  let apellido = prompt("Ingrese su apellido");
  let mensaje = `Hola su nombre es ${apellido}`;
  alert(mensaje);
}

pedirNombre(); */

/* 
estructura de una funcion con parametros

function nombreFuncion(parm1, parm2, ..., parmn){
  codigo de la funcion
}
*/

/* function sumar(numero1, numero2){
  let mensaje = "hola";
  console.log(numero1 + numero2);
}

sumar(5, 10);
sumar(6, 10); */

/* function mensajes(cadena1, cadena2){
  console.log(`${cadena1} ${cadena2}`);
}

mensajes("Hola", "muchachos");
mensajes("1", "asdfasdf"); */

/* function calculadora(numero1, numero2, operacion) {
  switch (operacion) {
    case "+":
      console.log(numero1 + numero2);
      break;

    case "-":
      console.log(numero1 - numero2);
      break;

    case "*":
      console.log(numero1 *numero2);
      break;

    case "/":
      console.log(numero1 / numero2);
      break;

    default:
      console.log("Operacion no valida");
      break;
  }
}

calculadora(5, 7, "*");
calculadora(5, 7, "-"); */

/* function sumar(numero1, numero2){
  console.log(numero1 + numero2);
}

let resultado = sumar(3, 4);
console.log("resultado", resultado); */

/* function sumar(numero1, numero2){
  return numero1 + numero2;
}

let resultado = sumar(3, 4);
console.log("resultado", resultado);


armado                 pintar                ropa y colocar e4n el stock */

function calculadora(numero1, numero2, operacion) {
  switch (operacion) {
    case "+":
      return numero1 + numero2;
      break;

    case "-":
      return numero1 - numero2;
      break;

    case "*":
      return numero1 * numero2;
      break;

    case "/":
      return numero1 / numero2;
      break;

    default:
      return "Operacion no valida";
      break;
  }
}

let numero1 = parseInt(prompt("Ingrese el numero 1"));
let numero2 = parseInt(prompt("Ingrese el numero 2"));
let operacion = prompt("Ingrese la operacion");

let resultado = calculadora(numero1, numero2, operacion);
alert(resultado);

/* function sumar(numero1, numero2){
  console.log("hola");
  return numero1 + numero2;
  console.log("chao");
}

console.log(sumar(2,3)); */

/* {
  let resultado = 0;
}

console.log(resultado); */

/* function sumar(numero1, numero2) {
  let resultado = numero1 + numero2;
  return resultado;
}

sumar(5, 6);

console.log(resultado); */
/* 
{
  let nombre = "andres";
}
console.log(nombre); */

/* function sumar(x, y){
  let resultado = x + y;
  return resultado;
}

function restar(x, y){
  let resultado = x - y;
  return resultado;
} */

/* let suma = function (a, b) {
  return a + b;
};

console.log(suma(3, 4)); */

//funcion flecha o arrow function

/* console.log(suma(5, 6)); */

// let suma = (a, b) => {return a + b};
/* function suma(x,y){
  return x + y;
}

let suma = (a, b) => a + b; */
function calculadora(numero1, numero2, operacion){

}

let calculadora = (numero1, numero2, operacion) => {

}

let calculadora = (numero1, numero2, operacion) => {
  switch (operacion) {
    case "+":
      return numero1 + numero2;
      break;

    case "-":
      return numero1 - numero2;
      break;

    case "*":
      return numero1 * numero2;
      break;

    case "/":
      return numero1 / numero2;
      break;

    default:
      return "Operacion no valida";
      break;
  }
}