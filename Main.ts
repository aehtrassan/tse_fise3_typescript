import Car from "./Car";
import Pilote from "./Pilote";
import Pilotes from "./Pilotes";
import Circuit from "./Circuit";
import Season from "./Season";

import * as readline from "readline";

// Create Pilotes
let pilote1 = new Pilote("Hamilton", 2000, "Great Britain", 5, new Car("Cooper", "Mini", "Red", 2004), 15);
let pilote2 = new Pilote("Ghosn", 1999, "Lebanon", 10, new Car("Qashqai", "Nissan", "Grey", 2002), 20);
let pilote3 = new Pilote("Macron", 2005, "France", 3, new Car("12", "Renault", "Magenta", 1972), 10);
let pilote4 = new Pilote("Altman", 1998, "the USA", 8, new Car("Tahoe", "Chevrolet", "White", 1999), 25);

let pilotesCollection = new Pilotes();
pilotesCollection.addPilote(pilote1);
pilotesCollection.addPilote(pilote2);
pilotesCollection.addPilote(pilote3);
pilotesCollection.addPilote(pilote4);

// Create Circuits
let circuit1 = new Circuit("Silverstone", "UK", 5.891, 52);
let circuit2 = new Circuit("Monaco", "Monaco", 3.337, 78);
let circuit3 = new Circuit("Spa-Francorchamps", "Belgium", 7.004, 44);

// Create Season
let season2025 = new Season(2025);
season2025.addCircuit(circuit1);
season2025.addCircuit(circuit2);
season2025.addCircuit(circuit3);

season2025.addPilote(pilote1);
season2025.addPilote(pilote2);
season2025.addPilote(pilote3);
season2025.addPilote(pilote4);

// Record some results
season2025.recordResult(pilote1, 25);
season2025.recordResult(pilote2, 18);
season2025.recordResult(pilote3, 15);
season2025.recordResult(pilote4, 12);

season2025.recordResult(pilote1, 10);
season2025.recordResult(pilote2, 25);
season2025.recordResult(pilote3, 8);
season2025.recordResult(pilote4, 15);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion() {
    rl.question(
        "\n\n\nWelcome to the 2025 F13 Season. What do you want to display?\n1. Circuits\n2. Pilotes\n3. Results\n(q to quit)\nYour choice: ",
        (answer) => {
            if (answer === "1") {
                console.log("\nList of Circuits:");
                season2025.circuits.forEach(circuit => circuit.display());
            } else if (answer === "2") {
                console.log("\nList of Pilotes:");
                pilotesCollection.displayPilotes();
            } else if (answer === "3") {
                console.log("\nSeason Results so far:");
                season2025.getStandings().forEach((entry, index) => {
                    console.log(`${index + 1}. ${entry.name} - ${entry.points} points`);
                });
            } else if (answer === "q" || answer === "e") {
                rl.close();
                return;
            } else {
                console.log("Invalid choice.");
            }
            askQuestion(); // ask again
        }
    );
}

askQuestion();