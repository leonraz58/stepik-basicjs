/*
У вас есть переменные A, B, которые содержат входные пользовательские данные.

Напишите JavaScript код, который находит симметрическую разность множеств 

A△B, и записывает результат в переменную result.


Sample Input:

[1, 2, 3, 4, 5] | [8, 7, 3, 2, 1]
Sample Output:

4, 5, 8, 7

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

    result = new Set([...A].filter(x => !B.has(x)).concat([...B].filter(x => !A.has(x))));

    // -- ваш код заканчивается тут

    console.log([...result].join(", "));
    rl.close();
});