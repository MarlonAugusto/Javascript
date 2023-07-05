const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
  // Includes se o passado como parametro está na lista
  if (listaDeAlunosEMedias[0].includes(aluno)) {
    // indexOf pega o indice do parametro informado
    
    // nomeando cada array dentro da array de arrays
    const [alunos, medias] = listaDeAlunosEMedias;
    // const alunos = listaDeAlunosEMedias[0];
    // const medias = listaDeAlunosEMedias[1];
    

    const indice = alunos.indexOf(aluno);
    const mediaDoAluno = medias[indice];

    console.log(`${aluno} tem a média ${mediaDoAluno}`);
  } else {
    console.log("Aluno não encontrado!");
  }
}

exibeNomeENota("João");
