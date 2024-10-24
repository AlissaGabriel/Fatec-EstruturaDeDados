class Node {
    constructor(value) {
        this.value = value;
        this.next = null; //ponteiro para o próximo nó
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    //Inserir no inicio da lista
    insertAtBeginning(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    //Inserir no fim da lista
    insertAtEnd(value) {
        let newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    //Remover um nó por valor
    removeByValue(value) {
        if (this.head === null) {
            return;
        }

        //Se o nó a ser removido for o primeiro
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null && current.next.value !== value) {
            current = current.next;
        }

        if (current.next !== null) {
            current.next = current.next.next;
        }
    }

    //buscar um nó por valor
    find(value) {
        let current = this.head;

        while (current !== null) {
            if (current.value === value) {
                return current;
            }

            current = current.next;
        }
        return null; //retorna null se o valor não for encontrado
    }

    //exibir a lista(opcional, para facilitar a visualização)
    printList() {
        let current = this.head;
        let list = ' ';
        while (current !== null) {
            list += current.value + ' -> ';
            current = current.next;
        }

        console.log(list + 'null');
    }
}

//implemente uma função que cria uma lista encadeada e insira os valores 10,20 e 30
//no início da lista e os valores 40, 50 e 60 no fim.

let list = new LinkedList();

//inserindo no início
list.insertAtBeginning(30);
list.insertAtBeginning(20);
list.insertAtBeginning(10);

//inserindo no fim
list.insertAtEnd(40);
list.insertAtEnd(50);
list.insertAtEnd(60);

//mostrando a lista
list.printList();

//removendo um valor
list.removeByValue(40);

//mostrando a lista
list.printList();

//procurando um valor na lista
const foundNode = list.find(30);
if (foundNode) {
    console.log("Nó encontrado: " + foundNode.value);
} else {
    console.log("Nó não encontrado");
}

console.log(list.find(50));
