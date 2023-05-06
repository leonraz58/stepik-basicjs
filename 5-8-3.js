/*
У вас есть переменная str, которая содержит входные пользовательские данные.

Напишите JavaScript код, который находит последний символ в переменной str и записывает результат в переменную result.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let str = input;

    // -- ваш код начинается тут

        result = str[str.length-1];

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});