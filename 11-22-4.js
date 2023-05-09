/*
У вас есть переменные data, num которые содержат входные пользовательские данные.

Напишите JavaScript код, который определяет все ли числа в массиве data меньше num и записывает логический результат в переменную result.

Sample Input 1:

10 | [2, 3]
Sample Output 1:

true
Sample Input 2:

10 | [2, 3, 15]
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
    let [num, data] = input.split(" | ");

    num  = Number(num);
    data = JSON.parse(data);

    // -- ваш код начинается тут

    result = data.every(numarr => numarr < num);

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});