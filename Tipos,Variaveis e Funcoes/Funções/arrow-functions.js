function print(content) {
  console.log(content);
}
// Eu crio o print apenas para não ficar digitando:
// "console.log"
// cansei de digitar isso haha

function apresentar(nome) {
  return `Meu nome é ${nome}`;
}

print(apresentar("Marlon"));

// Arrow Functions
const apresentarArrow = (nome) => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//Arrow Function c/ + de 1 linha de instrução
const somaNumPeq = (num1, num2) => {
  if (num1 > 10 || num2 > 10) {
    return "Somente números de 0 a 10";
  } else {
    return num1 + num2;
  }
};

print(somaNumPeq(2, 2));
// Hoisting: Arrow function se comporta como expressao
