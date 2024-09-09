console.log("Bem vindo: Calcule seu imc aqui: ");

let altura = parseFloat(prompt("Digite sua altura: "));
let peso = parseFloat(prompt("Digite seu peso: "));

let media = peso / (altura * altura);

if (media < 18.5) {
    console.log("Baixo peso");
}
else if (media >= 18.5 && media <= 24.9) {
    console.log("Peso normal");
}
else if (media >= 25 && media <= 29.9) {
    console.log("Sobrepeso");
}
else if (media >= 30 && media <= 34.9) {
    console.log("Obeso 1");
}
else if (media >= 35 && media <= 39.9) {
    console.log("Obeso 2");
}
else if (media >= 40) {
    console.log("Obeso 3");
}
