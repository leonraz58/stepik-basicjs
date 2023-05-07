/*
У вас есть переменная data, которая содержит входные пользовательские данные.

Напишите JavaScript код, который считает сумму всех нечетных значений массива и записывает результат в переменную result.
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
    sum = 0;
    for (num of data){
        (num % 2 === 0) ? sum : sum+=num ;        
    }
    result = sum;

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});