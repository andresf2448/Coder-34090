/* 
estructura del bucle for

for(desde; hasta; actualizacion){
  codigo a repetir
}
*/

/* for (let i = 0; i < 100; i = i + 4) {
  console.log("hola");
} */

/* let numero = parseInt(prompt("Ingrese un número"));

for(let i = 1; i <= 10; i++){
  let resultado = numero * i;
  let mensaje = `${numero} X ${i} = ${resultado}`;
  alert(mensaje);
} */

/* for(let turno = 1; turno <= 10; turno++){
  let nombre = prompt("Ingrese su nombre para signar un turno");
  let mensaje = `Turno #${turno} Nombre: ${nombre}`;
  alert(mensaje);
} */

//BREAK
/* for(let i = 1; i <= 10; i++){
  if(i === 5){
    console.log("entramos al break");
    break;
  }

  console.log("Hola a todos", i);
}

console.log("proceso finalizado"); */

//CONTINUE
/* for(let i = 1; i <= 10; i++){
  if(i === 5){
    continue;
  }
  console.log(i);
} */

/* for (let i = 1; i <= 10; i++) {
  let covid = prompt("tiene covid? ingrese no o si").toLowerCase();

  if (covid === "si") {
    alert("usted tiene covid puede recibir el medicamento pasciente " + i);
    continue;
  } else {
    alert("usted no puede recibir el medicamento" + i);
  }
} */

//WHILE
/* 
estructura del while
while(condicion){
  codigo a repetir siempre y cuando la condicion sea verdadera
}
*/
/* 
CUIDADO BLUCLE INFINITO
let repetir = true;

while(repetir){
  console.log("hola");
} */

/* let usuario = prompt("Ingrese el usuario");

while(usuario != "andres"){
  alert("Usuario incorrecto");
  usuario = prompt("Ingrese el usuario");
}

alert("Bienvenido"); */

/* let entrada = prompt("Ingresar un dato");

while (entrada != "ESC") {
  alert("El usuario ingresó " + entrada);
  entrada = prompt("Ingresar otro dato");
} */

//DO WHILE
/* 
estructura del do while

do{
  codigo a ejecutar por primera vez y continua si la condicion es verdadera
}while(condicion);
*/

let valor = true;

/* while(valor){
  console.log("hola");
} */

/* do{
  console.log("hola");
}while(valor); */

//SWITCH
/* 
estructura del switch

switch(valor){
  case valor1:
    codigo a ejecutar para el caso en que valor es valor1
    break;
  
  case valor2:
    codigo a ejecutar para el caso en que valor es valor2
    break;

  default:
    codigo a ejecutar cuando el valor no coincide con ninguno de los valores anteriores
    break;
}
*/

/* let moneda = "cop";

switch (moneda) {
  case "ars":
    console.log("moneda de argentina");
    break;

  case "cop":
    console.log("moneda de colombia");
    break;

  default:
    console.log("no se reconoce el país de la moneda");
    break;
} */

let entrada = prompt("Ingresar un nombre");

while(entrada != "ESC" ){
   switch (entrada) {
       case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
       default:
           alert("¿QUIÉN SOS?")
           break;
   }
   entrada = prompt("Ingresar un nombre");
}