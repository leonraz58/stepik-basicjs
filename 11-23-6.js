/*
У вас есть переменныe size, position, data, которые содержат входные пользовательские данные.

Напишите JavaScript код, который заполняет массив data до нужного размера size нулями (0) в зависимости от значения position, которое может принимать значения: left или right.

Сначала проверяем на корректность размера, потом проверяем на корректность позиции.
Если размер массива data  больше размера size, тогда в переменную result записываем сообщение: 
Неверный размер
Если размер массива data  равен значению переменной size, тогда в переменную result записываем: 
Массив data в виде строки через запятую.
Если значение переменной position не равно left или right, тогда в переменную result записываем сообщение:
Неверная позиция
Результат записать в виде строки через запятую в переменную result.

Sample Input 1:

5 | left | [1, 2, 3]
Sample Output 1:

0, 0, 1, 2, 3
Sample Input 2:

5 | right | [1, 2, 3, 4, 5]
Sample Output 2:

1, 2, 3, 4, 5
Sample Input 3:

2 | right | [1, 2, 3, 4, 5]
Sample Output 3:

Неверный размер
Sample Input 4:

7 | center | [1, 2, 3, 4, 5, 6, 7]
Sample Output 4:

Неверная позиция
Sample Input 5:

10 | right | [5, 4, 1, 6, 7]
Sample Output 5:

5, 4, 1, 6, 7, 0, 0, 0, 0, 0*/ 

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let [size, position, data] = input.split(" | ");

    size     = Number(size);
    position = String(position);
    data     = JSON.parse(data);

    // -- ваш код начинается тут
    let datalen = data.length;
    if (size < data.length){
        result = 'Неверный размер';
    } else {
        if (position === 'right'){
            
            for (let i = 0; i < size - datalen; i++) {data.push(0);}
            result = data.join(', ');
        } else {
            if (position === 'left') {
                for (let i = 0; i < size - datalen; i++) {data.unshift(0);
                result = data.join(', ');
                }
            } else {result = 'Неверная позиция';}
        }
    }
    

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});