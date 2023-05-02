const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let [x, y] = input.split(" ").map(Number);

    // -- ваш код начинается тут

    result = x % y;

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});