// function mayorQue(n){
//   return m => m > n;
// }

// let mayorQueCinco = mayorQue(5); //m => m > 5;
// console.log(mayorQueCinco(6));
// console.log(mayorQueCinco(3));

// const operaciones = (op) => {
//   if (op === "sumar") {
//     return (a, b) => a + b;
//   }

//   if (op === "restar") {
//     return (a, b) => a - b;
//   }

//   if (op === "multiplicar") {
//     return (a, b) => a * b;
//   }

//   if (op === "dividir") {
//     return (a, b) => a / b;
//   }
// }

// let suma = operaciones("sumar");
// console.log(suma(5,6));

// let resta = operaciones("restar");
// console.log(resta(6,9));

// function iterador(arreglo, funcion) {
//   for (const numero of arreglo) {
//     funcion(numero);
//   }
// }

// iterador([1, 2, 3, 4, 5, 9], console.log);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 1000 },
//   { id: 3, nombre: "gorra", precio: 1000 },
//   { id: 4, nombre: "pantalon", precio: 1000 },
// ];

//forEach recorre un arreglo
// productos.forEach(item => {
//   console.log(item);
//   console.log(item.id);
//   console.log(item.nombre);
//   console.log(item.precio);
// });

//find encuentra el primer elemento que cumpla la condicion
// let nombre = prompt("Ingrese el nombre del producto");
// let encontrado = productos.find(producto => producto.nombre === nombre);

// if(encontrado){
//   let mensaje = `
//     id: ${encontrado.id}
//     nombre: ${encontrado.nombre}
//     $${encontrado.precio}
//   `;

//   alert(mensaje);
// }else{
//   alert("Producto no encontrado");
// }

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 700 },
//   { id: 3, nombre: "gorra", precio: 1500 },
//   { id: 4, nombre: "pantalon", precio: 300 },
// ];

//filter filtra los elementos que cumplan la condicion
// let precio = parseInt(prompt("Ingrese el precio mínimo"));
// let filtrados = productos.filter(producto => producto.precio > precio);

// filtrados.forEach(item => {
//   let mensaje = `
//     id: ${item.id}
//     nombre: ${item.nombre}
//     $${item.precio}
//   `;

//   alert(mensaje);
// });

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 700 },
//   { id: 3, nombre: "gorra", precio: 1500 },
//   { id: 4, nombre: "pantalon", precio: 300 },
// ];

//devuelve true o false dependiendo si existe al menos un elemento que cumple la condicion
// console.log(productos.some(item => item.nombre === "camisa"));

//map transforma o mapea un arreglo en otro con la misma cantidad de elementos
// const nombres = productos.map((item) => item.nombre);
// console.log(nombres);

// const precios = productos.map((item) => item.precio);
// console.log(precios);

// const productosActualizados = productos.map((item) => {
//   return {
//     id: item.id,
//     nombre: item.nombre,
//     precio: item.precio + item.precio * 0.21,
//   };
// });

// console.log(productosActualizados);

//reduce reduce un arreglo a un solo valor
// const numeros = [1, 5, 4, 3, 8];
// const total = numeros.reduce((acum, item) => acum + item, 0);
// console.log(total);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 700 },
//   { id: 3, nombre: "gorra", precio: 1500 },
//   { id: 4, nombre: "pantalon", precio: 300 },
// ];

// const total = productos.reduce((acum, item) => acum + item.precio, 0);
// console.log(total);

// const numeros = [ 40, 1, 5, 200 ];

// console.log(numeros.sort((a, b) => a - b)); //menor a mayor
// console.log(numeros.sort((a, b) => b - a)); //mayor a menor

// const items = [
//   { name: 'Pikachu', price: 21 },
//   { name: 'Charmander', price: 37 },
//   { name: 'Pidgey', price: 45 },
//   { name: 'Squirtle', price: 60 }
// ];

// console.log(
//   items.sort((a, b) => {
//     if (a.name > b.name) {
//         return -1;
//     }
//     if (a.name < b.name) {
//         return 1;
//     }
//     // a es igual a b
//     return 0;
//   })
// );

// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.max(1,8,4,6));
// console.log(Math.min(1,8,4,6));
// console.log(Math.ceil(3.14));
// console.log(Math.floor(3.7));
// console.log(Math.round(3.7));
// console.log(Math.round(3.4));
// console.log(Math.sqrt(9));
// console.log(Math.ceil(Math.random() * 10));

// console.log(Date());
// console.log(new Date(2022, 1, 23, 23, 12, 12));

// console.log(new Date("December 25, 2022 23:23:34"));

/* const hoy = new Date("December 17, 2021")

console.log(hoy.getFullYear());
console.log(hoy.getMonth());
console.log(hoy.getDay()); */

// const hoy = new Date("November 3, 2022")

// console.log( hoy.toDateString() ) 
// console.log( hoy.toLocaleString() ) 
// console.log( hoy.toLocaleDateString() ) 
// console.log( hoy.toTimeString())

const navidad = new Date("December 25, 2022")
const hoy = new Date("November 3, 2022")

console.log( navidad - hoy )

const milisegundosPorDia = 86400000

console.log( (navidad - hoy ) / milisegundosPorDia)