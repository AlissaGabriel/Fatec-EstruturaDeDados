//Escreva uma função que receba um array de palavras e retorne um novo array
//contendo apenas as palavras que começam com a letra "A"(maiúscula ou minúscula)

let palavras =  ["Adriana", "Maria", "José", "amora", "Andiara", "alegria"];

const letras = palavras.filter(function(letra){
    return letra.startsWith("a") || letra.startsWith("A");
})

console.log(letras);
