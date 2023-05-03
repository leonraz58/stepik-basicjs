/*У вас есть переменные item, data, которые содержат входные пользовательские данные.

 item содержит название свойства для поиска.

 data содержит объект.

Напишите JavaScript код, который проверяет, существует ли свойство item в объекте data и записывает логический результат true или false в переменную result.*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let [item, data] = input.split(" | ").map(String);

    data = JSON.parse(data);

    // -- ваш код начинается тут

    result = item in data;

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});