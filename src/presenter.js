import {totalizador, precioItem} from "./totalizador";


const first = document.querySelector("#cantidad_item");
const second = document.querySelector("#precio_item");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(first.value);
  const precio = Number.parseInt(second.value);
  const resultado = totalizador(cantidad);
  const res2 = precioItem(precio);
  
  div.innerHTML = "<p>" + resultado + "</p>" + "<p>" + precio + "</p>";

});


/* 
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
 */