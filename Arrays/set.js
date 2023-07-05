const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// Set tira repetição do Array
//const meuSet = new Set(nomes);

const nomesSemRepeticao = [...new Set(nomes)];

console.log(nomesSemRepeticao)

