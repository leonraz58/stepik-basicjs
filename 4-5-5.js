/*
У вас есть переменная n, которая содержит входные пользовательские данные.

n всегда содержит четное число.

Напишите JavaScript код, который возвращает сумму всех четных чисел до n (включительно) и записывает результат в переменную result. 

Например:

Eсли n = 4 тогда 2 + 4 = 6

Eсли n = 6 тогда 2 + 4 + 6 = 12

Eсли n = 8 тогда 2 + 4 + 6 + 8 = 20

и тд.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let n = Number(input);

    // -- ваш код начинается тут
    result = 0;
        
    while (n > 0) {
        result += n
        n -= 2;
    }

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});