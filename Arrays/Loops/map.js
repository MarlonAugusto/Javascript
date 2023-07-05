const notas = [10, 9.5, 8, 7, 6];

//callback again
// notas.map((nota) => {
//   return nota + 1;
// });

// callback + ternário
const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
})

console.log(`Notas: ${notas}`);
console.log(`Notas Atualizadas: ${notasAtualizadas}`);
