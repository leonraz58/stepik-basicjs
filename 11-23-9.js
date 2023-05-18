/*
У вас есть переменная data, которая содержит входные пользовательские данные.

Напишите JavaScript код, который находит минимальное число в двумерном массиве произвольного размера и записывает результат в переменную result.

Sample Input:

[[2, 3, 1],[4, 42, 6],[7, 8, 9]]
Sample Output:
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
    min = data[0][0];
    for (let num of data){
        for (let num2 of num){
            if (num2 < min) min = num2;        
        }
    }
    result = min;
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});