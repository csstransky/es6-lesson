// Old Way
// let person = {
//     first: "Kely",
//     hobbies: ["dance", "prance", "lance"],
//     printHobbies: function() {
//         let _this = this; // This needs to be done because of scoping issues with ".forEach"
//         this.hobbies.forEach(function (hobby) {
//             let string = `${_this.first} likes to ${hobby}`;
//             console.log(string);
//         });
//     }
// };

// New Way
let person = {
    first: "Kely",
    hobbies: ["dance", "prance", "lance"],
    printHobbies: function() {
        // The arrow function helps us keep the object This in scope
        this.hobbies.forEach((hobby) => {
            let string = `${this.first} likes to ${hobby}`;
            console.log(string);
        });
    }
};


person.printHobbies();