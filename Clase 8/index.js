//getElementById
// let div = document.getElementById("aplicacion");
// console.log(div.innerHTML);
// console.log(div.innerText);

// let parrafo = document.getElementById("parrafo");
// console.log(parrafo.innerHTML);
// console.log(parrafo.innerText);

//getElementsByClassName
// let perritos = document.getElementsByClassName("perritos");
// console.log(perritos[0].innerHTML);
// console.log(perritos[2].innerHTML);
// console.log(perritos[1].innerHTML);

//getElementsByTagName
// let divs = document.getElementsByTagName("div");
// console.log(divs[0].innerHTML);
// console.log(divs[1].innerHTML);
// console.log(divs[2].innerHTML);

// let perritos = document.getElementsByClassName("perritos");

// for(const perrito of perritos){
//   console.log(perrito.innerHTML);
// }

// let saludo = document.getElementById("saludo");
// saludo.innerHTML = "<h1>Coder</h1>";
// saludo.className = "verde";

/* let seccion = document.getElementById("seccion");
let lugar = prompt("Ingrese la seccion que desea");

if(lugar === "carrito"){
  seccion.innerHTML = "<h1>Bienvenid@ al carrito</h1>";
  seccion.className = "verde";
}else if(lugar === "favoritos"){
  seccion.innerHTML = "<h1>Bienvenid@ a los favoritos</h1>";
  seccion.className = "amarillo";
}else{
  seccion.innerHTML = "<h1>Bienvenid@ a nuestra página</h1>";
  seccion.className = "azul";
} */

//Agregar nodos
// 1. creación de la etiqueta
// 2. asignación de contenido
// 3. asignación del padre

// let contenedor = document.getElementById("contenedor");
// let parrafo = document.createElement("p");
// parrafo.innerHTML = "<h1>Hola a todos</h1>";
// document.body.append(parrafo);
// contenedor.append(parrafo);

//Eliminar nodos
// let contenedor = document.getElementById("contenedor");
// contenedor.remove();

// let personas = ["andres", "camila", "simon", "sofia", "celeni"];
// let contenedor = document.getElementById("contenedor");

// personas.forEach(persona => {
//   let li = document.createElement("li");
//   li.innerHTML = persona;
//   contenedor.append(li);
// });

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 700 },
//   { id: 3, nombre: "zapato", precio: 1350 },
//   { id: 4, nombre: "gorra", precio: 300 },
//   { id: 4, nombre: "gorra", precio: 300 },
// ];
// let contenedor = document.getElementById("contenedor");

// productos.forEach(producto => {
//   let item = document.createElement("div");
//   item.innerHTML = `
//     <h2>ID: ${producto.id}</h2>
//     <p>Nombre: ${producto.nombre}</p>
//     <b>$${producto.precio}</b>
//   `;
//   item.className = "asldkjfgasdf";
//   contenedor.append(item);
// });

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 700 },
  { id: 3, nombre: "zapato", precio: 1350 },
  { id: 4, nombre: "gorra", precio: 300 },
  { id: 4, nombre: "gorra", precio: 300 },
];
let contenedor = document.getElementById("contenedor");

let precio = parseInt(prompt("Ingrese el precio mínimo"));
let filtrados = productos.filter(item => item.precio >= precio);

filtrados.forEach(producto => {
  let item = document.createElement("div");
  item.innerHTML = `
    <h2>ID: ${producto.id}</h2>
    <p>Nombre: ${producto.nombre}</p>
    <b>$${producto.precio}</b>
  `;
  contenedor.append(item);
});