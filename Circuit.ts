export default class Circuit {

    name: string;
    location: string;
    length: number; // in kilometers
    laps: number;

    constructor(name: string, location: string, length: number, laps: number) {
        this.name = name;
        this.location = location;
        this.length = length;
        this.laps = laps;
    }

    public display(): void {
        console.log(this.toString());
    }

    public toString(): string {
        return `Circuit ${this.name} located in ${this.location}, length: ${this.length} km, laps: ${this.laps}`;
    }
}