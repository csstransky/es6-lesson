let cats = ["Ieva", "Sasha"];
let dogs = ["Rover", "Brown"];
let animals1 = ["Smokey", "Pokey", "Sharky", cats, dogs]
console.log(animals1)
let animals2 = ["Smokey", "Pokey", "Sharky", ...cats, ...dogs]
console.log(animals2)