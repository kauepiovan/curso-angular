// argumentos

function funcao(num1, num2) {

    if (typeof num1 == "number" && typeof num2 == "number") {
        return num1 + num2;
    }

    return "erro de tipo."
}

console.log(funcao(2, 5));

function funcao1() {
    return arguments;
}

console.log(funcao1(1, 2, 3, "abcd", true, false, [1, 2, 3, 4, true, "Hello World", 4.45879, false], 3.14));

const funcao2 = function (num1, num2) {

    if (typeof num1 == "number" && typeof num2 == "number") {
        return num1 + num2;
    }
    return "erro de tipo";
}

console.log(funcao2(4, 3));

const funcao3 = (num1, num2) => {

    if (typeof num1 == "number" && typeof num2 == "number") {
        return num1 + num2;
    }

    return "erro de tipo";
}

console.log(funcao3(7, 8));