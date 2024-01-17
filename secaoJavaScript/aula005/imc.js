const peso = 71.00;
const altura = 1.73;
const imc = Number((peso / (altura * altura)).toFixed(2));

console.log(imc);

switch (true) {
    case imc < 17:
        console.log("muito abaixo do peso");
        break;
    case imc > 17 && imc <= 18.49:
        console.log("abaixo do peso");
        break;
    case imc > 18.5 && imc <= 24.99:
        console.log("peso normal");
        break;
    case imc > 25 && imc <= 29.99:
        console.log("acima do peso");
        break;
    case imc > 30 && imc <= 34.99:
        console.log("obesidade I");
        break;
    case imc > 35 && imc <= 40:
        console.log("obesidade II");
        break;

    default:
        break;
}