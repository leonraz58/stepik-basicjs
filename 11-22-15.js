/*
У вас есть переменная data, которая содержит входные пользовательские данные.

Напишите JavaScript код, который подсчитывает количество вложенных массивов в массиве data и записывает результат в переменную result.

Sample Input:

[1, [2, 3], 3, [4, [5]]]
Sample Output:

3
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
    function farr(arr) {
        let sum = 1;
        for (let num of arr){
            if (Array.isArray(num)){
                sum+= farr(num);
            }
        }
        return sum;
    }

    result = farr(data)-1;
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});