class Node {
    constructor(turtle) {
        this.turtle = turtle;
        this.next = null;
    }
}

class Race {
    constructor() {
        this.head = null;
    }


    insertTurtleAtBeginning(turtle) {
        let newTurtle = new Node(turtle);
        newTurtle.next = this.head;
        this.head = newTurtle;
    }


    insertTurtleAtEnd(turtle) {
        let newTurtle = new Node(turtle);

        if (this.head === null) {
            this.head = newTurtle;
            return;
        }

        let currentTurtle = this.head;
        while (currentTurtle.next !== null) {
            currentTurtle = currentTurtle.next;
        }
        currentTurtle.next = newTurtle;
    }


    removeTurtle(turtle) {
        if (this.head === null) {
            return;
        }


        if (this.head.turtle === turtle) {
            this.head = this.head.next;
            return;
        }

        let currentTurtle = this.head;
        while (currentTurtle.next !== null && currentTurtle.next.turtle !== turtle) {
            currentTurtle = currentTurtle.next;
        }

        if (currentTurtle.next !== null) {
            currentTurtle.next = currentTurtle.next.next;
        }
    }


    findTurtle(turtle) {
        let currentTurtle = this.head;
        let position = 0;

        while (currentTurtle !== null) {
            if (currentTurtle.turtle === turtle) {
                return position;
            }

            currentTurtle = currentTurtle.next;
        }
        return -1;
    }


    printRace() {
        let currentTurtle = this.head;
        let race = ' ';
        while (currentTurtle !== null) {
            race += currentTurtle.turtle + ' -> ';
            currentTurtle = currentTurtle.next;
        }

        console.log(race + 'null');
    }
}


let turtleRace = new Race();

//inserindo uma tartaruga no início
turtleRace.insertTurtleAtBeginning("Tartaruga Lenta");

//inserindo duas tartarugas no final
turtleRace.insertTurtleAtEnd("Tartaruga Veloz");
turtleRace.insertTurtleAtEnd("Tartaruga Média");

turtleRace.printRace();

//removendo a tartaruga lenta
turtleRace.removeTurtle("Tartaruga Lenta");

const position = turtleRace.findTurtle("Tartaruga Lenta");
if (position !== -1) {
    console.log("Tartaruga Lenta Encontrada na posição: " + position);
} else {
    console.log("Tartatuga Lenta não faz mais parte da corrida");
}

//procurando a posição da tartaruga veloz
const findPosition = turtleRace.findTurtle("Tartaruga Veloz");
if (findPosition !== -1) {
    console.log("Tartaruga Veloz Encontrada na posição: " + findPosition);
} else {
    console.log("Tartatuga Veloz não faz mais parte da corrida");
}



turtleRace.printRace();