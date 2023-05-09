/*
У вас есть переменная name, которая содержит входные пользовательские данные и передается в функцию hello().

Напишите JavaScript код в функции hello(), который создает строку приветствия и возвращает результат.

Sample Input:

Лия
Sample Output:

Привет, Лия!
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function hello(name) {
    // -- ваш код начинается тут

    return('Привет, ' + name + '!');

    // -- ваш код заканчивается тут
}

rl.on('line', (input) => {
    let name = input;
    console.log(hello(name));
    rl.close();
});