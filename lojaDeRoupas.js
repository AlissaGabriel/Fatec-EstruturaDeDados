let itemRoupa = ["", "", "", ""];
let preco = [0.0, 0.0, 0.0, 0.0];
let valorTotalItem = [0.0, 0.0, 0.0, 0.0];
let quantidade = [0, 0, 0, 0];

let opcaoItem;
let opcao;
let qntItem = 0;
let i = 0;
let continuar = 0;
let somaTotal = 0;
let desconto;
let nomeCliente;
let telefone;
let pagamento = 0;

itemRoupa[0] = "Camisa";
preco[0] = 29.99;
quantidade[0] = 10;

itemRoupa[1] = "Calça";
preco[1] = 69.99;
quantidade[1] = 10;

itemRoupa[2] = "Bermuda";
preco[2] = 39.99;
quantidade[2] = 10;

itemRoupa[3] = "Boné";
preco[3] = 19.99;
quantidade[3] = 10;

console.log("Loja de Roupas: ");

do {
    console.log("1 - Consultar Estoque")
    console.log("2 - Realizar vendas do Item")
    console.log("3 - Fazer o recebimento da venda")
    console.log("4 - Sair")

    opcaoItem = parseInt(prompt("Escolha a opção: "));

    if (opcaoItem === 1) {
        console.log("Estoque: ");

        for (i = 0; i < 4; i++) {
            console.log(itemRoupa[i] + "   " + quantidade[i] + "   " + preco[i]);
        }
    } else if (opcaoItem === 2) {

        nomeCliente = prompt("Informe o seu nome: ");
        telefone = prompt("Informe o seu telefone: ");

        do {
            do {
                console.log("Informe o número do item que deseja.");
                console.log("1. Camisa - R$29.99");
                console.log("2. Calça - R$69.99");
                console.log("3. Bermuda - R$39.99");
                console.log("4. Boné - R$19.99");

                opcao = parseInt(prompt("Escolha uma opção: "));
            } while (opcao < 1 || opcao > 4);

            console.log("Estoque: ");
            console.log("Item" + " " + " " + "Quantidade");

            for (i = 0; i < 4; i++) {
                console.log(itemRoupa[i] + "   " + quantidade[i]);
            }

            do {
                qntItem = parseInt(prompt("Informe a quantidade de itens que deseja: "));

                console.log("Quantidade de itens inválida");

            } while (qntItem <= 0 || qntItem > quantidade[opcao - 1]);

            if (opcao === 1) {
                valorTotalItem[0] = qntItem * 29.99;
                quantidade[0] = quantidade[0] - qntItem;
            } else if (opcao === 2) {
                valorTotalItem[1] = qntItem * 69.99;
                quantidade[1] = quantidade[1] - qntItem;
            } else if (opcao === 3) {
                valorTotalItem[2] = qntItem * 39.99;
                quantidade[2] = quantidade[2] - qntItem;
            } else {
                valorTotalItem[3] = qntItem * 19.99;
                quantidade[3] = quantidade[3] - qntItem;
            }

            console.log("Continuar Comprando?");
            console.log("1. Sim");
            console.log("2. Não");

            continuar = parseInt(prompt("Escolha uma opção: "));

        } while (continuar === 1);
    } else if (opcaoItem === 3) {
        console.log("Qual sua forma de pagamento?");
        do {
            console.log("1 - Cartão de Crédito");
            console.log("2 - Cartão de Débito");
            console.log("3 - Pix");
            console.log("4 - Dinheiro (10% de DESCONTO)");

            pagamento = parseInt(prompt("Escolha uma opção: "));
        } while (pagamento < 1 || pagamento > 4);

        for (i = 0; i < 4; i++) {
            somaTotal = somaTotal + valorTotalItem[i];
        }

        if (pagamento === 4) {
            desconto = somaTotal * 0.1;
            somaTotal = somaTotal - desconto;

            console.log("Desconto para pagamento em Dinheiro de 10%: R$" + desconto.toFixed(2));
        }

        console.log("Extrato da Conta");
        console.log("Nome: " + nomeCliente);
        console.log("Telefone: " + telefone);

        console.log("Itens: ")

        for (i = 0; i < 4; i++) {
            console.log(itemRoupa[i] + "   R$" + preco[i].toFixed(2) + "  Subtotal R$" + valorTotalItem[i].toFixed(2));
        }

        console.log("Total: R$" + somaTotal.toFixed(2));
    }
} while (opcaoItem !== 4);



