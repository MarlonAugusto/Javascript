const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144445550"],
};

cliente.endereco = {
    rua: "Av. cacete de agulha",
    numero: 715,
    apartamento: true,
    complemento: "Ap 1123"
};
console.log(cliente.endereco);

console.log(cliente["endereco"]);

