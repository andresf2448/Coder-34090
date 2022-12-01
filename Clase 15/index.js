/* 
estructura del fetch

fetch(url, config);
*/

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(data => {
//   console.log(data[0].title);
//   console.log(data[0].body);
// });

// let listado = document.getElementById("listado");

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(data => {
//   data.forEach(publicacion => {
//     const li = document.createElement("li");
//     li.innerHTML = `
//       <h2>${publicacion.title}</h2>
//       <p>${publicacion.body}</p>
//     `;

//     listado.append(li);
//   });
// })

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "Probando",
//     body: "Probando nuestra primera vez",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
// .then(response => response.json())
// .then(data => console.log(data));

// let listado = document.getElementById("listado");

// fetch("./data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((producto) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <h2>ID: ${producto.id}</h2>
//         <p>Nombre: ${producto.nombre}</p>
//         <b>$${producto.precio}</b>
//         <hr/>
//       `;

//       listado.append(li);
//     });
//   });

let listado = document.getElementById("listado");

const traerDatos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((publicacion) => {
    const li = document.createElement("li");
    li.innerHTML = `
          <h2>${publicacion.title}</h2>
          <p>${publicacion.body}</p>
        `;

    listado.append(li);
  });
};

traerDatos();