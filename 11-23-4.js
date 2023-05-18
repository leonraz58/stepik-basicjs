/*
У вас есть переменные chunkSize, data которые содержат входные пользовательские данные.

Напишите JavaScript код, который:

1. Разбивает массив data на новые массивы размером не более чем значение в переменной  chunkSize
2. Записывает результат в виде строки в переменную result.

Формат строки результата: (e, eN) (e, eN) (eN) и тд... где e - элемент массива

Sample Input 1:

3 | [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Sample Output 1:

(1, 2, 3) (4, 5, 6) (7, 8, 9) (10)
Sample Input 2:

5 | [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Sample Output 2:

(1, 2, 3, 4, 5) (6, 7, 8, 9, 10)
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let [chunkSize, data] = input.split(" | ");

    chunkSize = Number(chunkSize);
    data = JSON.parse(data);

    // -- ваш код начинается тут
    let arr = [];
    let j = 0;
    let k = 0;
    arr[j] = [];
    for (let i = 0; i<data.length; i++){
        arr[j][k] = data[i];
        if (((k % (chunkSize-1) === 0) && (k > 0) && (i !== data.length-1)) || (chunkSize === 1)) {
           j++;
           arr[j] = []; 
           k = 0;
        } else k++;
    }
    result = '';
    if (chunkSize === 1) {
        for (let i = 0; i<arr.length;i++){
            result += '(' + arr[i] + ') ';  
        } 
        result = result.slice(0, result.length-4);
    } else {
        for (let i = 0; i<arr.length;i++){
            result += '(' + arr[i].join(', ') + ') ';
        }
        result = result.slice(0, result.length-1);
    }    
    
    // -- ваш код заканчивается тут
    console.log(result);
    rl.close();
});