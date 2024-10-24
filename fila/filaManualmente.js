class Fila {

    constructor() {
        this.itens = {}; // Usamos um objeto para armazenar os itens
        this.inicio = 0; // Representa o índice do início da fila
        this.fim = O; // Representa o índice do fim da fila

    }

    // Adiciona um elemento ao final da fila (enqueue)
    enqueue(elemento) {
        this.itens[this.fim] = elemento; // Coloca o elemento no fim da fila
        this.fim++; // Incrementa o índice do fim da fila
    }

    // Remove e retorna o primeiro elemento da fila (dequeue)
    dequeue() {
        if (this.isEmpty()) {
            return undefined; // Sea fila estiver vazia, retorna undefined
        }
        const item = this.itens[this.inicio]; // Obtém o primeiro elemento
        delete this.itens[this.inicio]; // Remove o item do início da fila
        this.inicio++; // Move o índice do início para o próximo item
        // Quando o início e o fim estiverem alinhados, redefine a fila
        if (this.inicio === this.fim) {
            this.inicio = 0;
            this.fim = 0;
        }
        return item; // Retorna o item removido
    }
    // Retorna o primeiro elemento da fila sem removê-lo (peek)
    front() {
        if (this.isEmpty()) {
            return undefined; // Sea fila estiver vazia, retorna undefined
        }
        return this.itens[this.inicio]; // Retorna o primeiro elemento
    }

    //verifica se a fila está vazia
    isEmpty() {
        return this.fim === this.inicio; //verifica se os índices estão iguais 
    }

    //retorna o tamanha da fila
    size() {
        return this.fim - this.inicio; //calcula a diferença entre fim e inicio
    }

    //limpa a fila
    clear() {
        this.itens = {};
        this.inicio = 0;
        this.fim = 0
    }
}

//exemplo de uso
let minhaVariavel = new Fila();

minhaVariavel.enqueue("Cliente 1");
minhaVariavel.enqueue("Cliente 2");
minhaVariavel.enqueue("Cliente 3");

console.log(minhaVariavel.front()); //Saída: "Cliente 1"

console.log(minhaVariavel.dequeue()); //Saída: "Cliente 1"
console.log(minhaVariavel.dequeue()); //Saída: "Cliente 2"

minhaVariavel.enqueue("Cliente 4");

console.log(minhaVariavel.size()); //Saída 2 (Cliente 3 e Cliente 4 ainda estão na fila);
console.log(minhaVariavel.front()); //Saída: "Cliente 3"


