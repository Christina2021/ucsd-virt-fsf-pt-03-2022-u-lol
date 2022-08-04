// To run in terminal, command is: ts-node-dev index.ts
console.log("This is typescript");

const hello = function (person: string) {
    return `Hello, ${person}`;
}

//console.log(hello(1)) //will not work!

console.log(hello("Tanjiro"))

interface Animal {
    name: string;
    color: string;
    isMammal?: boolean; // ? means optional
}

const printAnimals = function (animal: Animal) {
    return `Hello, ${animal.name}, you are ${animal.color}, ${animal.isMammal ? "Yes" : "No"}`;
};

console.log(printAnimals({name: "Teemo", color: "orange", isMammal: true}))
console.log(printAnimals({name: "Fish", color: "neon"}))
