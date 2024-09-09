console.log("Media de Altura");

let num_jogadores = parseInt(prompt("Informe o número de jogadores: "));

let soma_altura = 0;

for (let i = 0; i < num_jogadores; i++) {
  var altura = parseFloat(

    prompt("Altura do jogador " + i + ": "));

  soma_altura = soma_altura + altura;
}

media = soma_altura / num_jogadores;

console.log("A média de altura é: " + media.toFixed(2));