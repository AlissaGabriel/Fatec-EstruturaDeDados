//classe node para representar um nó na árvore binária

class Node {
    constructor(value) {
        this.value = value; //valor armazenado no nó
        this.left = null; //referência para o nó filho à esquerda
        this.right = null; //referência para o nó filho à direita
    }
}

//classe binarytree para representar a árvore binária
class BinaryTree {
    constructor() {
        this.root = null; //inicialmente, a árvore está vazia, então a raiz é null
    }

    //método para inserir um valor na árvore
    insert(value) {
        const newNode = new Node(value); //cria um novo nó com o valor dado
        if (this.root == null) {
            //se a árvore estiver vazia, o novo nó se torna a raiz
            this.root = newNode;
        } else {
            //caso contrário, insere o nó na posição correta
            this._insertNode(this.root, newNode);
        }
    }

    //método auxiliar para encontrar a posição correta e inserir o nó na árvore
    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            //se o valor do novo nó for menor que o valor do nó atual, vá para a subárvore esquerda
            if (node.left === null) {
                //se não houver nó à esquerda, insere o novo nó aqui
                node.left = newNode;
            } else {
                //caso contrário, chama o método recursivamente na subárvore esquerda
                this._insertNode(node.left, newNode);
            }
        } else {
            //se o valor do novo nó for maior ou igual ao valor do nó atual, vá para a subárvore direita
            if (node.right === null) {
                //se não houver nó à direita, insere o novo nó aqui
                node.right = newNode;
            } else {
                //caso contrário, chama o método recursivamente na subárvore direita
                this._insertNode(node.right, newNode);
            }
        }
    }

    //percurso em-ordem: visita a subárvore esquerda, o nó atual e a subárvore direita
    inOrder(node = this.root) {
        if (node !== null) {
            this.inOrder(node.left) //visita a subárvore esquerda
            console.log(node.value); //visita o nó atual
            this.inOrder(node.right) //visita a subárvore direita
        }
    }

    //percurso pré-ordem: visita o nó atual, a subárvore esquerda e a subárvore direita
    preOrder(node = this.root) {
        if (node !== null) {
            console.log(node.value); //visita o nó atual
            this.preOrder(node.left) //visita a subárvore esquerda
            this.preOrder(node.right) //visita a subárvore direita
        }
    }

    //percurso pós-ordem: visita a subárvore esquerda, a subárvore direita e o nó atual
    postOrder(node = this.root) {
        if (node !== null) {
            this.postOrder(node.left) //visita a subárvore esquerda
            this.postOrder(node.right) //visita a subárvore direita
            console.log(node.value); //visita o nó atual
        }
    }

    //método para buscar um valor na árvore
    search(value) {
        return this._searchNode(this.root, value); //inicia a busca a partir da raiz
    }

    //método auxiliar para realizar a busca recursivamente
    _searchNode(node, value) {
        if (node === null) {
            //se o nó atual é null, o valor não está na árvore
            return false;
        }
        if (value === node.value) {
            //se o valor é encontrado, retorna true
            return true;
        } else if (value < node.value) {
            //se o valor procurado é menor, continua a busca na subárvore esquerda
            return this._searchNode(node.left, value);
        } else {
            //se o valor procurado é maior, continua a busca na subárvore direita
            return this._searchNode(node.right, value);
        }
    }

    //método para remover um nó com o valor especificado
    remove(value) {
        this.root = this._removeNode(this.root, value); //inicia a remoção a partir da raiz
    }

    //método auxiliar para remover o nó recursivamente
    _removeNode(node, value) {
        if (node === null) {
            return null; //se o nó é null, não há nada para remover
        }

        if (value < node.value) {
            //se o valor a ser removido é menor, continua na subárvore esquerda
            node.left = this._removeNode(node.left, value);
            return node;
        } else if (value > node.value) {
            //se o valor a ser removido é maior, continua na subárvore direita
            node.right = this._removeNode(node.right, value);
            return node;
        } else {
            //se o valor é igual ao nó atual, este é o nó a ser removido

            //caso 1: nó sem filhos (nó folha)
            if (node.left === null && node.right === null) {
                node = null; //remove o nó ao definir como null
                return node;
            }

            //caso 2: nó com um filho
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            //caso 3: nó com dois filhos
            //encontra o nó com o menor valor na subárvore direita
            const aux = this._findMinNode(node.right);
            node.value = aux.value; //substitui o valor do nó atual pelo valor mínimo encontrado
            node.right = this._removeNode(node.right, aux.value); //remove o nó duplicado na subárvore direita
            return node;
        }
    }

    //definição do método _findMinNode para encontrar o nó com o menor valor
    _findMinNode(node) {
        while (node.left !== null) {
            node = node.left; //vai para a esquerda até encontrar o nó com o menor valor
        }
        return node;
    }
}

//exemplo de uso da árvore binária
const tree = new BinaryTree();
tree.insert(15);
tree.insert(10);
tree.insert(20);
tree.insert(8);
tree.insert(12);
tree.insert(18);
tree.insert(25);

console.log("Percurso em-ordem:");
tree.inOrder();

console.log("Buscar valor 18: ");
console.log(tree.search(18) ? "Encontrado" : "Não encontrado");

console.log("Remover valor 10:");
tree.remove(10);
tree.inOrder();


