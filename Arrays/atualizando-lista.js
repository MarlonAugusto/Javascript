const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1, 2, "Rodrigo"); // splice altera o original
// Primeiro valor = quem queremos remover
// segundo valor = quantia a partir do primeiro
// terceiro = Substituiu o ultimo removido pelo "Rodrigo"

console.log(nomes);

animaisDoAquario = ["🐋", "🐙", "🐬", "🦈"];

animaisDoAquario.splice(1, 0, "🐠");
animaisDoAquario.splice(3, 2, "🐟");

console.log(animaisDoAquario);

//Certo! 
// No aquário, o golfinho e o tubarão não estão presentes por conta do 
// código animaisDoAquario.splice(3,2,'🐟'), que remove dois elementos
// do array, a partir da posição 3. Sendo assim, os elementos com índice
// 3 e 4 e os dois peixes entraram nas posições definidas pelo splice.