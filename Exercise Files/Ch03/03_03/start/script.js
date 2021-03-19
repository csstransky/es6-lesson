let cities = [
    "Boston",
    "New York",
    "London",
    "Portland",
    "Hell"
];
console.log(cities.includes("Boston"));
console.log(cities.includes("Bos") === false);
console.log(cities.includes("???") === false);