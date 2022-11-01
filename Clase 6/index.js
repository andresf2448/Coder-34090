/* const vacio = []; //arreglo vacio
const numeros = [5, 6, 7];
const personas = ["pepito", "pepita", "mariano", "camila"];
const diferentes = [1, true, "andres"]; */

// const personas = ["pepito", "pepita", "mariano", "camila"];

// console.log(personas[0]);
// console.log(personas[3]);

// const numeros = [5, 6, 7];
// console.log(numeros[0] + numeros[2]);

// const personas = ["pepito", "pepita", "mariano", "camila", "ester", "oscar"];

// for(let index = 0; index < personas.length; index++){
//   console.log(personas[index]);
// }

// const personas = ["pepito", "pepita"];
// console.log(personas);
// personas.push("camila"); //agregar elemento al final
// console.log(personas);
// personas.unshift("mariana"); //agregar elemento al inicio
// console.log(personas);
// personas.pop(); //sacar el ultimo elemento
// console.log(personas);
// personas.shift(); //sacar el primer elemento
// console.log(personas);

// const personas = ["pepito", "pepita", "mariano", "camila", "ester", "oscar"];

// personas.splice(1, 2); //elimina elementos desde la posicion dada y la cantidad dada
// console.log(personas);

// const personas = ["pepito", "pepita", "mariano", "camila", "ester", "oscar"];
// console.log(personas.join("       ")); //une los elementos del arreglo separados por el indicador pasado por parametro

// const personas = ["pepito", "pepita", "mariano", "camila", "ester", "oscar"];
// const perritos = ["firu", "max"];
// const varios = personas.concat(perritos); // concatena un arreglo con otro

// console.log(varios);

// const personas = ["pepito", "pepita", "mariano", "camila", "ester", "oscar"];
// const copia = personas.slice(1, 4); //hace una copia de un fragmento limitado por los parametros
// console.log(copia);

/* const personas = ["pepito", "pepita", "mariano", "camila", "ester", "oscar"];
console.log(personas.indexOf("mariano")); //encuentra la posicion del elemento pasado por parametro
console.log(personas.indexOf("mariano1asdfadsfasdf")); */

// const personas = ["pepito", "pepita", "mariano", "camila", "ester", "oscar"];
// console.log(personas.includes("manuel")); // devuelve true o false dependiendo de si el aelemento se encuentra en el arreglo
// console.log(personas.includes("camila"));

// const personas = ["pepito", "pepita", "mariano", "camila", "ester", "oscar"];
// console.log(personas.reverse()); //cambia el orden del arreglo
// const personas = ["pepito", "pepita", "mariano", "camila", "ester", "oscar"];

// const eliminar = (nombre) => {
//   let index = personas.indexOf(nombre);

//   if(index != -1){
//     personas.splice(index, 1);

//     console.log(personas);
//   }
// };

// eliminar("mariano");

// const productos = [
//   { id: 1, nombre: "pantalon", precio: 1000 },
//   { id: 2, nombre: "camisa", precio: 700 },
//   { id: 3, nombre: "gorra", precio: 800 },
//   { id: 4, nombre: "zapato", precio: 1750 },
// ];

// for(const producto of productos){
//   console.log(producto);
// }

/* let nombre = prompt("Ingrese el nombre");
let precio = prompt("Ingrese el precio");
let objeto = {id: 5, nombre: nombre, precio: precio};
productos.push(objeto);
console.log(productos); */
/* class Producto{
  constructor(id, nombre, precio){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

for (let index = 0; index < 5; index++) {
  let nombre = prompt("Ingrese el nombre");
  let precio = prompt("Ingrese el precio");
  let objeto = new Producto(productos.length + 1, nombre, precio);
  productos.push(objeto);
}

console.log(productos); */

const productos = [
  { id: 1, nombre: "pantalon", precio: 1000 },
  { id: 2, nombre: "camisa", precio: 700 },
  { id: 3, nombre: "gorra", precio: 800 },
  { id: 4, nombre: "zapato", precio: 1750 },
];

let encontrado = false;
let nombre = prompt("Ingrese el nombre del producto");

for(const producto of productos){
  if(producto.nombre === nombre){
    encontrado = true;
  }
}

if(encontrado){
  alert("Producto disponible");
}else{
  alert("Producto no disponible");
}