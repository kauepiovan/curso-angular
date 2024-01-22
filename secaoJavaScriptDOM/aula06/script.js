'use strict';

 // criando elementos dentro do html

// inner html -> mais facil e mais legivel
const div = document.querySelector("div");
console.log(1, div);

div.innerHTML += "<strong>Esse é meu <br>texto alterado</strong>"


// create element mais dificil menos legivel mais perfomatico
const elementUl = document.createElement("ul");
div.appendChild(elementUl);

const lista = [1,2,3,4];

lista.forEach((element) => {
    const elementLi = document.createElement("li");
    elementLi.innerText = element;
    elementUl.appendChild(elementLi);
});