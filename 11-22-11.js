/*
У вас есть переменная tags, которая содержит входные пользовательские данные.

Напишите JavaScript код, который сортирует строковые элементы массива tags в порядке возрастания, отсеивает дубликаты и записывает результат через запятую в переменную result.

Sample Input:

["javascript", "php", "javascript", "sql", "java", "python", "sql"]
Sample Output:

java, javascript, php, python, sql
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

    result = tags.sort().filter((elem, i) => elem != tags[i+1]).join(', ');

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});