/*
У вас есть переменная grid которая содержит входные пользовательские данные.

Напишите JavaScript код, который подсчитывает количество блоков воды, блоков земли и блоков кораблей в массиве grid и записывает результат в переменную result.

0 - блок воды на карте.
1 - блок земли на карте.
2 - блок корабля на карте.

Размер массива 4х4 

Например:

блоков воды: 7, блоков земли: 5, блоков кораблей: 4

[
  [1,0,0,2],
  [1,2,1,0],
  [1,0,0,0],
  [1,2,0,2]
]


Sample Input:

[[1,0,0,2],[1,2,1,0],[1,0,2,0],[1,2,0,2]]
Sample Output:

блоков воды: 6, блоков земли: 5, блоков кораблей: 5

*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let grid = JSON.parse(input);

    // -- ваш код начинается тут
    let w = 0,e = 0,s = 0;
    for (let num of grid){
        for (let num2 of num){
            if (num2 === 1) e++;
            if (num2 === 0) w++;
            if (num2 === 2) s++;
        }
    }
    result = 'блоков воды: '+w+', блоков земли: '+e+', блоков кораблей: '+s;


    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});