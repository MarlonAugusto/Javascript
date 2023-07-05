const idadeMinima = 18;
const idadeCliente = 16;

if (idadeCliente >= idadeMinima) {
  console.log("cerveja");
} else {
  console.log("suco");
}

// Mesma coisa de forma diferente
console.log(
  //    condição                 //true    //false
  idadeCliente >= idadeMinima ? "cerveja" : "suco"
);
