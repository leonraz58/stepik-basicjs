/*
У вас есть переменная data которая содержит входные пользовательские данные.

Напишите JavaScript код, который проверяет все ли элементы в массиве null и записывает логический результат в переменную result.

Sample Input 1:

[null, null, null, null, null]
Sample Output 1:

true
Sample Input 2:

[null, null, null, true, null]
Sample Output 2:

false
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
    flag = true;
    for (let i = 0; i<data.length; i++){
        if (data[i] !== null) flag = false;
    }
    result = flag;
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});