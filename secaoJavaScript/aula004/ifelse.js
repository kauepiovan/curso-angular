// if else

let numero = 10;

if (numero >= 10) {
    console.log("você esta com o saldo positivo!");
} else {
    console.log("você esta com o saldo negativo!");
}


// if else else if

let numero1 = 0;

if (numero1 > 10) {
    console.log("você esta com o saldo positivo!");
} else if (numero1 == 0) {
    console.log("você esta com o saldo zerado!");
} else {
    console.log("você esta com o saldo negativo!");
}

// falsy e truthy

// falsy = false, 0, "", NaN, Undefined e null
// truthy = todos os outros diferentes de falsy

if (!undefined) {
    console.log("Este é um valor falsy")
}

