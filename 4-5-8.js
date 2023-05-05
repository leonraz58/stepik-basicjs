/*
У вас есть переменные x1, x2, x3, которые содержат входные пользовательские данные.

Напишите JavaScript код, который находит максимальное и минимальное число из x1, x2, x3 и записывает результат в переменную result.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let [x1, x2, x3] = input.split(" ").map(Number);

    // -- ваш код начинается тут

    if ((x1 >= x2) && (x1 >= x3)) {
        max = x1;
    }
    if ((x2 >= x3) && (x2 >= x1)) {
        max = x2;
    }    
    if ((x3 >= x2) && (x3 >= x1)) {
        max = x3;
    }
    if ((x1 <= x2) && (x1 <= x3)) {
        min = x1;
    }
    if ((x2 <= x3) && (x2 <= x1)) {
        min = x2;
    }    
    if ((x3 <= x2) && (x3 <= x1)) {
        min = x3;
    }
    result = `минимальное: ${min}, максимальное: ${max}`;
    // -- ваш код заканчивается тут
    console.log(result);
    rl.close();
});