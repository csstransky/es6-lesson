function* director() {
    console.log("hello");
    yield "Three";
    yield "Two";
    yield "One";
    console.log("It's about to happen!");
    yield "Action";
}

let countdown = director();
console.log(countdown.next());
console.log(countdown.next());
console.log(countdown.next().done == false);
console.log(countdown.next());
console.log(countdown.next().done == true);