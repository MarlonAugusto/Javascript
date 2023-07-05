// tipo de dado
// booleans

// conversão Implícita
const num = 456;
const numString = "456";

//Number(): Só funcionará se não ter nenhum caractere, somente numeros em strings
//String()
console.log("Conversao pra Number: " + (num === Number(numString)));
console.log("Conversao pra String: " + (String(num) === numString));
//
// Podemos usar o operador de soma + para fazer a conversão de textos para números, colocando-os antes das variáveis
let largura = "10";
let altura = "5";
console.log("String pra Number: " + +largura * +altura); // teremos a conversão de String para números realizado usando o + antes das variáveis
//
let usuarioConectado = false;
console.log("Bool pra String: " + String(usuarioConectado));
// teremos a conversão da booleana para string, nesse caso teremos uma string “false”.

usuarioConectado = true;
console.log("Bool pra String: " + String(usuarioConectado));
// agora teremos uma string “true”.

// conversão Explícita
console.log("Conversao pra Number: " + (num === Number(numString)));
console.log("Conversao pra String: " + (num.toString() === numString));
