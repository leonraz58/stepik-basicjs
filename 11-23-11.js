/*
У вас есть переменные k, data которые содержат входные пользовательские данные.

Напишите JavaScript код, который находит все возможные варианты из двух чисел в массиве data, которые при сложении были бы равны значению переменной k.

Полученный результат в виде строки записать в переменную result в таком формате: (x+y)(x+y)(x+y) и тд.

Если таких чисел не было найдено, тогда записать в переменную result такое значение: ()

Sample Input 1:

7 | [2, 3, 2, 4, 5]
Sample Output 1:

(2+5)(3+4)(2+5)
Sample Input 2:

10 | [5, 5, 5]
Sample Output 2:

(5+5)(5+5)(5+5)
Sample Input 3:

7 | [2, 3, 2]
Sample Output 3:

()
*/ 

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result = "";
    let [k, data] = input.split(" | ");

    k = Number(k);
    data = JSON.parse(data);

    // -- ваш код начинается тут
    result = '';
    for (let i = 0; i<data.length; i++){
        for (let j = i; j<data.length; j++){
            if ((i !== j) && (data[i]+data[j] === k)){
                result += '(' + data[i] + '+' + data[j] + ')';
            }
        }
    }
    if (result === '') result = '()';    

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});