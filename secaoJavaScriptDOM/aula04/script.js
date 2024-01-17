"use strict";

const paragrafoId = document.getElementById("paragrafo");
console.log(paragrafoId);

const paragrafosClass = document.getElementsByClassName("paragrafo");

for(let item of paragrafosClass){
    console.log(item)
}

const p = document.getElementsByTagName("p");
for(let element of p){
    console.log(element);
}

