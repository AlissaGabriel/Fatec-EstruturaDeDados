class Node {
    constructor(power) {
        this.power = power;
        this.next = null;
    }
}

class Powers {
    constructor() {
        this.head = null;
    }


    insertPowerAtBeginning(power) {
        let newPower = new Node(power);
        newPower.next = this.head;
        this.head = newPower;
    }


    insertPowerAtEnd(power) {
        let newPower = new Node(power);

        if (this.head === null) {
            this.head = newPower;
            return;
        }

        let currentPower = this.head;
        while (currentPower.next !== null) {
            currentPower = currentPower.next;
        }
        currentPower.next = newPower;
    }


    removePower(power) {
        if (this.head === null) {
            return;
        }


        if (this.head.power === power) {
            this.head = this.head.next;
            return;
        }

        let currentPower = this.head;
        while (currentPower.next !== null && currentPower.next.power !== power) {
            currentPower = currentPower.next;
        }

        if (currentPower.next !== null) {
            currentPower.next = currentPower.next.next;
        }
    }


    findPower(power) {
        let currentPower = this.head;

        while (currentPower !== null) {
            if (currentPower.power === power) {
                return currentPower;
            }

            currentPower = currentPower.next;
        }
        return null;
    }


    printPowers() {
        let currentPower = this.head;
        let powers = ' ';
        while (currentPower !== null) {
            powers += currentPower.power + ' -> ';
            currentPower = currentPower.next;
        }

        console.log(powers + 'null');
    }
}


let heroPowers = new Powers();

//inserindo no início
heroPowers.insertPowerAtBeginning("Escudo de Fogo");

heroPowers.printPowers();

//inserindo no fim
heroPowers.insertPowerAtEnd("Raio Congelante");

heroPowers.printPowers();

//removendo o poder raio congelante
heroPowers.removePower("Raio Congelante");

//procurando o poder escudo de fogo
const find = heroPowers.findPower("Escudo de Fogo");
if (find) {
    console.log("Poder Encontrado: " + find.power);
} else {
    console.log("Escudo de Fogo não faz mais parte dos poderes");
}

heroPowers.printPowers();