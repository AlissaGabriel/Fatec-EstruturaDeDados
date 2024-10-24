//Implemente uma pilha que simule a navegação de páginas de um navegador.
//A pilha deve permitir adicionar uma nova página visitada e voltar para
//a página anterior(usando voltar). O exercício consiste em implementar
//as funções navegarPara e voltar.

class Pilha {
    constructor() {
        this.pilha = [];
    }

    navegarPara(acao) {
        this.pilha.push(acao);
        console.log(`Página (${acao}) adicionada com sucesso!`);
    }

    voltar(acao) {
        if (this.pilha.length === 0) {
            return undefined;
        }
        console.log(`Excluindo a página anterior (${this.pilha.pop(acao)})!`);
    }
}

let navegacao = new Pilha();
navegacao.navegarPara("Página 1");
navegacao.navegarPara("Página 2");
navegacao.voltar();
console.log(navegacao.pilha);