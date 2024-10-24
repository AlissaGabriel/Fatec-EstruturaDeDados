console.log("Números Aleatórios");

let numeros = [1, 2, 5, 6, 9, 4, 89, 34, 77, 32];
let n = numeros.length;
let soma = 0;

for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10 - i; j++){
         if(numeros[j] > numeros[j + 1]){
          let temp = numeros[j]; 
          numeros[j] = numeros[j + 1]; 
          numeros [j + 1] = temp};
     }
}

for(let i = 0; i< 10; i++){
    soma = soma + numeros[i];
}

console.log("O menor número é: " + numeros[0]);
console.log("O maior número é: " + numeros[n-1]);
console.log("A soma dos números: " + soma);
console.log(numeros);