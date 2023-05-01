const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let number = Number(input);

    // -- ваш код начинается тут
    result = String(number);


    // -- ваш код заканчивается тут

    console.log(result + ' is ' + typeof result);
    rl.close();
});