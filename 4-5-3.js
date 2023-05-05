/*
У вас есть переменная str, которая содержит входные пользовательские данные.

Напишите JavaScript код, который в зависимости от длины строки str записывает количество + в переменную result.

Подсказка!

Чтобы узнать длину строки, после строки/строковой переменной необходимо написать .length

Пример: str.length
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result = "";
    let str = String(input);

    // -- ваш код начинается тут
    len = str.length
    for (let i = 0; i < len; i++) {
        result += '+';
    }
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});