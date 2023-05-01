const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    // -- ваш код начинается тут

    let result = 0;
    let [x, y] = input.split(" ").map(Number);

    result = x + y;

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});