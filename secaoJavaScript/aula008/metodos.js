let pedidos = [
    {
        id: 12,
        cliente: "jose",
        pedido: "lanche",
    },
    {
        id: 19,
        cliente: "joana",
        pedido: "refrigerante",
    },
    {
        id: 45,
        cliente: "marcio",
        pedido: "sorvete",
    },
    {
        id: 88,
        cliente: "roberta",
        pedido: "taco mexicano",
    },
    {
        id: 42,
        cliente: "cleiton",
        pedido: "sushi",
    },
    {
        id: 76,
        cliente: "romario",
        pedido: "salgadinho",
    },
    {
        id: 91,
        cliente: "bruna",
        pedido: "lanche",
    },
    {
        id: 14,
        cliente: "maria",
        pedido: "refrigerante",
    },
    {
        id: 12,
        cliente: "alex",
        pedido: "batata frita",
    },
    {
        id: 77,
        cliente: "mario",
        pedido: "taco mexicano",
    },
]

// map
pedidos.map((element) => {
    if (element.cliente === "maria" && element.pedido === "refrigerante") {
        return element.pedido = "lanche";
    }
})

console.log(pedidos);


// filter -> retorna todos os resultados encontrados que coincide com a condição proposta
const clientesLanche = pedidos.filter((element) => {
    if (element.pedido === "lanche") {
        return element
    }
})

console.log(clientesLanche);


// find -> retorna o primeiro resultado encontrado que coincide com a condição proposta
const clienteRefrigerante = pedidos.find((element) => {
    return element.pedido === "refrigerante";
})

console.log(clienteRefrigerante);


// every -> retorna true ou false se apenas todos os elementos possuem o mesmo valor
console.log("every")
let todosLanches = pedidos.every((element) => {
    return element.pedido === "lanche";
})

console.log(todosLanches);

todosLanches = clientesLanche.every((element) => {
    return element.pedido === "lanche";
})

console.log(todosLanches);


// some -> retorna true ou false se apenas um dos elementos possui o valor da condição
console.log("some")
let temLanche = pedidos.some((element) => {
    return element.pedido === "lanche";
})

console.log(temLanche);

temLanche = clientesLanche.some(element => {
    return element.pedido === "lanche";
})

console.log(temLanche);

// reduce -> pega todos os valores de um array e condensa em um so lugar
const balancete = pedidos.reduce((total, element) => {
    return total + element.id;
}, 0)

console.log(balancete);