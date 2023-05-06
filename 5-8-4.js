/*
У вас есть переменная str, которая содержит входные пользовательские данные.

Напишите JavaScript код, который:

1. Проверяет длину строки в переменной str 

2. Если длина строки больше 20 символов, тогда необходимо строку обрезать и дописать в конце ...

3. Общая длина строки вместе с ... не должна превышать 20 символов.

4. Результат записывает в переменную result.
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

    len = str.length;
    if (len > 20) {
        result = str.slice(0,17) + '...'
    } else {
        result = str;
    }

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});