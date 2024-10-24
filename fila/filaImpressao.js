//Crie uma fila de impressão em JavaScript. A fila deve permitir adicionar documentos 
//para impressão e imprimir o próximo documento da fila. O exercício consiste em
//implementar as funções adicionarDocumento e imprimirProximo.
class FilaImpressao{
    constructor(){
        this.fila = [];
    }

    adicionarDocumento(acao){
        this.fila.push(acao);
        console.log(`Documento ${acao} adicionado`);
    }

    imprimirProximo(acao){
        if(this.fila.length === 0){
            console.log("Fila vazia");
            return;
        }
        let proximoDocumento = this.fila.shift(acao);
        console.log(`Próximo documento para impressão: ${proximoDocumento}`);
    }
}

let impressao = new FilaImpressao();

impressao.adicionarDocumento("Pagamento");
impressao.adicionarDocumento("Retirada");

impressao.imprimirProximo();

console.log(impressao.fila);

