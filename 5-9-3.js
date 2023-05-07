/*
У вас есть переменная data, которая содержит входные пользовательские данные.

Напишите JavaScript код, который удаляет первый элемент массива и записывает все оставшиеся элементы массива через запятую в переменную result.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result = '';
    let data = JSON.parse(input);

    // -- ваш код начинается тут

    data.shift();
    for (let word of data){
        result += word +', ';
    }
    result = result.slice(0,result.length-2);
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});