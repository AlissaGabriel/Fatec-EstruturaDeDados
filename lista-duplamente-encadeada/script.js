class Node {
    constructor(value) {
        this.value = value;
        this.next = null; //ponteiro para o próximo nó
        this.prev = null; //nó anterior
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null; //próximo nó (cabeça)
        this.tail = null; //último nó (cauda)
        this.length = 0; //tamanho da lista
    }

    //adicionar um nó ao final da lista
    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
    }

    //adicionar um nó ao início da lista
    prepend(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.head = newNode;
        }

        this.length++;
    }

    //remover o nó do final da lista
    removeLast() {
        if (!this.tail) return null;

        const removedNode = this.tail;

        if (this.tail === this.head) {
            this.head = null;
            this.tail = null;

        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.length--;
        return removedNode.value;
    }

    //remover o nó do início da lista
    removeFirst() {
        if (!this.tail) return null;

        const removedNode = this.head;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.length--;
        return removedNode.value;
    }

    //percorrer a lista do início ao fim
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    //percorrer a lista do fim ao início
    traverseReverse() {
        let current = this.tail;
        while (current) {
            console.log(current.value);
            current = current.prev;
        }
    }

    //inserir um nó em uma posição específica
    insertAt(value, index) {

        //caso o o índice não seja válido para inserir
        if (index < 0 || index > this.length) {
            console.log(`${index} não é um índice válido`);
            return;
        }

        const newNode = new Node(value);
        let current = this.head;

        if (index === 0) {
            this.prepend(value);        //se o índice for 0, insere o novo nó no início da lista
        } else if (index === this.length) {
            this.append(value);         //se o índice for igual ao tamanho da lista, insere o novo nó no fim da lista
        } else {
            let i = 0;  //variável de controle
            while (i < index) {     //percorre a lista até encontrar a posição
                current = current.next;  //move para o próximo nó
                i++;    //incrementa a variável de controle
            }

            //ajustando os ponteiros para inserir o novo nó
            newNode.prev = current.prev;    //novo nó aponta para o anterior
            newNode.next = current;         //novo nó aponta para o nó atual
            current.prev.next = newNode;    //nó anterior do atual aponta para o novo nó
            current.prev = newNode;         //nó atual aponta para novo nó como seu anterior
            this.length++;                  //incrementa o tamanho da lista
        }
    }

    //buscar um nó por valor
    find(value) {
        let current = this.head;    //ponteiro atual com a cabeça da lista
        let position = 0;       //inicializa a posição em 0

        //percorre a lista enquanto houver nós
        while (current !== null) {
            if (current.value === value) {  //verifica se o valor do nó atual corresponde ao valor procurado
                return position;            //retorna a posição
            }
            current = current.next;     //move para o próximo nó
            position++;                 //incrementa a posição
        }
        return -1; //retorna -1 se o valor não for encontrado
    }

    //removendo um nó em uma posição específica
    removeAt(index) {
        //caso o o índice não seja válido para inserir
        if (index < 0 || index > this.length) {
            console.log(`${index} não é um índice válido`);
            return null;
        }

        if (index === 0) {          //se o índice for 0, removo o primeiro nó
            return this.removeFirst();
        } else if (index === this.length - 1) {     //se o índice for o último nó, remove o último nó
            return this.removeLast();
        } else {
            let current = this.head;
            let i = 0;      //variável de controle
            while (i < index) {     //percorre a lista até encontrar a posição
                current = current.next;  //move para o próximo nó
                i++;    //incrementa a variável de controle
            }

            //ajustando os ponteiros
            const removedNode = current;    //guarda a referência do nó a ser removido
            current.prev.next = current.next;   //o nó anterior do atual aponta para o próximo nó
            current.next.prev = current.prev;   //o próximo nó do atual aponta para o nó anterior

            this.length--;  //decrementa o tamanho da lista
            return removedNode.value;       //retorna o valor do nó removido
        }
    }
}

let list = new DoublyLinkedList();

//inserindo no fim
list.append(30);
list.append(20);
list.append(10);

console.log("Percorrendo a lista do início ao fim: ");
list.traverse();

//inserindo no início
list.prepend(5);

console.log("Percorrendo a lista do início ao fim após a adição no início: ");
list.traverse();

//removendo o último
list.removeLast();
console.log("Percorrendo a lista do início ao fim após remover o último nó: ");
list.traverse();

//removendo o primeiro
list.removeFirst();
console.log("Percorrendo a lista do início ao fim após remover o primeiro nó: ");
list.traverse();

console.log("Percorrendo em ordem inversa: ");
list.traverseReverse();


//implemente uma função na classe DoublyLinkedList que insirá um nó em uma posição específica, chamando insertAt(value, index).
//implemente um método find(value) na lista duplamente encadeada que retorne o índice do nó que contém do valor fornecido. Se o valor não for encontrado, retorne -1.
//Modifique o método remove pra que ele remova um nó em uma posição específica da lista duplamente encadeada, chame-o de removeAt(index).

//inserindo um nó em posição específica
list.insertAt(90, 0);
console.log("Percorrendo a lista do início ao fim após inserir um nó em uma posição específica: ");
list.traverse();

console.log("Buscando o índice do nó por valor: ")
console.log(list.find(20));

//removendo um nó em posição específica
list.removeAt(2);
console.log("Percorrendo a lista do início ao fim após remover um nó em uma posição específica: ");
list.traverse();


