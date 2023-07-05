const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144445550"],
};

cliente.enderecos = [
  {
    rua: "Av. cacete de agulha",
    numero: 715,
    apartamento: true,
    complemento: "Ap 1123",
  },
];

cliente.enderecos.push({
  rua: "Rua Jacinto fome",
  numero: 12,
  apartamento: false,
  complemento: "casa 2",
});

const listaApenasApartamentos = cliente.enderecos.filter(
  (enderecos) => enderecos.apartamento === true
);

//console.log(cliente.enderecos);
console.log(listaApenasApartamentos);
