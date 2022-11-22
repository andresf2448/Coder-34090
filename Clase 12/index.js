// let numero = 5;

// numero = numero + 1;
// numero += 1;
// numero++;

/* 
estructura del operador ternario
condicion ? codigo en caso de que condicion verdadera : codigo en caso de que condicion falsa
*/
let edad = 17;

// if(edad >= 18){
//   console.log("puede entrar");
// }else{
//   console.log("no puede entrar");
// }

// edad >= 18 ? console.log("puede entrar") : console.log("no puede entrar");

// let usuario = {
//   nombre: "pepito",
//   edad: 17
// };
// let permiso;

// if(usuario.edad >= 18){
//   permiso = true;
// }else{
//   permiso = false;
// }

// if(permiso){
//   console.log("Puede entrar a la fiesta");
// }else{
//   console.log("no puede entrar a la fiesta");
// }

// let usuario = {
//   nombre: "pepito",
//   edad: 20,
// };

// let permiso = usuario.edad >= 18 ? true : false;
// permiso ? console.log("Puede entrar a la fiesta") : console.log("no puede entrar a la fiesta");

/* 
operador1 && operador2 
retorna el operador2 siempre que operador1 sea verdadero en caso contrario retorna operador1

operador1 || operador2
si el operador1 es true entonces retorna operador1 en caso contrario retorna operador2
*/

// const carrito = [];

// if(carrito.length === 0){
//   console.log("El carrito está vacío!");
// }

// carrito.length === 0 && console.log("El carrito está vacío!");

// let usuario = {
//   nombre: "pepito",
//   edad: 10,
// };

// const registroUsuario = usuario.edad >= 18 && new Date();

// console.log(registroUsuario);

// console.log( 0 || "Falsy")  // falsy
// console.log( 40 || "Falsy")  // 40
// console.log( null || "Falsy")  //falsy
// console.log( undefined || "Falsy") //falsy
// console.log( "Hola Mundo" || "Falsy") //hola mundo
// console.log( "" || "Falsy")  //falsy
// console.log( NaN || "Falsy")  //falsy
// console.log( true || "Falsy") //true
// console.log( false || "Falsy") //falsy

// let usuario = {
//   nombre: "pepito",
//   edad: 10,
// };

// let usuario1 = null;

// console.log(usuario || "El usuario no existe");
// console.log(usuario1 || "El usuario no existe");

// let carrito;

// let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

// if(carritoStorage){
//   carrito = carritoStorage;
// }else{
//   carrito = [];
// }

// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// console.log( 0 ?? "Nullish")  // 0
// console.log( 40 ?? "Nullish")  // 40
// console.log( null ?? "Nullish")  // Nullish
// console.log( undefined ?? "Nullish")  // Nullish
// console.log( "Hola Mundo" ?? "Nullish")  // Hola Mundo
// console.log( "" ?? "Nullish")  // ""
// console.log( NaN ?? "Nullish")  // NaN
// console.log( true ?? "Nullish")  // true
// console.log( false ?? "Nullish")  // false

// const usuario = null;
const usuario = {
  nombre: "pepito",
  edad: 10,
  familiares: null
};

console.log(usuario?.familiares?.hermano || "la propiedad no existe");