//У вас есть переменная hours, которая содержит входные пользовательские данные.

//Напишите JavaScript код, который переводит часы в секунды и записывает результат в переменную result.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let hours = Number(input);

    // -- ваш код начинается тут

    result = hours * 60 * 60;

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});