// setItem setea o guarda en el storage
// localStorage.setItem("nombre", "pepito");
// localStorage.setItem("valor", "true");
// localStorage.setItem("numero", 234234);

//getItem recupera información del Storage
// let nombre = localStorage.getItem("nombre");
// console.log(nombre);

// let numero = localStorage.getItem("numero");
// console.log(numero);

// let persona = {nombre: "andres", edad: 45};
// localStorage.setItem("persona", persona);

// sessionStorage.setItem("nombre", "manuel");

// for(let i = 0; i < localStorage.length; i++){
//   let clave = localStorage.key(i);
//   console.log("clave", clave);
//   console.log("valor", localStorage.getItem(clave));
// }

//localStorage.removeItem(clave) //elimina un elemento del storage
//localStorage.clear() //elimina todo el storage

// let persona = {nombre: "andres", edad: 45};
// localStorage.setItem("persona", persona);

// let nombres = ["camila", "mariana"];
// localStorage.setItem("nombres", nombres);

/* let persona = {nombre: "andres", edad: 45};
localStorage.setItem("persona", JSON.stringify(persona));

let recuperado = JSON.parse(localStorage.getItem("persona"));
console.log(recuperado); */

// let productos = [
//   {nombre: "camisa", precio: 1000},
//   {nombre: "zapato", precio: 700},
// ];

// localStorage.setItem("carrito", JSON.stringify(productos));

// let carrito = JSON.parse(localStorage.getItem("carrito"));
// console.log(carrito);

// carrito.forEach(element => {
//   console.log(element.nombre);
// });

// const productos = [
//   { id: 1, producto: "Arroz", precio: 125 },
//   { id: 2, producto: "Fideo", precio: 70 },
//   { id: 3, producto: "Pan", precio: 50 },
//   { id: 4, producto: "Flan", precio: 100 },
// ];

// const guardarLocal = (clave, valor) => {
//   localStorage.setItem(clave, valor);
// };
// //Almacenar producto por producto
// for (const producto of productos) {
//   guardarLocal(producto.id, JSON.stringify(producto));
// }

// let usuario;
// let usuarioStorage = sessionStorage.getItem("usuario");

// if(usuarioStorage){
//   usuario = usuarioStorage;
//   let mensaje = `Bienvenido nuevamente ${usuario}`;
//   alert(mensaje);
// }else{
//   usuario = prompt("por favor ingrese su usuario");
//   alert("Bienvenido por primera vez");
//   sessionStorage.setItem("usuario", usuario);
// }

// let carrito = [
//   { id: 1, nombre: "Arroz", precio: 125 },
//   { id: 2, nombre: "Fideo", precio: 70 },
//   { id: 3, nombre: "Pan", precio: 50 },
//   { id: 4, nombre: "Flan", precio: 100 },
// ];
// localStorage.setItem("carrito", JSON.stringify(carrito));

// let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

// if(carritoStorage.length > 0){
//   carrito = carritoStorage;
// }else{
//   let div = document.createElement("div");
//   div.innerHTML = "No hay productos en el carrito";

//   document.body.append(div);
// }

// carrito.forEach(item => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <h2>ID: ${item.id}</h2>
//     <p>Nombre: ${item.nombre}</p>
//     <b>$${item.precio}</b>
//   `;

//   document.body.append(div);
// });

let carrito = [
  { id: 1, nombre: "Arroz", precio: 125 },
  { id: 2, nombre: "Fideo", precio: 70 },
  { id: 3, nombre: "Pan", precio: 50 },
  { id: 4, nombre: "Flan", precio: 100 },
];

carrito.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
      <h2>ID: ${item.id}</h2>
      <p>Nombre: ${item.nombre}</p>
      <b>$${item.precio}</b>
      <button id="boton${item.id}">Agregar</button>
    `;

  document.body.append(div);

  let boton = document.getElementById(`boton${item.id}`);
  const ejecutar = (id) => {
    console.log(id);
  } 
  boton.addEventListener("click", () => ejecutar(item.id))
});
