/*
У вас есть переменная data, которая содержит входные пользовательские данные.

Напишите JavaScript код, который подсчитывает количество элементов в массиве data  (+ во всех вложенных массивах) и записывает результат в переменную result.

Sample Input:

[1, [2], [3, 4, [5, 6, [7, 8, [9, 10]]]]]
Sample Output:

10
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
        let sum = 0;
        for (let num of arr){
            if (Array.isArray(num)){
                sum+= farr(num);
            } else {
                sum+=1;
            }
        }
        return sum;
    }

    result = farr(data);

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});
