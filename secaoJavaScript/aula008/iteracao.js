// iteracao com array

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// for padrao
console.log("For padrao");
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

// for of
console.log("For of");
for (let item of lista) {
    console.log(item);
}

//for in
console.log("For in")
for (let item in lista) {
    console.log(item);
}

// for each
console.log("For each")
lista.forEach((element) => {
    console.log(element)
});