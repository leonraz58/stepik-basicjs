/*
У вас есть переменная grid которая содержит входные пользовательские данные.

Напишите JavaScript код, который подсчитывает количество блоков воды и блоков земли в массиве grid и записывает результат в переменную result.

0 - блок воды на карте
1 - блок земли на карте

Размер массива 4х4 

Например:

блоков воды: 11, блоков земли: 5

[
  [1,0,0,0],
  [1,0,1,0],
  [1,0,0,0],
  [1,0,0,0]
]


Sample Input:

[[1,0,0,0],[1,0,1,0],[1,0,0,0],[1,0,0,0]]
Sample Output:

блоков воды: 11, блоков земли: 5
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let grid = JSON.parse(input);
    let w = 0,e = 0
    // -- ваш код начинается тут
    for (let num of grid){
        for (let num2 of num){
            if (num2 === 1) e++;
            if (num2 === 0) w++;
        }
    }
    result = 'блоков воды: '+w+', блоков земли: '+e;
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});