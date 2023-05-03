/*У вас есть переменная age, которая принимает входные пользовательские данные.

Напишите JavaScript код, который проверяет переменную age и записывает результат в переменную result.

Если age больше или равно 18 тогда записываем взрослый иначе записываем подросток.

Для решения данной задачи можете использовать тернарый оператор.*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let age = Number(input);

    // -- ваш код начинается тут

    result = age >= 18 ? 'взрослый' : 'ребенок';

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});