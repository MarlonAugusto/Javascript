// tipo Number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const soma = primeiroNumero + segundoNumero;
const subtracao = primeiroNumero - segundoNumero;
const multiplicacao = primeiroNumero * segundoNumero;
const divisao = primeiroNumero / segundoNumero;

console.log("soma = " + soma);
console.log("subtração = " + subtracao);
console.log("multiplicação = " + multiplicacao);
console.log("divisão = " + divisao);

// ponto flutuante

const numFlutuante = 3.3;
const numFlutuanteSemZero = 0.5;

const soma2 = numFlutuante + numFlutuanteSemZero;

console.log("somaFlutuante = " + soma2);

// NaN -> Not a Number (Não é um numero)
const alura = "Alura"
console.log(alura * primeiroNumero)

// Divisão por zero não é um erro em JavaScript
// ele simplesmente retorna “Infinity”.
var a = 10
var b = 0
console.log(a/b) // Infinity