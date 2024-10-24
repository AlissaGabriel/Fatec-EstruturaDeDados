console.log("Vamos calcular sua menção: ");

let nota_um = parseFloat(prompt("Digite sua primeira nota: "));
let nota_dois = parseFloat(prompt("Digite sua segunda nota: "));

let media = (nota_um + nota_dois) / 2

console.log("Sua média é: " + media.toFixed(2));

if (media >= 8.5) {
    console.log("Sua menção é A");
}
else {
    if (media >= 7.5 && media < 8.5) {
        console.log("Sua menção é B");
    }
    else {
        if (media >= 6 && media < 7.5) {
            console.log("Sua menção é C");
        }
        else {
            if (media >= 5 && media < 6) {
                console.log("Sua menção é D");
            }
            else {
                console.log("Sua menção é E");
            }
        }
    }
}