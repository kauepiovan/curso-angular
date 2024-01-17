// IIFE -> Immediately Invoked Function Expression
// IIFE -> Expressão de Função Invocada Imediatamente


const soma = (function (num1, num2) {
    return num1 + num2;
})(1, 2);

console.log(soma);

const sub = ((num1, num2) => {
    return num1 - num2;
})(1, 2);

console.log(sub);