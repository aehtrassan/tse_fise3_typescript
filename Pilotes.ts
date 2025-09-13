import Pilote from "./Pilote";
import Car from "./Car";

export default class Pilotes {

    pilotes: Pilote[];

    constructor() {
        this.pilotes = [];
    }

    public addPilote(pilote: Pilote): void {
        this.pilotes.push(pilote);
    }

    public displayPilotes(): void {
        this.pilotes.forEach(pilote => pilote.display());
    }
}


let pilote1 = new Pilote("Hamilton", 2000, "Great Britain", 5, new Car("Cooper", "Mini", "Red", 2004));
let pilote2 = new Pilote("Ghosn", 1999, "Lebanon", 10, new Car("Qashqai", "Nissan", "Grey", 2002));
let pilote3 = new Pilote("Macron", 2005, "France", 3, new Car("12", "Renault", "Magenta", 1972));
let pilote4 = new Pilote("Altman", 1998, "the USA", 8, new Car("Tahoe", "Chevrolet", "White", 1999));

let pilotesCollection = new Pilotes();
pilotesCollection.addPilote(pilote1);
pilotesCollection.addPilote(pilote2);
pilotesCollection.addPilote(pilote3);
pilotesCollection.addPilote(pilote4);
pilotesCollection.displayPilotes();

