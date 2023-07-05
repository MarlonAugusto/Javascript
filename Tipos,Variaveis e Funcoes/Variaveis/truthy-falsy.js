// boolean
const userLogado = true;
const contaPaga = false;

//truthy ou falsy
// 0 => false
// 1 => true

console.log("Empty: " + ("" == false));
console.log("0: " + (0 == false));
console.log("1: " + (1 == true));

// undefined
// null => Vazio ou nada

let minhaVar;
let varNull = null;

console.log("Não Iniciada: " + minhaVar);
console.log("Iniciada com Null: " + varNull);

//

let num = 3;
let text = "Alura";

console.log("Num Tipo: " + typeof num);
console.log("Text Tipo: " + typeof text);
console.log("varNull Tipo: " + typeof varNull);
console.log("MinhaVar Tipo: " + typeof minhaVar);
