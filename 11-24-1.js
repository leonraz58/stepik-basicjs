/*
У вас есть переменная data, которая содержит входные пользовательские данные.

Напишите JavaScript код, который будет находить четные и нечетные числа и записывать результат в виде строки:
(четные) (нечетные) в переменную result.

Важно! Четные и нечетные числа должны быть отсортированы в порядке возрастания.

Sample Input 1:

[4, 3, 7, 1, 8, 6, 5, 2]
Sample Output 1:

(2, 4, 6, 8) (1, 3, 5, 7)
Sample Input 2:

[4, 3, 7, 1, 8, 6, 5, 2, 42, 3, 7, 41, 40, 6, 5, 200]
Sample Output 2:

(2, 4, 6, 6, 8, 40, 42, 200) (1, 3, 3, 5, 5, 7, 7, 41)
*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let data = input;

    data = JSON.parse(data);

    // -- ваш код начинается тут
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < data.length; i++){
        if (data[i] % 2 === 0) {
        arr2.push(+data[i]); 
        } else arr1.push(+data[i]);
    }
    arr1.sort(function(a, b) {
        return a - b;
    });
    arr2.sort(function(a, b) {
        return a - b;
    });
    result ='(' + arr2.join(', ') + ') ('+arr1.join(', ') + ')';
    // -- ваш код заканчивается тут
    console.log(result);
    rl.close();
});