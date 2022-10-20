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

for (let i = 1; i <= 10; i++) {
  let covid = prompt("tiene covid? ingrese no o si").toLowerCase();

  if (covid === "si") {
    alert("usted tiene covid puede recibir el medicamento pasciente " + i);
    continue;
  } else {
    alert("usted no puede recibir el medicamento" + i);
  }
}
