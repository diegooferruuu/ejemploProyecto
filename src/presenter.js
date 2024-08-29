import {totalizador, precioItem, estado} from "./totalizador";


const first = document.querySelector("#cantidad_item");
const second = document.querySelector("#precio_item");
const third = document.querySelector("#estados");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(first.value);
  const precio = Number.parseInt(second.value);
  const est = third.value;
  const resultado = totalizador(cantidad);
  const res2 = precioItem(precio);
  const res3 = estado(est);
  
  div.innerHTML = "<p> Cantidad de Items: " + resultado + "</p>" + "<p> Precio del Item: " + res2 + "</p>" + "<p> Estado: " + res3 + "</p>";

});


/* 
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
 */