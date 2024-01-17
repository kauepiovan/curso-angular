// Arrays

// adicionando dados
let lista = [1, 2, 3, 4, 5, 6];
console.log(lista);

lista.push(7);  // adiciona no final do array e retorna o novo tamanho do array
console.log(lista);

lista.unshift(8);  // adiciona no inicio do array e retorna o novo tamanho do array
console.log(lista);

//removendo dados

lista.shift(); // remove o primeiro elemento do array e retorna o item removido
console.log(lista);

lista.pop(); // remove o ultimo elemento do array e retorna o item removido
console.log(lista, "\n");



// slice -> pega determinada parte de um array ou string 
const tresPrimeirosNumeros = lista.slice(0, 3);
console.log("Slice --> ", tresPrimeirosNumeros, "\n");

// splice -> remove determinada parte de um array e retorna os elementos removidos
console.log("Splice")
console.log("lista inalterada -->", lista);
lista.splice(0, 3);
console.log("lista alterada -->", lista);


console.log(lista.unshift(1, 2, 3));
console.log(lista);


