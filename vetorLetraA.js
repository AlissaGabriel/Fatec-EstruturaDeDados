let palavras =  ["Adriana", "Maria", "José", "amora", "Andiara", "alegria"];

const letras = palavras.filter(function(letra){
    return letra.startsWith("a") || letra.startsWith("A");
})

console.log(letras);
