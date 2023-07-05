const pessoa = {
  nome: "Chica",
  profissao: "Engenheira",
};

console.log(pessoa.nome);
console.log(pessoa.telefone); // undefined

//criando variavel 
pessoa.telefone = "11 95544332211";

console.log(pessoa.telefone);

//alterando valor
pessoa.nome = "Chica da Silva";

console.log(pessoa);
