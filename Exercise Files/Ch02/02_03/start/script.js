function print(firstName) {
    console.log("Hello", firstName);
    console.log(`Hello ${firstName}`);
}

function createEmail(firstName, price) {
    let shipping = 5.95;
    console.log(`Hi ${firstName}! Thanks!
        Total: $${price}
        Shipping: $${shipping}
        Grand Total: $${price + shipping}`)
}
print("tom");
createEmail("Guy", 15);