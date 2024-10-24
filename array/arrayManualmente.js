class MeuArray {

    constructor() {
        this.itens = {};  //usamos um objeto para armazenar os itens do array
        this.tamanho = 0; //mantemos o controle do tamanho do array
    }

    //adiciona um elemento ao final do array
    adicionar(elemento) {
        this.itens[this.tamanho] = elemento; //insere o elemento na posição do tamanho
        this.tamanho++ //incrementa o tamanho
    }

    //remove o último elemento do array
    remover() {
        if (this.tamanho === 0) {
            return undefined; //se o array estiver vazio, não há o que remover
        }

        const ultimoItem = this.itens[this.tamanho - 1]; //armazena o último item
        delete this.itens[this.tamanho - 1]; //remove o último item do array
        this.tamanho--; //decrementa o tamanho

        return ultimoItem; //retorna o item removido
    }

    //acessa o elemento de um índice específico
    obterElemento(indice) {

        if (indice < 0 || indice >= this.tamanho) {
            return undefined; //se o índice estiver fora do alcance, retorna undefined
        }
        return this.itens[indice]; //retorna o item no índice solicitado
    }

    //retorna o tamanho do array
    tamanhoArray() {
        return this.tamanho; //retorna o valor do tamanho atual do array
    }

    //remove todos os elementos do array
    limpar() {
        this.itens = {}; //limpa o objeto
        this.tamanho = 0; //reinicializa o tamanho
    }
}


//exemplo de uso
let minhaVariavel = new MeuArray();

minhaVariavel.adicionar(10);
minhaVariavel.adicionar(20);
minhaVariavel.adicionar(30);

console.log(minhaVariavel.obterElemento(1)); //saida: 20
console.log(minhaVariavel.tamanhoArray()); //saída: 3

console.log(minhaVariavel.remover()); //saída: 30 (remove o último elemento)
console.log(minhaVariavel.tamanhoArray()); //saída: 2