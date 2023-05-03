/*У вас есть переменные role, которая содержит входные пользовательские данные.

Напишите JavaScript код, который в зависимости от значения переменной role записывает соответствующий результат в переменную result.

1 — admin
2 — moderator
3 — user

Для решения данной задачи можете использовать тернарый оператор.*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let role = Number(input);

    // -- ваш код начинается тут

    result = role == 1 ? 'admin' : role == 2 ? 'moderator' : 'user';

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});