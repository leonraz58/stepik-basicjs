/*
У вас есть переменные A, e, которые содержат входные пользовательские данные.

Напишите JavaScript код, который удаляет элемент e из множества A и записывает результат в переменную result.

Sample Input:

[1, 2, 3, 4, 5] | 3
Sample Output:

1, 2, 4, 5
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

    A.delete(e);
    result = new Set(A);

    // -- ваш код заканчивается тут

    console.log([...result].join(", "));
    rl.close();
});