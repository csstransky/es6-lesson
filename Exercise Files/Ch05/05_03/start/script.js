// =>

let studentList = function(students) {
    console.log(students);
};

let guyList = (dudes) => {
    console.log(dudes)
}
studentList(['A', 'b', 'C']);
guyList(["gib", "rad", "thad"]);

// It can even look like this with curly braces, BUT there must be no other statements (like in C):
// let guyList = (dudes) => console.log(dudes)

let yummyList = ["apple", "bananana", "strawberry"];
yummyList.map((fruit) => console.log(fruit));