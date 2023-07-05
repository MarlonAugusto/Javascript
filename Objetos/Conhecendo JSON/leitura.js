const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString); // Stringzado
console.log(typeof clienteEmString); // tipo string "toda a info numa string"

//console.log(clienteEmString.nome); //Undefined (nada definido, tudo é string)

const objetoCliente = JSON.parse(clienteEmString); //JSON.traduzir

console.log(objetoCliente); // versão agora como objeto

console.log(objetoCliente.nome); // objeto.nome retornado
