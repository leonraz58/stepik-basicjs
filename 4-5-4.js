/*
У вас есть переменная n, которая содержит входные пользовательские данные.

n всегда содержит нечетное число.

Напишите JavaScript код, который возвращает сумму всех нечетных чисел до n (включительно) и записывает результат в переменную result. 

Например:

Eсли n = 3 тогда 1 + 3 = 4

Eсли n = 5 тогда 1 + 3 + 5 = 9

Eсли n = 7 тогда 1 + 3 + 5 + 7 = 16

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
        while (n > 1) {
            result += n;
            n -= 2;
        }
    result += 1;
            

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});