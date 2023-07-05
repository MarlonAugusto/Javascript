const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados);

//Metodos: 
//forEach não tem um retorno, 
//map() pode retornar um array se a função callback retornar algum valor.