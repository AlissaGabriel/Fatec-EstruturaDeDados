//implemente uma pilha em javascript que simule um sistema de desfazer(undo)
//A pilha deve armazenar ações executadas e permitir desfazer a última ação
//O exercício consiste em implementar as funções adicionarAcao para
//adicionar uma ação à pilha e desfazer para remover e mostrar a última ação

class PilhaDeAcoes{
    constructor(){
        this.pilha = [];
    }

    adicionarAcao(acao){
        this.pilha.push(acao);
        console.log(`Ação adicionada: ${acao}`);
    }

    desfazer(acao){
        if(this.pilha.length === 0){
            console.log("Nenhuma ação para desfazer");
            return;
        }

        let acaoDesfeita = this.pilha.pop();
        console.log(`Ação desfeita: ${acaoDesfeita}`);
    }
}

let historico = new PilhaDeAcoes();
historico.adicionarAcao("Escreveu texto");
historico.adicionarAcao("Copiou texto");

historico.desfazer();
console.log(historico.pilha);