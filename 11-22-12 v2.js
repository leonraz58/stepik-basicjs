/*
У вас есть переменная tags, которая содержит входные пользовательские данные.

Напишите JavaScript код, который считает количество тегов и записывает результат через запятую в переменную result.

Sample Input:

["javascript", "php", "javascript", "sql", "java", "python", "sql"]
Sample Output:

javascript: 2, php: 1, sql: 2, java: 1, python: 1
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let tags = JSON.parse(input);

    // -- ваш код начинается тут

    result = [...new Set(tags)].map(value => `${value}: ${tags.filter(str => str === value).length}`).join(", ");

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});