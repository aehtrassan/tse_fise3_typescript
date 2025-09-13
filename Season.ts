import Circuit from "./Circuit";
import Pilote from "./Pilote";

export default class Season {
    
    year: number;
    circuits: Circuit[];
    pilotes: Pilote[];
    results: Record<string, number>; // key: pilote name, value: points

    constructor(year: number) {
        this.year = year;
        this.circuits = [];
        this.pilotes = [];
        this.results = {};
    }

    public addCircuit(circuit: Circuit): void {
        this.circuits.push(circuit);
    }

    public addPilote(pilote: Pilote): void {
        this.pilotes.push(pilote);
    }

    public recordResult(pilote: Pilote, points: number): void {
        if (this.results[pilote.name]) {
            this.results[pilote.name] += points;
        } else {
            this.results[pilote.name] = points;
        }
    }

    public getStandings(): { name: string; points: number }[] {
        const standings: { name: string; points: number }[] = [];
        for (const name in this.results) {
            standings.push({ name, points: this.results[name] });
        }
        standings.sort((a, b) => b.points - a.points);
        return standings;
    }

    public displaySeason(): void {
        console.log(`Season ${this.year}`);
        console.log("Circuits:");
        this.circuits.forEach(circuit => circuit.display());
        console.log("Pilotes:");
        this.pilotes.forEach(pilote => pilote.display());
        console.log("Standings:");
        this.getStandings().forEach((entry, index) => {
            console.log(`${index + 1}. ${entry.name} - ${entry.points} points`);
        });
    }
}
