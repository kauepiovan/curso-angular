// hoisting
console.log(soma(1, 2));
console.log(x);

var x = 10;

function soma(num1, num2) {
    return num1 + num2;
}