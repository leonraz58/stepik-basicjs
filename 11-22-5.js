/*
У вас есть переменная data, которая содержит входные пользовательские данные.

Напишите JavaScript код, который обращает порядок следования элементов массива data и записывает результат через запятую в переменную result.

Sample Input:

["Макс", "Дастин", "Майк", "Стив", "Билли"]
Sample Output:

Билли, Стив, Майк, Дастин, Макс
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

    result = data.reverse().join(", ");

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});