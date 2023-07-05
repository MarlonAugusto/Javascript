const clientes = require("./clientes.json");

//const parsado = JSON.parse(JSON.stringify(clientes));

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "nome", "Kirby");
const encontrado2 = encontrar(clientes, "telefone", "9916828153");

console.log(encontrado)