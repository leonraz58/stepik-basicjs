//У вас есть переменная minutes, которая принимает входные пользовательские данные.

//Напишите JavaScript код, который переводит минуты в секунды и записывает результат в переменную result.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let minutes = Number(input);

    // -- ваш код начинается тут

    result = minutes * 60;

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});