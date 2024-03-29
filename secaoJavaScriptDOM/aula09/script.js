"use strict";

const ul = document.querySelector("ul");
const fragment = document.createDocumentFragment();
const lista = ["item 1", "item 2", "item 3", "item 4", "item 5"];


lista.forEach((element) => {
    const li = document.createElement("li");
    li.innerText = element;
    fragment.append(li);
});

ul.appendChild(fragment);

// removendo elementos

const allLi = document.querySelectorAll("li");
allLi[2].remove(); // remove o 3º elemento da lista

const h2 = document.querySelector("h1");
h2.remove(); // remove o h1