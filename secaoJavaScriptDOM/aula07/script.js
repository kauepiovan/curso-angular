'use strict';

// input value

const input = document.querySelector("#name");

let valorDoInput = input.value;

console.log(valorDoInput);


const novoValor = "novo valor";

input.value = novoValor;
console.log(input.value);