// parâmetros de função

function soma(num1, num2) {
  return num1 + num2;
}

function imprime(texto) {
  console.log(texto);
}

imprime(`Soma: ${soma(75, 75)}`);

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
  return `Olá ${nome}, sua idade é ${idade}!`;
}

//imprime(nomeIdade("Marlon", 26));

// Se não for atribuido ambos os valores, ele será lido como 1
function multiplicacao(num1 = 1, num2 = 1) {
  return num1 * num2;
}
//                                           //10 
imprime(`Multiplicação: ${multiplicacao(soma(5, 5))}`);


//

function cumprimentar(){
  return 'Olá gente!'
 }
 
 function cumprimentaPessoa(nomePessoa) {
  console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
 }
 
 cumprimentaPessoa('Carlos Alberto') // “Olá gente! Meu nome é Carlos Alberto"
 