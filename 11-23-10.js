/*
У вас есть переменные k, data которые содержат входные пользовательские данные.

Напишите JavaScript код, который находит число k в двумерном в массиве data и записывает логический результат в переменную result.

Пример массива:

[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
Важно! Массив data может быть любого размера.

Sample Input 1:

5 | [[1,2,3],[4,5,6],[7,8,9]]
Sample Output 1:

true
Sample Input 2:

0 | [[1,2,3],[4,5,6],[7,8,9]]
Sample Output 2:

false
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// -- ваш код начинается тут

function findNumber(data, k) {
    for (let num of data){
        for (let num2 of num){
            if (num2 === k) return true;
        }
    }
    return false;
}

// -- ваш код заканчивается тут

rl.on('line', (input) => {
    let result = "";
    let [k, data] = input.split(" | ");
    k = Number(k);
    data = JSON.parse(data);
    result = findNumber(data, k);
    console.log(result);
    rl.close();
});