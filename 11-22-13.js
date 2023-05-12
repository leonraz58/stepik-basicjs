/*
У вас есть переменная players, которая содержит входные пользовательские данные.

В players содержится объект с игроками:

[
  {
    "name": "Макс",
    "x": 100,
    "y": 50
  },
  {
    "name": "Дастин",
    "x": 200,
    "y": 100
  },
  {
    "name": "Стив",
    "x": 300,
    "y": 150
  },
  {
    "name": "Билли",
    "x": 300,
    "y": 170
  },
  {
    "name": "Майк",
    "x": 300,
    "y": 170
  },
  {
    "name": "Лукас",
    "x": 200,
    "y": 170
  }
]
Напишите JavaScript код, который находит индекс игрока по имени Майк и записывает результат в переменную result.

Sample Input:

[{"name":"Макс","x":100,"y":50},{"name":"Дастин","x":200,"y":100},{"name":"Стив","x":300,"y":150},{"name":"Билли","x":300,"y":170},{"name":"Майк","x":300,"y":170},{"name":"Лукас","x":200,"y":170}]
Sample Output:

4
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let players = JSON.parse(input);

    // -- ваш код начинается тут

    for (i = 0; i<players.length; i++){
        if (players[i]["name"] === "Майк"){
            result = i;
        }
    }

    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});