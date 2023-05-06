/*
У вас есть переменная str, которая содержит входные пользовательские данные.

Напишите JavaScript код, который выводит текст после >>> из переменной str и записывает результат в переменную result.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let str = input;

    // -- ваш код начинается тут
    let i = 0;
    while (i < str.length){
        if ((str[i] === '>') && (str[i+1] === '>') && (str[i+2] === '>')){
            result = str.slice(i+3,str.length);
            break;
        }
        i++;
    }

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});