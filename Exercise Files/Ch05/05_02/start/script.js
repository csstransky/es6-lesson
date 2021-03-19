function add(x = 5, y = 6) {
    console.log(x + y);
}

add(1, 2); // 3
add(1); // 7
add(undefined, 3); // 8, NOT 9
