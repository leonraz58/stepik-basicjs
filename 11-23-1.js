/*
У вас есть переменные n, data которые содержат входные пользовательские данные.

Напишите JavaScript код, который умножает каждый элемент массива на значение переменной n и записывает результат в виде строки через запятую в переменную result.

Sample Input:

2 | [1, 2, 3]
Sample Output:

2, 4, 6
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let [n, data] = input.split(" | ");

    n = Number(n);
    data = JSON.parse(data);

    // -- ваш код начинается тут

    for (let i = 0; i<data.length; i++){
        data[i] *= n;
    }
    result = data.join(', ');
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});

