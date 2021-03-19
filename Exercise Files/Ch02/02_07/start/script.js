let stuff = new Set();
stuff.add("ball");
stuff.add("flower").add("cats");
stuff.add("flower"); // For all intents and purposes, this is ignored
console.log(stuff);
console.log(stuff.size);
console.log(stuff.has("dogs") == false);
console.log(stuff.has("ball"));
stuff.delete("ball");

// Using ".map" does not work
// stuff.map(function(thing) {
//     console.log(thing);
// });

stuff.forEach(function(thing) {
    console.log(thing);
});
