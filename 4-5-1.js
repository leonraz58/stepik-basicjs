/*
У вас есть переменная stars, которая содержит входные пользовательские данные.

Напишите JavaScript код, который проверяет значение переменной stars и записывает результат в переменную result.

Значение переменной stars может быть от 1 до 5. 

Пример:

Если stars = 1 тогда result = "★"
Если stars = 2 тогда result = "★★"
Если stars = 3 тогда result = "★★★"
Если stars = 4 тогда result = "★★★★"
Если stars = 5 тогда result = "★★★★★"

*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let stars = Number(input);

    // -- ваш код начинается тут
    let str = '';
    for (let i = 1; i <= stars; i++) {
      str = str + '★';
    }
    result = str;
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});