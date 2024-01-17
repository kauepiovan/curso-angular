// Closure

function funcao(num1, num2) {

    const soma = num1 + num2;

    function funcao2() {
        return `O resultado é ${soma * 2}`
    }

    return funcao2;

}

const multiplicaPor2 = funcao(2, 2);

console.log(multiplicaPor2());
