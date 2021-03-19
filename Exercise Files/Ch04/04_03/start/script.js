const { title, price } = {
    title: "PBJ",
    price: 5,
    description: "yummy in my tummy",
    ingredients: [
        "bread",
        "peanut butter",
        "jelly"
    ]
};
console.log(title);
console.log(price);

const vacation = {
    destination: "Croatia",
    travelers: 2,
    activity: "swimming",
    cost: "a lot"
};

function marketing({destination, activity}) {
    return `Come to ${destination} and do some ${activity}`;
}
console.log(marketing(vacation));