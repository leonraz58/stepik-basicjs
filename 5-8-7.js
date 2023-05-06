/*
У вас есть переменная str, которая содержит входные пользовательские данные.

Напишите JavaScript код, который подсчитывает количество символов после >>> в переменной str и записывает результат в переменную result.
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

    let str2 = str.slice(3,str.length);
    result = str2.length;

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});