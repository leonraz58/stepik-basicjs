/*
У вас есть переменная data, которая содержит входные пользовательские данные.

Напишите JavaScript код, который сортирует числовые элементы массива data в порядке убывания и записывает результат через запятую в переменную result.

Sample Input:

[1, 3, 2, 4, 5]
Sample Output:

5, 4, 3, 2, 1
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

    result = data.sort((a, b) => b - a).join(", ");

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});