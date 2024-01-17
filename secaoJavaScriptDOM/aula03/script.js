"use strict";

const h1 = document.querySelectorAll("h1");

h1.forEach((element, index) => {
   element.style.padding = "50px"
    if(index === 0){
        element.style.background = "green";
    }
    if(index === 1){
        element.style.background = "yellow";
    }
});