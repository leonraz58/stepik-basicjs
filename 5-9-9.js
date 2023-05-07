/*
У вас есть переменная data, которая содержит входные пользовательские данные.

Напишите JavaScript код, который считает сумму значений массива, которые больше 10 и меньше 20 и записывает результат в переменную result.
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
        sum = ((20 > num) && (num > 10)) ? sum+=num : sum ;        
    }
    result = sum;

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});