//primera opcion
// let boton = document.getElementById("boton");
// boton.addEventListener("click", () => console.log("dimos click"));

//segunda opcion
// let boton = document.getElementById("boton");
// boton.onclick = () => console.log("dimos click");

// let boton = document.getElementById("boton");
// let evento = prompt("Ingresa el evento");
// boton.addEventListener(evento, () => console.log("dimos click"));

// let boton = document.getElementById("boton");
// const ejecutar = (nombre) => {
//   console.log("nombre ", nombre);
// };

// boton.addEventListener("dblclick", () => ejecutar("andres"));

/* oton = document.getElementById("boton");
// boton.addEventListener("mousedown", () => console.log("mousedown"));` //cuando se presiona
// boton.addEventListener("mouseup", () => console.log("mouseup")); // cuando se suelta
let contenedor = document.getElementById("contenedor");

boton.addEventListener("mouseover", () => { //cuando paso sobre el elemento
  contenedor.innerHTML = "Hola a todos";
}); // cuando se suelta
 */

// boton.addEventListener("mouseout", () => console.log("mouseout"));// cuando salgo del elemento

// boton.addEventListener("mousemove", () => console.log("mousemove"));// cuando camino sobre el elemento
// let saludo = document.getElementById("saludo");
// boton.addEventListener("mousedown", () => {
//   saludo.className = "rojo";
// });

// boton.addEventListener("mouseup", () => {
//   saludo.className = "azul";
// });

//EVENTOS DEL TECLADO
/* let nombre = document.getElementById("nombre");
// nombre.addEventListener("keydown", () => console.log("keydown")); //presiono
// nombre.addEventListener("keyup", () => console.log("keyup")); //presiono
let saludo = document.getElementById("saludo");
nombre.addEventListener("keyup", (e) => {
  if (e.key === "a") {
    saludo.className = "rojo";
  } else if (e.key === "s") {
    saludo.className = "verde";
  } else if (e.key === "d") {
    saludo.className = "amarillo";
  } else {
    saludo.className = "azul";
  }
}); */
// let saludo = document.getElementById("saludo");
// let input1 = document.getElementById("nombre");
// input1.addEventListener("input", () => {
//   if (!input1.value.includes("@")) {
//     saludo.className = "rojo";
//   } else {
//     saludo.className = "azul";
//   }
// });

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  
  let inputs = e.target.children;
  
  if(!inputs[0].value.includes("@")){
    inputs[0].value = "";
  }
})