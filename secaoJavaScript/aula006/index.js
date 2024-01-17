/* Função -> É um conjunto de instruções que executa uma tarefa ou calcula um valor*/

// 1 - Functions declaration

function isValid() {
    const soma = 1 + 1;
    if (soma === 2) {
        return true;
    } else {
        return false;
    }
}

// 2 - Functions Expressions

const isValid1 = function () {
    const soma = 1 + 1;
    if (soma === 2) {
        return true;
    } else {
        return false;
    }
}

// 3 - Arrow Functions
const isValid2 = () => {
    const soma = 1 + 1;
    if (soma === 2) {
        return true;
    } else {
        return false;
    }
}

console.log(isValid());
console.log(isValid1());
console.log(isValid2());