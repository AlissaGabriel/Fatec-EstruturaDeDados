console.log("Vetor Não Travado");

let nomes = [];

for(let i = 0; i <= 5; i++){
    nomes[i] = prompt("Digite o nome da posição " + i + ": ");
}

for(let i =0; i <= 5; i++){
    console.log("O nome da posição " + i + " é: " + nomes[i]);
}

