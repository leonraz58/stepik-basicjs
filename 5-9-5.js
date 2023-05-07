/*У вас есть переменные arr1, arr2, arr3, которые содержат входные пользовательские данные.

Напишите JavaScript код, который объединяет три массива и записывает все элементы массива через запятую в переменную result.*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result = '';
    let [arr1, arr2, arr3] = input.split(" | ").map(String);

    arr1 = JSON.parse(arr1);
    arr2 = JSON.parse(arr2);
    arr3 = JSON.parse(arr3);

    // -- ваш код начинается тут

    let arrsum = [...arr1,...arr2,...arr3];
    
    for (let word of arrsum){
        result += word +', ';
    }
    result = result.slice(0,result.length-2);

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});