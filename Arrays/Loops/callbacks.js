const nomes = ["Evaldo", "Mari", "Camis"];

// nomes.forEach(function(nome){
//     console.log(`ForEach Function: ${nome}`)
// })

nomes.forEach((nome) => {
    console.log(`Callback: ${nome}`)
})

function print(nome){
    console.log(`fprint: ${nome}`);
}

nomes.forEach(print);