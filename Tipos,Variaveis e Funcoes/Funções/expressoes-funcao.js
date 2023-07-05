// function minhaFuncao(param){
//     bloco de código
// }

// minhaFuncao("param")

function print(conteudo) {
    console.log(conteudo);
  }
/*
const soma = function (num1, num2) {
  return num1 + num2;
};

print(soma(1, 1));
*/

// Diferença principal: Hoisting
// Funções e var são "listadas" no topo do arquivo
print(apresentar);

function apresentar() {
  return "olá";
}

// Exemplo abaixo dará Erro pq não foi iniciado antes de ser chamado
print(soma(1,1))
const soma = function (num1, num2) {
    return num1 + num2;
  };


