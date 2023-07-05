const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

console.log(listaDeAlunosEMedias);

console.log(`
A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}.
A nota da aluna em questão é: ${listaDeAlunosEMedias[1][1]}`);

// Primeiro colchetes [0] -> Qual lista (Posição externa)
// Segundo colchetes [1] -> Indice dentro da lista (Posição interna)
