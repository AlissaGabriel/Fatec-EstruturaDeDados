//Implemente uma fila de atendimento em JavaScript para um caixa de supermercado
//A fila deve permitir adicionar clientes e atender o cliente que está na frente da fila
//O exercício consistem em criar funções adicionarCliente para adicionar um cliente à fila
//e atenderCliente para remover o cliente que está sendo atendido.
class FiladeAtendimento{
    constructor(){
        this.fila = [];
    }

    adicionarCliente(cliente){
        this.fila.push(cliente);
        console.log(`Cliente adicionado: ${cliente}`);
    }

    atenderCliente(){
        if(this.fila.length === 0){
            console.log("Nenhum cliente na fila");
            return;
        }
        let clienteAtendido = this.fila.shift();
        console.log(`Cliente atendido: ${clienteAtendido}`);
    }
}

let filaSupermercado = new FiladeAtendimento();

filaSupermercado.adicionarCliente("Maria");
filaSupermercado.adicionarCliente("João");

filaSupermercado.atenderCliente();
console.log(filaSupermercado.fila);