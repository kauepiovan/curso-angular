"use strict";

const div = document.querySelector("div");
div.setAttribute("id", "teste");
div.setAttribute("class", "classe-01");

console.log(div.getAttribute("id"));
console.log(div.getAttribute("class"));

div.setAttribute("class", `${div.getAttribute("class")} background-red`);
div.setAttribute("class", `${div.getAttribute("class")} color-green`);

console.log(div.getAttribute("class"));
console.log(div);

div.removeAttribute("id")
console.log(div)

