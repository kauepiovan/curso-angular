// objetos
let Tenis = {
    nome: "Air Jordan IV",

    marca: "nike",

    numeracao: [39, 40, 41, 42, 43],

    sites: {
        site1: {
            nome: "site tal",
            endereco: "endereco exemplo",
        },
        site2: {
            nome: "site 2",
            endereco: "endereco 2",
        },
    },

    getNome: function () {
        return this.nome;
    },

    getMarca: function () {
        return this.marca;
    },
}

console.log(Tenis.getMarca(), Tenis.getNome())
console.log(Tenis.sites.site2["endereco"])


// destructuring

const { nome, marca, numeracao, naoExist = "valor padrao" } = Tenis;


console.log(nome, marca, numeracao, naoExist);

console.log("==========================================================\n");

console.log("teste" in Tenis);
console.log("marca" in Tenis);
console.log("\n");
console.log(Tenis.hasOwnProperty("teste"));
console.log(Tenis.hasOwnProperty("marca"));

console.log("==========================================================\n");

Tenis.marca = "Adidas";
Tenis["nome"] = "ultraboost";

console.log(Tenis);

delete Tenis.sites;
console.log(Tenis);

// clonando obj

let tenis2 = Tenis;
console.log(tenis2);


// unindo obj

let obj = {
    teste1: "posdnvmpsodnf",
    teste2: "1231241'24",
}


let tenis3 = Object.assign(Tenis, obj);
console.log(tenis3);

tenis3 = { ...obj, ...Tenis };
console.log(tenis3);

let tenis4 = JSON.parse(JSON.stringify(Tenis));
console.log(1, tenis4);

let tenis5 = { ...JSON.parse(JSON.stringify(Tenis)), ...JSON.parse(JSON.stringify(obj)) };
console.log(2, tenis5);