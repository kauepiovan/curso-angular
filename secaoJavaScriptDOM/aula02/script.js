"use strict";

const h1 = document.querySelector("h1");
const classP = document.querySelector(".paragrafo");
const idP = document.querySelector("#paragrafo");
const strong = document.querySelector(".paragrafo strong");


console.log(h1);
console.log(classP);
console.log(idP);

let timer = 0;
const title = document.querySelector("title")

setInterval(()=>{
    title.innerText =`
    timer: ${timer}`;
    timer++;
}, 1000);