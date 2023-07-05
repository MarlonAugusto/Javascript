const notas = [10, 6, 8];

// const notas = []
// por usr o "=", terá problema na atribuição... Usar funções para atribuições.
notas.push(7); // Adicionar no Array NOTAS

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media)