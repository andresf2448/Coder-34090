/* let edad = 45;
let nombre = "andres";
let apellido = 'ruiz';

console.log(typeof(edad));
 */

/* let edad = parseInt(prompt("Ingrese la edad"));

if(edad <= 15){
  alert("tienes 15 o menos");
}else if(edad < 18){
  alert("tienes más de 15 y menos de 18");
}else{
  alert("tienes 18 o más");
} */

/* let entrada = prompt("Ingrese un dato");

while(entrada != "ESC"){
  let mensaje = `el usuario ingresó ${entrada}`;
  alert(mensaje);

  entrada = prompt("Ingrese un dato");
} */

/* for(let i = 0; i < 10; i++){
  console.log(i);
} */

/* function sumar(x, y){
  return x + y;
}

let resultado = sumar(5, 6);
console.log(resultado); */

/* const sumar = (x, y) => x + y;
let resultado = sumar(5, 6);
console.log(resultado); */

/* let persona = {
  nombre: "pepito",
  edad: 50
};

console.log(persona); */

/* function Persona(nombre, edad){
  this.nombre = nombre;
  this.edad = edad;
  this.hablar = function () {console.log(`hola soy ${this.nombre}`);}
} */

/* class Persona{
  constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
  }

  hablar(){
    console.log(`hola soy ${this.nombre}`);
  }
}

let persona1 = new Persona("pepito", 40);
console.log(persona1);
console.log(persona1.nombre);
console.log(persona1["edad"]);
persona1.hablar(); */

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 1000 },
//   { id: 3, nombre: "gorra", precio: 1000 },
//   { id: 4, nombre: "pantalon", precio: 1000 },
// ];

//forEach
// productos.forEach(item => console.log(item));

//find
// let encontrado = productos.find(item => item.nombre === "zapato");
// console.log(encontrado);

//filter
// let filtrados = productos.filter(item => item.estado === "invierto");

//map
// let preciosActualizados = productos.map(item => {
  // return {
    // id: item.id,
    // nombre: item.nombre,
    // precio: item.precio - 300
  // }
// });

// console.log(preciosActualizados);

// localStorage.setItem("nombre", "andres");
// localStorage.getItem("nombre");
// localStorage.setItem("objeto", JSON.stringify({nombre: "andres", edad: 34}));

// let persona = JSON.parse(localStorage.getItem("objeto"));

// let formulario = document.getElementById("formulario");
// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let inputs = e.target.children;
//   console.log(inputs[0].value);
//   console.log(inputs[1].value);
// });