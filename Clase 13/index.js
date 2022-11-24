//SWEET ALERT
// let boton = document.getElementById("boton");

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Error!",
    text: "Do you want to continue?",
    icon: "error",
    confirmButtonText: "Ok",
  });
}); */

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Genial!",
    text: "Haz clickeado el botón!",
    icon: "success",
    confirmButtonText: "Cool",
  });
}); */

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Error!",
    text: "Error inesperado",
    icon: "error",
    confirmButtonText: " =( ",
  });
}); */

/* boton.addEventListener("click", () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: true,
    timer: 1500,
  });
}); */

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Sweet!",
    text: "Modal with a custom image.",
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
}); */

/* boton.addEventListener("click", () => {
  Swal.fire({
    title: "Está seguro de eliminar el producto?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, seguro",
    cancelButtonText: "No, no quiero",
  }).then((result) => {
    if (result.isConfirmed) {
      //logica para eliminar del carrito de compras
      Swal.fire({
        title: "Borrado!",
        icon: "success",
        text: "El archivo ha sido borrado",
      });
    }
  });
}); */

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Ingrese su nombre",
//     input: "text",
//     showCancelButton: true,
//     confirmButtonText: "Look up",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire({
//         title: `${result.value}`,
//       });
//     }
//   });
// });

//TOASTIFY

let boton = document.getElementById("boton");
/* boton.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
  }).showToast();
}); */

/* boton.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    style: {
      background: "linear-gradient(to left, #00b09b, #96c92d)",
    },
  }).showToast();
}); */

/* boton.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    onClick: () => {
      Toastify({
        text: "Clickeaste un Toast!",
        duration: 1500,
      }).showToast();
    },
  }).showToast();
}); */

// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Click aquí para ir a Coder!",
//     duration: 3000,
//     destination: "https://www.coderhouse.com",
//   }).showToast();
// });


//LUXON
// const DateTime = luxon.DateTime;
// const fecha = DateTime.local(2022, 11, 24);
// console.log(fecha.c);
// console.log(fecha.toString());
// console.log(fecha.year);
// console.log(fecha.month);
// console.log(fecha.day);
// console.log(fecha.second);
// console.log(fecha.weekday);
// console.log(fecha.zoneName);
// console.log(fecha.daysInMonth);

// console.log(fecha.toLocaleString());
// console.log(fecha.toLocaleString(DateTime.DATE_FULL));
// console.log(fecha.toLocaleString(DateTime.TIME_SIMPLE));
// console.log(fecha.setLocale('en').toLocaleString(DateTime.DATE_FULL));
// console.log(fecha.setLocale('es').toLocaleString(DateTime.DATE_FULL));

// const DateTime = luxon.DateTime;
// const dt = DateTime.now();

// console.log(dt.toLocaleString(DateTime.DATETIME_SHORT));

// const suma = dt.plus({hours: 1, minutes: 10})
// console.log(suma.toLocaleString(DateTime.DATETIME_SHORT));

// const resta = dt.minus({month: 1, days: 10})
// console.log(resta.toLocaleString(DateTime.DATETIME_SHORT));

const DateTime = luxon.DateTime;
const Interval = luxon.Interval;
const hoy = DateTime.now();
const navidad = DateTime.local(2022, 12, 25);

const i = Interval.fromDateTimes(hoy, navidad);

console.log(i.length("days"));
console.log(i.length("hours"));
console.log(i.length("minutes"));