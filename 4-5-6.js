/*
У вас есть переменные x, y и direction которые содержат входные пользовательские данные.

x, y содержат числа - стартовая позиция игрока. 

direction содержит направление движения, одного из: up, down, left, right.



Напишите JavaScript код, который высчитывает новую позицию игрока после перемещения в этом направлении на 1 и записывает результат в переменную result
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let [x, y, direction] = input.split(" ");

    x = Number(x);
    y = Number(y);

    // -- ваш код начинается тут
    switch (direction) {
        case 'up':
            y--;
            break;
        case 'down':
            y++;
            break;
        case 'left':
            x--;
            break;
        case 'right':
            x++;
            break;
    }
    result = 'x: ' + x + ', y: ' + String(y) + ', direction: ' + String(direction);

    // -- ваш код заканчиваетя тут

    console.log(result);
    rl.close();
});