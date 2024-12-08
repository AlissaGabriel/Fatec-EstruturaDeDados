//1) Crie um objeto para armazenar informações de alunos, onde a
//chave é o número de matrícula e o valor é o nome do aluno.
//Adicione pelo menos 3 alunos ao dicionário e exiba os nomes
//iterando sobre as chaves.
console.log("--------------Exercício 1--------------");
const dicionario1 = {
    123: "João",
    111: "Maria",
    222: "Paulo"
}

for (const chave in dicionario1) {
    console.log(`${chave}: ${dicionario1[chave]}`);
}

//2) Implemente uma função que receba uma string e retorne um
//objeto onde as chaves são os caracteres e os valores, o número
//de vezes que aparecem na string. Ignore os espaços.
console.log("--------------Exercício 2--------------");
function recebeString() {
    const digite = prompt("Digite algo: ").toLowerCase();
    const dicionario2 = {};

    for (let i = 0; i < digite.length; i++) {
        let caracter = digite[i];
        if (caracter !== ' ') {

            if (dicionario2[caracter]) {
                dicionario2[caracter]++;
            } else {
                dicionario2[caracter] = 1;
            }
        }
    }
    return dicionario2;
}

const resultado = recebeString();
console.log(resultado);

//3) Crie um objeto para armazenar informações de produtos de uma
//loja. As chaves devem ser os códigos dos produtos, e os
//valores, objetos contendo nome e preço. Itere sobre o dicionário
//e exiba os produtos com preços acima de R$ 50.
console.log("--------------Exercício 3--------------");

const dicionario3 = {
    321: { 'nome': 'Camisa', 'preco': 50 },
    333: { 'nome': 'Calça', 'preco': 20 },
    444: { 'nome': 'Shorts', 'preco': 10 }
}

for (const chave in dicionario3) {
    if (dicionario3[chave].preco >= 50) {
        console.log(`${chave} : ${dicionario3[chave].nome} - R$${dicionario3[chave].preco}`);
    }
}

//4) Crie uma função que receba um dicionário e remova todas as
//chaves cujo valor seja null ou undefined.
console.log("--------------Exercício 4--------------");

function deletaChaveNull() {
    const dicionario4 = {
        "chave1": null,
        "chave2": "cachorro",
        "chave3": undefined
    };


    for (const chave in dicionario4) {
        console.log(`${chave}: ${dicionario4[chave]}`);
    }

    for (const chave in dicionario4) {
        if (dicionario4[chave] === null || dicionario4[chave] === undefined) {
            delete dicionario4[chave];
        }
    }

    console.log("Resultado: ")
    for (const chave in dicionario4) {
        console.log(`${chave}: ${dicionario4[chave]}`);
    }
}

deletaChaveNull();

//5) Crie uma função que receba uma frase e use um Map para
//contar quantas vezes cada palavra aparece.
console.log("--------------Exercício 5--------------");

function recebeFrase() {
    const frase = prompt("Digite uma frase: ");
    const palavras = frase.split(' '); 
    const mapa = new Map();

    for (const palavra of palavras) { 
        if (mapa.has(palavra)) {
            mapa.set(palavra, mapa.get(palavra) + 1); 
        } else {
            mapa.set(palavra, 1);
        }
    }

    return mapa;
}

const resultado5 = recebeFrase();
console.log(resultado5);

//6) Use um Map para criar um contador de frequência de letras em
//uma string, diferenciando letras maiúsculas e minúsculas.
console.log("--------------Exercício 6--------------");

function contadorFrequencia() {
    const digite = prompt("Digite algo: ");
    const mapa = new Map();

    for (const caracter of digite) { 
        if (caracter !== ' ') { 
            if (mapa.has(caracter)) {
                mapa.set(caracter, mapa.get(caracter) + 1);
            } else {
                mapa.set(caracter, 1); 
            }
        }
    }
    return mapa;
}

const resultado6 = contadorFrequencia();
console.log(resultado6);


//7) Implemente uma função que converta um object para um Map
//e outra que faça o caminho inverso, convertendo um Map para
//um object.
console.log("--------------Exercício 7--------------");

function objetoParaMapa(objeto) {
    return new Map(Object.entries(objeto));
}

function mapaParaObjeto(mapa) {
    return Object.fromEntries(mapa);
}

const objeto = { a: 1, b: 2, c: 3 };

const MapaParaObjeto = objetoParaMapa(objeto);
console.log(MapaParaObjeto); 

const ObjetoParaMapa = mapaParaObjeto(MapaParaObjeto);
console.log(ObjetoParaMapa); 
