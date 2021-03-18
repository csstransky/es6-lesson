for (let letter of "JavaScript") {
    console.log(letter);
}
let topics = ["JavaScript", "Node", "CSS"];
for (let topic of topics) {
    console.log(topic);
}
let topics2 = new Map();
topics2.set("HTML", "/topic/html");
topics2.set("CSS", "/topic/css");
topics2.set("JavaScript", "/topic/javascript");

for (let topic of topics2.keys()) {
    console.log(topic);
}
for (let [key, value] of topics2.entries()) {
    console.log(`${key} is a thing here: ${value}`);
}
