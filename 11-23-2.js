/*
У вас есть переменные n, data которые содержат входные пользовательские данные.

Напишите JavaScript код, который исключает из массива data все значения, которые больше значения переменной n и записывает результат в виде строки через запятую в переменную result.

Sample Input:

3 | [1, 2, 3, 4, 5, 1, 2, 3, 4]
Sample Output:

1, 2, 3, 1, 2, 3
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
    let data2 = [];
    for (let i = 0; i<data.length; i++){
        if (data[i]<=n){
            data2.push(data[i]);
        }
    }
    result = data2.join(', ');
    
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});