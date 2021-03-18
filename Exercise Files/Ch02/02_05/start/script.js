const id = Symbol();
console.log(id);
const courseInfo = {
    title: "JavaScript",
    topics: [
        "strings",
        "array",
        "choco"
    ],
    id: "js-course"
};
// Interestingly, all of these will retroactively change to 2222
// I think this behavior is because of how console.log is called
console.log(courseInfo)
courseInfo[id] = 4123;
console.log(courseInfo);
console.log(courseInfo[id]); // This WILL print correctly however
courseInfo[id] = 2222;
console.log(courseInfo);
console.log(courseInfo[id]);