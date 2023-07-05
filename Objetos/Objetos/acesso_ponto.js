const cliente = {
  nome: "Carlos",
  idade: "72",
  cpf: "66633399910",
  email: "algo@dominio.com",
};

console.log(
  `Ponto batido por: ${cliente.nome}! Para contato utilizar o email ${cliente.email}`
);
console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);
