const alunos = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];

const sala1 = alunos.slice(0, alunos.length / 2); // Do indice à metade
const sala2 = alunos.slice(alunos.length / 2); // Da metade até o fim

console.log(`Sala 1: 
${sala1}
Quantidade de alunos: ${sala1.length} \n`);
console.log(`Sala 2: 
${sala2}
Quantidade de alunos: ${sala2.length}`);
