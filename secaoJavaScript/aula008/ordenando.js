let listaNumericaDesordenada = [4, 12, 323, 3, 24, 2346, 1, 0, 2, 3, 4, 2345];
let listaAlfabeticaDesordenada = ['K', 'H', 'A', 'J', 'K', 'X', 'U', 'B', 'C', 'Y', 'L', 'Z'];

console.log(listaAlfabeticaDesordenada, "\n");
console.log(listaNumericaDesordenada, "\n");

console.log(listaAlfabeticaDesordenada.sort()); // Ordenando caracteres alfabeticos
console.log(listaNumericaDesordenada.sort((a, b) => a - b)); // Ordenando numeros

console.log(listaAlfabeticaDesordenada.sort().reverse()); // Ordenando de modo reverso caracteres alfabeticos
console.log(listaNumericaDesordenada.sort((a, b) => a - b).reverse()); // Oredenando de modo reverso numeros usando o .reverse()
console.log(listaNumericaDesordenada.sort((a, b) => b - a)); // Ordenando de modo reverso numeros usando arrow function b - a

let listaNomes = [
    { nome: "jose" },
    { nome: "maria" },
    { nome: "joao" },
    { nome: "sebastiao" },
    { nome: "kaue" },
    { nome: "alexandre" },
    { nome: "carlos" },
];

console.log(listaNomes.sort((a, b) => a.nome.localeCompare(b.nome)));