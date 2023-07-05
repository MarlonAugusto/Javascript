// trecho do arquivo media.js

const notas = [10, 6.5, 8, 7.5];

somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

console.log(`Soma das notas: ${somaDasNotas}`);
console.log(`Media das notas: ${somaDasNotas / notas.length}`);
