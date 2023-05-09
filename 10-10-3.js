/*
У вас есть переменные A, e, которые содержат входные пользовательские данные.

Напишите JavaScript код, который проверяет есть ли элемент e в множестве A и записывает логический результат в переменную result.

Sample Input 1:

[1, 2, 3] | 3
Sample Output 1:

true
Sample Input 2:

[1, 2, 3] | 42
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
    let [A, e] = input.split(" | ");

    A = new Set(JSON.parse(A));
    e = Number(e);

    // -- ваш код начинается тут

    result = A.has(e);

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});