const delay = (seconds) =>
    new Promise((resolve, reject) => {
            if (typeof seconds !== "number") {
                reject(new Error("Seconds must be a number!"));
            }
            setTimeout(resolve, seconds * 1000);
    });


console.log("Zero seconds");
// "then()" is used when the promise is made, and what's going to execute when it's go time
delay(1).then(() => console.log("One second"));
delay(5).then(() => console.log("5 seconds"));
// Actually finds error right away and prints out "Seconds must be a number!" at the top
delay("numberlol").then(() => console.log("won't work lol"))