/* 
estructura del setTimeout

setTimeout(funcion, tiempo);
*/

// setTimeout(() => {
//   console.log("hola");
// }, 3000);

// console.log("inicio");

// setTimeout(() => {
//   console.log("intermedio");
// }, 0);

// console.log("final");

// let boton = document.getElementById("boton");
// let mensaje = document.getElementById("mensaje");

// boton.addEventListener("click", () => {
//   mensaje.classList.add("color");

//   setTimeout(() => {
//     mensaje.classList.remove("color");
//   }, 3000);
// });

// for (let letra of "hola") {
//   setTimeout(() => {
//       console.log(letra)
//   }, 1000)
// }

// for (let letra of "mundo") {
//   setTimeout(() => {
//       console.log(letra)
//   }, 3000)
// }

// function multiply (x, y) {
//   return x * y;
// }

// function printSquare (x) {
//   let s = multiply(x, x);
//   console.log(s);
// }

// printSquare(5);

// setTimeout(() => {
//   console.log("inicio");
// }, 1);

// setTimeout(() => {
//   console.log("final");
// }, 0);

/* 
estructura del setInterval
setInterval(funcion, tiempo);
*/

// setInterval(() => {
//   console.log("hola");
// }, 3000);

// let counter = 0
// const interval = setInterval(() => {
//     counter++
//     console.log("Counter: ", counter)

//     if (counter >= 5) {
//         clearInterval(interval)
//         console.log("Se removió el intervalo")
//     }
// }, 1000);

// setTimeout(() => {
//   console.log("Inicio");
// }, 3000);

// setTimeout(() => {
//   console.log("Intermedio");
// }, 2000);

// setTimeout(() => {
//   console.log("Final");
// }, 1000);

// setTimeout(() => {
//   console.log("inicio");
// }, 1);

// setTimeout(() => {
//   console.log("final");
// }, 0);

// new Promise((resolve, reject) => {
//   //cuerpo de la promesa
// });

// const evento = (valor) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       valor ? resolve(["ana", "juan"]) : reject("El servidor no responde");
//     }, 1000);
//   });
// }

// evento(false)
// .then(response => console.log(response))
// .catch(error => console.log(error))
// .finally(() => {
//   console.log("proceso finalizado");
// });

//servidor en Italia
let productos = [
  { id: 1, nombre: "Arroz", precio: 125 },
  { id: 2, nombre: "Fideo", precio: 70 },
  { id: 3, nombre: "Pan", precio: 50 },
  { id: 4, nombre: "Flan", precio: 100 },
];

const traerProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
      // reject("Servidor no responde");
    }, 3000);
  });
};
///////////////////////////////////////////////

boton.addEventListener("click", () => {
  traerProductos()
    .then((response) => {
      response.forEach((producto) => {
        let div = document.createElement("div");
        div.innerHTML = `
        <h2>ID: ${producto.id}</h2>
        <p>Nombre: ${producto.nombre}</p>
        <b>$${producto.precio}</b>
      `;

        document.body.append(div);
      });
    })
    .catch((error) => {
      let div = document.createElement("div");
      div.innerHTML = `${error}`;

      document.body.append(div);
    });
});
