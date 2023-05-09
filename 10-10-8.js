/*
У вас есть переменная A, которая содержит входные пользовательские данные.

Напишите JavaScript код, который удаляет все четные числа из множества A и записывает результат в переменную result.

Sample Input:

[1, 2, 3, 4, 5, 6, 7]
Sample Output:

1, 3, 5, 7
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    A = new Set(JSON.parse(input));

    // -- ваш код начинается тут

    for (let num of A){
        if (num % 2 === 0){
            A.delete(num);
        }
    }
    result = new Set(A);

    // -- ваш код заканчивается тут

    console.log([...result].join(", "));
    rl.close();
});