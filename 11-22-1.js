/*
У вас есть переменная data, которая содержит входные пользовательские данные.

Напишите JavaScript код, который определяет все ли числа в массиве data четные и записывает логический результат в переменную result.

Sample Input 1:

[2, 4, 6, 8, 10]
Sample Output 1:

true
Sample Input 2:

[1, 4, 6, 8, 10]
Sample Output 2:

false
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

        result = data.every(num => num % 2 === 0);

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});