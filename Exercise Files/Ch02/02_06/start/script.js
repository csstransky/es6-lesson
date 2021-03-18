let course = new Map();

course.set("react", { description: "ui" });
course.set("jest", { description: "testing" });

console.log(course);
console.log(course.get("react").description);

let details = new Map([
    // Interesting thing to note, you can add as much as you like after the first 2 elements,
    // but JS will completely IGNORE them
    [new Date(), "today", "hello", 3749834753908734087],
    [2, { javascript: ["js", "node", "react"] }],
    ["items", [1, 2]]
]);

console.log(details)
console.log(details.size); // will show 3
details.forEach(function (item) {
    console.log(item);
})