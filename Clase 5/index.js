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

// function Producto(info){
//   this.nombre = info.nombre;
//   this.precio = info.precio;
//   this.imagen = info.imagen;
//   this.color = info.color;
//   this.peso = info.peso;
// }

// let producto = new Producto({
//   peso: 234,
//   nombre: "monitor",
//   imagen: "asdf",
//   color: "azul",
//   precio: 123,
// });

// let persona1 = {
//   nombre: "Pepito",
//   edad: 34,
//   direccion: "Av",
// };

// for(const clave in persona1){
//   console.log("clave", clave);
//   console.log("valor", persona1[clave]);
// }
/* 
function Producto(nombre, precio, imagen) {
  this.nombre = nombre;
  this.precio = precio;
  this.imagen = imagen;
}
 */

/* class Producto {
  constructor(nombre, precio, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}

let producto1 = new Producto("Monitor gamer ...", 529900, "asdfasdf");
console.log(producto1); */

// class Persona{
//   constructor(nombre, edad, direccion){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
//   }

//   hablar(){
//     console.log(`Hola soy ${this.nombre}`);
//   }
// }

// let persona = new Persona("andres", 90, "AV");
// let persona1 = new Persona("mariano", 90, "AV");
// persona.hablar();
// persona1.hablar();

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.vendido = false;
  }

  vender(){
    this.vendido = true;
  }
}


let producto1 = new Producto("Monitor gamer ...", 529900);
console.log(producto1);

producto1.vender();
console.log(producto1);
