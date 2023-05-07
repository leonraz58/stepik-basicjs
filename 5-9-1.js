/*
У вас есть переменная data, которая содержит входные пользовательские данные.

Напишите JavaScript код, который выбирает первый элемент массива и записывает результат в переменную result.

*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let data = JSON.parse(input);

    // -- ваш код начинается тут

    result = data[0];

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});