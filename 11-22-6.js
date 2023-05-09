/*
У вас есть переменная data, которая содержит входные пользовательские данные.

Напишите JavaScript код, который сортирует строковые элементы массива data в порядке возрастания и записывает результат через запятую в переменную result.

Sample Input:

["Макс", "Дастин", "Майк", "Стив", "Билли"]
Sample Output:

Билли, Дастин, Майк, Макс, Стив
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

    result = data.sort().join(", ");

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});