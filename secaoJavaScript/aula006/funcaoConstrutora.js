// funções construtoras

function pessoa(name, idade) {

    this.name = name;
    this.idade = idade;

    this.apresentacao = ((name, idade) => {

        return `Olá meu nome é ${name} e tenho ${idade} anos de idade.`;

    })(this.name, this.idade)
}

const pessoa1 = new pessoa("kaue", 19);

console.log(pessoa1.name);
console.log(pessoa1.idade);
console.log(pessoa1.apresentacao);