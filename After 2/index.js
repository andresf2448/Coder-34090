//Storage
/* 
localStorage  ---  sessionStorage
setItem(clave, valor); guarda en el storage el elemento valor iddentificado con clave
getItem(clave); traer del storage el elemento identificado por la clave
removeItem(clave); Elimina el elemento identificado por la clave
clear(); elimina todo el storage
JSON.stringify(valor); da formato JSON a el valor para poder agregar al storage
JSON.parse(valor); recuperar la estructura original del elemento
*/

/* let productos = [
  { id: 1, nombre: "Arroz", precio: 125 },
  { id: 2, nombre: "Fideo", precio: 70 },
  { id: 3, nombre: "Pan", precio: 50 },
  { id: 4, nombre: "Flan", precio: 100 },
];

localStorage.setItem("productos", JSON.stringify(productos)); */

/* const modificarPrecioProducto = (nombre, precio) => {
  let productosStorage = JSON.parse(localStorage.getItem("productos"));
  let producto = productosStorage.find(item => item.nombre === nombre);

  producto.precio = precio;

  localStorage.setItem("productos", JSON.stringify(productosStorage));
};

let nombre = prompt("Ingrese el nombre");
let precio = parseInt(prompt("Ingrese el precio"));

modificarPrecioProducto(nombre, precio); */

const eliminarProducto = (id) => {
  let storageProductos = JSON.parse(localStorage.getItem("productos"));
  let nuevoStorage = storageProductos.filter(item => item.id != id);

  localStorage.setItem("productos", JSON.stringify(nuevoStorage));
};

let id = parseInt(prompt("Ingrese el id del producto a elminar"));
eliminarProducto(id);