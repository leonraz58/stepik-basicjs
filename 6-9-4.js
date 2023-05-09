/*
У вас есть переменная n, которая содержит входные пользовательские данные и передается в функцию factorial().

Напишите JavaScript код в функции factorial(), который вычисляет факториал числа n и возвращает результат.

 

Факториал — функция, определённая на множестве неотрицательных целых чисел. Название происходит от лат. factorialis — действующий, производящий, умножающий; обозначается n!, произносится эн факториал. Факториал натурального числа n определяется как произведение всех натуральных чисел от 1 до n включительно.

Sample Input:

4
Sample Output:

24
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// -- ваш код начинается тут

function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
    return n * factorial(n - 1);
    }
}

// -- ваш код заканчивается тут

rl.on('line', (input) => {
    let n = Number(input);
    console.log(factorial(n));
    rl.close();
});