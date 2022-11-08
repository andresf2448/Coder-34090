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

let seccion = document.getElementById("seccion");
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
}
