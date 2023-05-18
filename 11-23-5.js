/*
У вас есть переменныe arr1, arr2, которые содержат входные пользовательские данные.

Напишите JavaScript код, который сравнивает два массива arr1, arr2 и записывает разницу между ними в виде строки через запятую в переменную result.

Если два массива одинаковые, тогда переменная result должна содержать сообщение: Массивы одинаковые

Sample Input:

[1, 2, 3, 4, 5] | [1, 2, 5]
Sample Output:

3, 4
*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let [arr1, arr2] = input.split(" | ");

    arr1 = JSON.parse(arr1);
    arr2 = JSON.parse(arr2);

    // -- ваш код начинается тут
        let arr12 = arr1.filter((x) => !arr2.includes(x));
        let arr21 = arr2.filter((x) => !arr1.includes(x));
        let arr = [...arr12, ...arr21]
        result = arr.join(', ');
    //    console.log(arr12, arr21, arr);
        
        if (result === '') result = 'Массивы одинаковые'; 
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});