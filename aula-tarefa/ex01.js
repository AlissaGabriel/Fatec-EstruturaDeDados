class Node {
    constructor(point) {
        this.point = point;
        this.next = null;
    }
}

class Trail {
    constructor() {
        this.head = null;
    }


    insertPointAtBeginning(point) {
        let newPoint = new Node(point);
        newPoint.next = this.head;
        this.head = newPoint;
    }


    insertPointAtEnd(point) {
        let newPoint = new Node(point);

        if (this.head === null) {
            this.head = newPoint;
            return;
        }

        let currentPoint = this.head;
        while (currentPoint.next !== null) {
            currentPoint = currentPoint.next;
        }
        currentPoint.next = newPoint;
    }


    removePoint(point) {
        if (this.head === null) {
            return;
        }


        if (this.head.point === point) {
            this.head = this.head.next;
            return;
        }

        let currentPoint = this.head;
        while (currentPoint.next !== null && currentPoint.next.point !== point) {
            currentPoint = currentPoint.next;
        }

        if (currentPoint.next !== null) {
            currentPoint.next = currentPoint.next.next;
        }
    }


    findPoint(point) {
        let currentPoint = this.head;

        while (currentPoint !== null) {
            if (currentPoint.point === point) {
                return currentPoint;
            }

            currentPoint = currentPoint.next;
        }
        return null;
    }


    printTrail() {
        let currentPoint = this.head;
        let point = ' ';
        while (currentPoint !== null) {
            point += currentPoint.point + ' -> ';
            currentPoint = currentPoint.next;
        }

        console.log(point + 'null');
    }
}


let adventure = new Trail();

//inserindo no início
adventure.insertPointAtBeginning("Cachoeira");
adventure.insertPointAtBeginning("Mirante");

adventure.printPoint();

//inserindo no fim
adventure.insertPointAtEnd("Caverna");

adventure.printPoint();

//removendo um local
adventure.removePoint("Mirante");

//verificar se o mirante ainda faz parte da trilha
const findTrail = adventure.findPoint("Mirante");
if (findTrail) {
    console.log("Lugar Encontrado: " + findTrail.point);
} else {
    console.log("Mirante não faz mais parte da trilha");
}

adventure.printPoint();