const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

// reduce()
// Utiliza uma função definida pelo usuário em cada
//um dos elementos, guardando o resultado em uma
//variável que pode ser acessada dentro da função
//que foi definida, retornando um único valor no
//final, reduzindo o array para um único valor.

function calculaMedia(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);

  const media = somaDasNotas / notasDaSala.length;
  return media;
}

function notaDaSala(sala) {
  const somaDasNotas = sala.reduce((soma, nota) => soma + nota, 0);
  return somaDasNotas;
}

console.log(`Javascript soma: ${notaDaSala(salaJS)}`);
console.log(`Python soma: ${notaDaSala(salaPython)}`);
console.log(`Java soma: ${notaDaSala(salaJava)}`);

console.log(`Javascript media: ${calculaMedia(salaJS)}`);
console.log(`Python media: ${calculaMedia(salaPython)}`);
console.log(`Java media: ${calculaMedia(salaJava)}`);
