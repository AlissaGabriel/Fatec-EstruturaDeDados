class Grafo {
    constructor() {
        //estrutura para armazenar os vértices e suas conexões.
        this.adjacencia = {};
    }

    //adiciona um novo vértice ao grafo.
    adicionarVertice(vertice) {
        if (!this.adjacencia[vertice]) {
            this.adjacencia[vertice] = [];
        }
    }

    //adiciona uma aresta entre dois vértices com peso(não dirigido e ponderado)
    adicionarAresta(vertice1, vertice2, peso) {
        if (!this.adjacencia[vertice1]) {
            this.adicionarVertice(vertice1);
        }
        if (!this.adjacencia[vertice2]) {
            this.adicionarVertice(vertice2);
        }
        //adiciona aresta com peso
        this.adjacencia[vertice1].push({ vertice: vertice2, peso: peso });
        this.adjacencia[vertice2].push({ vertice: vertice1, peso: peso });
    }

    //remove uma aresta entre dois vértices.
    removerAresta(vertice1, vertice2) {
        this.adjacencia[vertice1] = this.adjacencia[vertice1].filter(v => v.vertice !== vertice2);
        this.adjacencia[vertice2] = this.adjacencia[vertice2].filter(v => v.vertice !== vertice1);
    }

    //remove um vértice e suas conexões
    removerVertice(vertice) {
        while (this.adjacencia[vertice]?.length) {
            const adjacente = this.adjacencia[vertice].pop().vertice;
            this.removerAresta(vertice, adjacente);
        }
        delete this.adjacencia[vertice];
    }

    //exibe o grafo
    imprimirGrafo() {
        for (let vertice in this.adjacencia) {
            const arestas = this.adjacencia[vertice].map(a => `${a.vertice} (peso: ${a.peso})`);
            console.log(`${vertice} -> ${arestas.join(', ')}`);
        }
    }

    //implementação da busca em largura(BFS)
    buscaEmLargura(inicio) {
        const fila = [inicio];
        const visitados = [];
        visitados.push(inicio);
        const ordemDeVisita = [];

        while (fila.length > 0) {
            const verticeAtual = fila.shift();
            ordemDeVisita.push(verticeAtual);

            //percorre os vizinhos do vértice atual
            for (let vizinho of this.adjacencia[verticeAtual]) {
                if (!visitados.includes(vizinho.vertice)) {   
                    visitados.push(vizinho.vertice);
                    fila.push(vizinho.vertice);
                }
            }
        }
        return ordemDeVisita;
    }

    menorCaminho(inicio, fim) {
        const distancias = {};
        const antecessores = {};
        const visitados = {};

        for (let vertice in this.adjacencia) {
            distancias[vertice] = Infinity;
            antecessores[vertice] = null;
            visitados[vertice] = false;
        }
        distancias[inicio] = 0;

        let verticeAtual = inicio;
        while (verticeAtual) {
            visitados[verticeAtual] = true;
            const vizinhos = this.adjacencia[verticeAtual];

            for (let vizinho of vizinhos) {
                if (visitados[vizinho.vertice]) continue;

                const novaDistancia = distancias[verticeAtual] + vizinho.peso;
                if (novaDistancia < distancias[vizinho.vertice]) {
                    distancias[vizinho.vertice] = novaDistancia;
                    antecessores[vizinho.vertice] = verticeAtual;
                }
            }

            verticeAtual = null;
            let menorDistancia = Infinity;
            for (let vertice in distancias) {
                if (!visitados[vertice] && distancias[vertice] < menorDistancia) {
                    menorDistancia = distancias[vertice];
                    verticeAtual = vertice;
                }
            }
        }

        const caminho = [];
        let vertice = fim;
        while (antecessores[vertice] !== null) {
            caminho.unshift(vertice);
            vertice = antecessores[vertice];
        }
        caminho.unshift(inicio);

        return { caminho, distancia: distancias[fim] };
    }

}//fecha classe grafo

//exemplo de uso
const meuGrafo = new Grafo();
meuGrafo.adicionarVertice('A');
meuGrafo.adicionarAresta('A', 'B', 9);
meuGrafo.adicionarAresta('A', 'C', 8);
meuGrafo.adicionarAresta('B', 'D', 7);
meuGrafo.imprimirGrafo();

console.log("---------Exercicios ----------")
console.log("Criando um grafo com os vértices 1, 2, 3 e 4");
console.log("E arestas 1-2, 1-3 e 2-4: ");
meuGrafo.adicionarVertice('1');
meuGrafo.adicionarVertice('2');
meuGrafo.adicionarVertice('3');
meuGrafo.adicionarVertice('4');
meuGrafo.adicionarAresta('1', '2', 4);
meuGrafo.adicionarAresta('1', '3', 5);
meuGrafo.adicionarAresta('2', '4', 3);
meuGrafo.imprimirGrafo();

console.log("Removendo o vértice 2: ");
meuGrafo.removerVertice('2');
meuGrafo.imprimirGrafo();

console.log("Resultado da busca em largura do vértice 1: ");
console.log(meuGrafo.buscaEmLargura('1'));

console.log("Menor caminho do vértice A ao D: ");
const menor = meuGrafo.menorCaminho('A', 'D');
console.log(menor.caminho.join(' -> '));
console.log("Distância entre A e D: ") //aresta de A a B = peso 9; aresta de B a D = peso 7 
console.log(menor.distancia);   