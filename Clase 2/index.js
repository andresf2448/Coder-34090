/* 
estructura del condicional if
if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}
*/

/* let nombre = "mariano";

if(nombre === "andres"){
  console.log("hola mariano");
}

console.log("proceso finalizado"); */

/* 
= asignación
== comparación (solo compara el valor y no el tipo)
=== comparación (compara tanto el tipo como el valor)
*/

/* let nombre = prompt("ingrese el nombre");

if(nombre === "mariano"){
  alert("Hola Mariano");
} */

/* if("0"){
  console.log("entramos");
} */

/* let respuesta = prompt("Terminaste la tarea");

if(respuesta === "si"){
  alert("puedes salir a jugar");
} */

/* 
estructura del if else
if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}else{
  codigo a ejecutar cuando la condicion es falsa
}
*/

/* let respuesta = prompt("Terminaste la tarea");

if(respuesta === "si"){
  alert("puedes salir a jugar");
}else{
  alert("No puedes salir");
} */

/* 
estructura del if else if (condicionales anidados)
if(condicion1){
  codigo a ejecutar si la condicion1 es verdadera
}else if(condicion2){
  codigo a ejecutar si la condicion1 es falsa y la condicion2 es verdadera
}else if(condicion3){
  codigo a ejecutar si la condicion1 y condicion2 son falsas y la condicion3 es verdadera
}else{
  codigo a ejecutar cuando las anteriores condiciones son falsas
}
*/

/* let edad = parseInt(prompt("Ingrese la edad"));

if(edad < 15){
  alert("no puedes entrar a la fiesta");
}else if(edad < 18){
  alert("puedes entrar pero con un adulto");
}else{
  alert("Puedes entrar a la fiesta");
} */

/* 
condicion1 && condicion2 es verdadero siempre que las condiciones en cuestión sean verdaderas

condicion1 || condicion2 es verdadero cuando al menos una de las condiciones sea verdadera
*/

/* let nombre = prompt("Ingrese su nombre");

if(nombre != "" && nombre === "pepito"){
  alert("Bienvenido pepito");
}else{
  alert("Nombre incorrecto");
} */

let nombre = prompt("Ingrese su nombre").toUpperCase();

if(nombre === "PEPITO"){
  alert("Bienvenido pepito");
}else{
  alert("Nombre incorrecto");
}