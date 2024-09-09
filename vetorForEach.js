console.log("VETOR");

let nomes = [];

for(let i = 0; i <= 5; i++){
    nomes[i] = prompt("Digite o nome da posição " + i + ": ");
}

nomes.forEach(nomeDaVez => console.log(nomeDaVez));

