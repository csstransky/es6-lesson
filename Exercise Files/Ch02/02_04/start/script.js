const planet = "Mars";
console.log(planet.startsWith(("Ma")));
console.log(planet.startsWith(("blah")) === false);
console.log(planet.endsWith("s"));
console.log(planet.includes("r"));
console.log(planet.includes("Mars11") == false);
// Keeps track of FIRST instance
console.log(planet.search("a") == 1);