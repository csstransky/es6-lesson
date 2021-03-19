class Vehicle {
    constructor(description, wheels) {
        this.description = description;
        this.wheels = wheels;
    }
    describeYourself() {
        console.log(`I am a ${this.description}
        with ${this.wheels} wheels.`);
    }
}

let coolSkiVan = new Vehicle("Cool Ski Van", 4);

console.log(coolSkiVan);
coolSkiVan.describeYourself();