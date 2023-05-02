//У вас есть переменная num, которая содержит входные пользовательские данные.

//Напишите JavaScript код, который определяет является ли число четным или нечетным и записывает результат в переменную result.

//Если число четное result = "четное" иначе result = "нечетное"

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let num = Number(input);

    // -- ваш код начинается тут

    result = num % 2 == 0 ? 'четное' : 'нечетное'

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});