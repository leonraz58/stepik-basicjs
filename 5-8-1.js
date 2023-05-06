const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let [firstname, lastname] = input.split(" ").map(String);

    // -- ваш код начинается тут

    result = 'Привет, ' + firstname + ' ' + lastname + '!';

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});