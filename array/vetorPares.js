//escreva uma função em javascript que recebe um array de números inteiros 
//e retorna a soma dos números pares do array

const num = [1, 2, 4]

const pares = num.filter(function (number) {
    return number % 2 === 0;
})

const somaPares = pares.reduce(function (soma, accumulator) {
    return accumulator + soma
}, 0)

console.log(pares)
console.log(somaPares)

// Outro Método //

function somaDosPares(array) {
    let soma = 0;

    array.forEach(num => {
        if (num % 2 === 0);
        soma += num;
    })
    return soma;
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(somaDosPares(numeros));




// [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(num =>{
//     console.log(num)
// })

