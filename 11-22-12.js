/*
У вас есть переменная tags, которая содержит входные пользовательские данные.

Напишите JavaScript код, который считает количество тегов и записывает результат через запятую в переменную result.

Sample Input:

["javascript", "php", "javascript", "sql", "java", "python", "sql"]
Sample Output:

javascript: 2, php: 1, sql: 2, java: 1, python: 1
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result='';
    let tags = JSON.parse(input);

    // -- ваш код начинается тут
  
    let t1 = Array.from(new Set(tags));
    t2 = new Array(t1.length).fill(0);
    for (let i = 0; i < t1.length; i++){
        while (tags.findIndex(word => word === t1[i]) !== -1){
            t2[i]++;
            tags[tags.findIndex(word => word === t1[i])]='';
        }        
    }
    for (let i = 0; i < t1.length; i++){
        result+=t1[i]+': '+t2[i]+', ';
    }
    result = result.slice(0,result.length-2);
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});