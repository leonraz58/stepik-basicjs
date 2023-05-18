/*
У вас есть переменная data которая содержит входные пользовательские данные.

Напишите JavaScript код, который проверяет все ли элементы в массиве true и записывает логический результат в переменную result.

Sample Input 1:

[true, true, true]
Sample Output 1:

true
Sample Input 2:

[true, false, true]
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
    let flag = true;
    for (let i = 0; i< data.length; i++){
        if (data[i] === false) {flag=false;}
    }

    result = flag;
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});