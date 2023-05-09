/*
У вас есть переменные A, B, которые содержат входные пользовательские данные.

Напишите JavaScript код, который объединяет множества 
�
∪
�
A∪B, и записывает результат в переменную result.

Sample Input:

[10, 20, 30] | [1, 2, 3]
Sample Output:

10, 20, 30, 1, 2, 3
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let [A, B] = input.split(" | ");

    A = new Set(JSON.parse(A));
    B = new Set(JSON.parse(B));

    // -- ваш код начинается тут

    result = new Set([...A, ...B]);

    // -- ваш код заканчивается тут

    console.log([...result].join(", "));
    rl.close();
});