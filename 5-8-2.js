/*
У вас есть переменная str, которая содержит входные пользовательские данные.

Напишите JavaScript код, который находит первый символ в переменной str и записывает результат в переменную result.

Sample Input:

Лия
Sample Output:

Л
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

        result = str[0];

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});