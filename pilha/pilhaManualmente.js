class MinhaPilha {
    constructor() {
        this.itens = {}; // Usamos um objeto para armazenar os elementos da pilha 
        this.tamanho = 0; // Mantemos o controle do tamanho da pilha
    }

    // Adiciona um elemento ao topo da pilha
    adicionar(elemento) {
        this.itens[this.tamanho] = elemento; // Insere o elemento na posição atual do tamanho 
        this.tamanho++; // Incrementa o tamanho
    }
    // Remove e retorna o elemento do topo da pilha
    remover() {
        if (this.tamanho === 0) {
            return undefined; // Se a pilha estiver vazia, retorna undefined
        }
        const ultimoItem = this.itens[this.tamanho - 1]; // Pega o item no topo da pilha
        delete this.itens[this.tamanho - 1]; // Remove o item do topo
        this.tamanho--; // Decrementa o tamanho
        return ultimoItem; // Retorna o item removido
    }

    //Retorna o elemento no topo pilha sem removê-lo

    topo() {
        if (this.tamanho === 0) {
            return undefined; //Se a pilha estiver vazia, retorna undefined
        }
        return this.itens[this.tamanho - 1]; // Retorna o item no topo
    }
    // Verifica se a pilha está vazia
    estaVazia() {
        return this.tamanho === 0; // Verifica se o tamanho da pilha é zero
    }

    // Retorna o número de elementos na pilha
    tamanhoPilha() {
        return this.tamanho; // Retorna o tamanho da pilha
    }
    // Limpa a pilha
    limpar() {
        this.itens = {}; // Reseta os itens
        this.tamanho = 0; // Reinicializa o tamanho
    }
}


// Exemplo de uso
let minhaVariavel = new MinhaPilha();

minhaVariavel.adicionar(10);
minhaVariavel.adicionar(20);
minhaVariavel.adicionar(30);

console.log(minhaVariavel.topo()); // Saída: 30 (Elemento no topo)

console.log(minhaVariavel.remover());// Saída: 30 (Remove o elemento do topo)
console.log(minhaVariavel.topo()); // Saída: 20 (Agora o topo é 20)

console.log(minhaVariavel.tamanhoPilha()); // Saída: 2 (Dois elementos restantes)


