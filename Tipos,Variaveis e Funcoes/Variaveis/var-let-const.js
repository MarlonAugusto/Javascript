// Var: Lê as variaveis primeiros 
// (Se a variavel nao ter definição, ela será lida como VAR)

var valtura = 5;
var vcomprimento = 7;

varea = valtura * vcomprimento;
var varea;

console.log("Var: " + varea);

// Let: Manipula nos blocos e tem de ser definida antes do uso
let lforma = "triangulo";
let laltura = 5;
let lcomprimento = 7;
let larea;

if (lforma === "triangulo") {
  larea = laltura * lcomprimento;
} else {
  larea = (laltura * lcomprimento) / 2;
}

console.log("Let: " + larea);

// Const: Uma constante, deve sempre ter um valor atribuído
const cforma = "triangulo";
const caltura = 5;
const ccomprimento = 7;
let carea; // Não poderia ser const por ser um valor que será atribuido dps

if (cforma === "quadrado") {
  carea = caltura * ccomprimento;
} else {
  carea = (caltura * ccomprimento) / 2;
}

console.log("Const: " + carea);


// Var
// a var não é mais utilizada, justamente, porque ela é muito propensa à bugs, 
// então, hoje em dia usamos o let, quando sabemos que o valor da variável 
// vai precisar mudar, vai precisar ser reatribuído; para todos os outros casos, 
// temos de usar const, sempre.