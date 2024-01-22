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