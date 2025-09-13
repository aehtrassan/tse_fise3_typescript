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
