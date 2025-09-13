import Car from "./Car";
export default class Pilote {

    name: string;
    birthYear: number;
    nationality: string;
    experience: number;
    car: Car;


    constructor(name: string, birthYear: number, nationality: string, experience: number, car: Car) {
        this.name = name;
        this.birthYear = birthYear;
        this.nationality = nationality
        this.experience = experience;
        this.car = car;
    }
    public display(): void {
        console.log(this.toString());
    }
    public toString(): string {
        return `Pilote ${this.name}, aged ${new Date().getFullYear() - this.birthYear}, from ${this.nationality}, has ${this.experience} years of experience and drives a ${this.car.color} ${this.car.brand} ${this.car.model} (${this.car.year})`;
    }
}