const delay = (seconds) =>
    new Promise((resolves) =>
        setTimeout(resolves, seconds * 1000)
    );

const countToFive = async () => {
    console.log("zero seconds");
    await delay(1);
    console.log("one second");
    await delay(1);
    console.log("two seconds");
    await delay(1);
    console.log("three seconds");
    await delay(1);
    console.log("four seconds");
    await delay(1);
    console.log("five seconds");
}
countToFive();
