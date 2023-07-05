const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

// para cada elemento de notas faça:
for (let elemento of notas) {
  console.log(elemento);
}

for (let nota of notas) {
  somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;
console.log(`Soma das notas: ${somaDasNotas}`);
console.log(`Média das notas: ${media}`);
