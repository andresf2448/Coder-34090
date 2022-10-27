/* let nombre = "Pepito";
let edad = 34;
let direccion = "AV"; */

/* 
estructura de un objeto
{
  clave1: valor1,
  clave2: valor2, 
  clave3: valor3, 
  ..., 
  claven: valorn
};
*/

// let persona1 = {
//   nombre: "Pepito",
//   edad: 34,
//   direccion: "Av"
// };

// console.log(persona1.nombre);
// console.log(persona1.edad);
// console.log(persona1.direccion);

// let clave = prompt("Ingrese una propiedad");
// console.log(persona1[clave]);
// console.log(persona1["edad"]);
// console.log(persona1["direccion"]);

// let persona1 = {
//   nombre: "Pepito",
//   edad: 34,
//   direccion: "Av",
// };

// console.log(persona1);

// //para agregar propiedades
// persona1.colorCabello = "rojo";
// persona1["colorOjos"] = "verde";

// console.log(persona1);

//Constructores
/* function Persona(nombrePersona, edadPersona, direccionPersona) {
  this.nombre = nombrePersona;
  this.edad = edadPersona;
  this.direccion = direccionPersona;
}

let persona1 = new Persona("Pepito", 34, "AV");
let persona2 = new Persona("Fabian", 45, "AV");
console.log(persona1.nombre);
console.log(persona2.nombre); */

// function Producto(nombre, precio, imagen){
//   this.nombre = nombre;
//   this.precio = precio;
//   this.imagen = imagen;
// }

// let producto1 = new Producto("Monitor gamer ...", 529900, "asdfasdf");

// let mensaje = `
//   ${producto1.nombre}
//   ${producto1.precio}
// `;

// alert(mensaje);

function Producto(info){
  this.nombre = info.nombre;
  this.precio = info.precio;
  this.imagen = info.imagen;
  this.color = info.color;
  this.peso = info.peso;
}

let producto = new Producto({
  peso: 234,
  nombre: "monitor",
  imagen: "asdf",
  color: "azul",
  precio: 123,
});