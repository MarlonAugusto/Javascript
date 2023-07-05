const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];
/*
Para finalizar, não estamos usando o parâmetro aluno, porque dessa vez 
estávamos interessados apenas no índice. Quando não utilizamos o primeiro
parâmetro, uma convenção que você pode encontrar é o uso do underline (_)
*/
const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7; // Se for verdadeira a condição = salva na var
});

console.log(reprovados)

//Vimos como utilizar o método filter para retornar um array com apenas alguns elementos do array principal através de uma função callback.