const daytime = {
    breakfast: "oatmeal",
    lunch: "pizza"
};

const nighttime = "mac and cheese";

const backpackingMeals1 = {
    daytime,
    nighttime
};
console.log(backpackingMeals1)

const backpackingMeals2 = {
    ...daytime,
    nighttime
};
console.log(backpackingMeals2)