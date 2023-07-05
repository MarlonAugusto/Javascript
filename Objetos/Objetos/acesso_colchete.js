const cliente = {
  nome: "Carlos",
  idade: "72",
  cpf: "66633399910",
  email: "algo@dominio.com",
};

console.log(
  `Ponto batido por: ${cliente["nome"]}! Para contato utilizar o email ${cliente["email"]}`
);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);

const chaves = ["nome", "idade", "cpf", "email", "religiao"];

chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}.`);
});
