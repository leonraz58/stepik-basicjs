/*
У вас есть переменная grid которая содержит входные пользовательские данные.

Напишите JavaScript код, который подсчитывает количество пустых мест, на которых могли бы быть построены еще башни и записывает результат в переменную result.

1 - есть элемент башни
0 - пустота

Размер массива 6х3
Башни располагаются снизу вверх.

Например:

2 пустых места

[
  [0,1,0,1,0,0],
  [0,1,0,1,0,0],
  [1,1,0,1,1,0]
]
 



1 пустое место

[
  [0,1,0,1,0,0],
  [0,1,0,1,0,0],
  [1,1,0,1,1,1]
]
 



3 пустых места 

[
  [0,1,0,0,0,0],
  [0,1,0,0,0,1],
  [1,1,0,0,0,1]
]


Sample Input:

[[0,1,0,1,0,0],[0,1,0,1,0,0],[1,1,0,1,1,0]]
Sample Output:

2
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

    //result = grid[2];
    let towers = 0
    for (let i = 0; i<grid[2].length;i++){
        if (grid[2][i] === 0) towers++;
    }
    result = towers;
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});