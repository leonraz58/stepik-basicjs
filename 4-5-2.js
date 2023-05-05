/*
У вас есть переменная num, которая содержит входные пользовательские данные.

Напишите JavaScript код, который проверяет является ли значение num негативным, позитивным или равно 0 и записывает результат в переменную result.

Если num позитивное число тогда result = "Число позитивное"

Если num негативное число тогда result = "Число негативное"

Если num равно 0 число тогда result = "Число равно 0"

*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let num = Number(input);

    // -- ваш код начинается тут
    if (num > 0) {
        result = 'Число позитивное';
    } else { 
        if (num < 0) {
            result = 'Число негативное';
        } else {
            result = 'Число равно 0';
          }  
    }

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});