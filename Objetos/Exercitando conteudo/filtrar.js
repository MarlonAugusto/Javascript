const clientes = require("./clientes.json");

function filtrarApartamentosSemComplemento(clientes) {
  return clientes.filter((cliente) => {
    return (
      cliente.endereco.apartamento && // se verdadeiro E
      !cliente.endereco.hasOwnProperty("complemento") // contrário de : Tem a propriedade "complemento"
    );
  });
}

const filtrados = filtrarApartamentosSemComplemento(clientes)
console.log(filtrados)