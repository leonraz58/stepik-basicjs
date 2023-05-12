/*
У вас есть переменная starships, которая содержит входные пользовательские данные.

В starships содержится объект с игроками:

[
  {
  "uss_enterprise": {
    "name": "USS Enterprise",
    "shields": false,
    "weapons": true,
    "engine_power": 90
  },
  "millennium_falcon": {
    "name": "Millennium Falcon",
    "shields": true,
    "weapons": true,
    "engine_power": 100
  },
  "prometheus": {
    "name": "Prometheus",
    "shields": false,
    "weapons": true,
    "engine_power": 70
  },
  "dragonfly": {
    "name": "Dragonfly",
    "shields": true,
    "weapons": true,
    "engine_power": 70
  },
  "ikar": {
    "name": "Ikar",
    "shields": false,
    "weapons": true,
    "engine_power": 70
  },
  "dedalus": {
    "name": "Dedalus",
    "shields": true,
    "weapons": true,
    "engine_power": 70
  }
 }
]
Напишите JavaScript код, который находит только те корабли у которых активированы щиты и записывает названия кораблей через запятую в переменную result.

Sample Input:

[{"uss_enterprise":{"name":"USS Enterprise","shields":false,"weapons":true,"engine_power":90},"millennium_falcon":{"name":"Millennium Falcon","shields":true,"weapons":true,"engine_power":100},"prometheus":{"name":"Prometheus","shields":false,"weapons":true,"engine_power":70},"dragonfly":{"name":"Dragonfly","shields":true,"weapons":true,"engine_power":70},"ikar":{"name":"Ikar","shields":false,"weapons":true,"engine_power":70},"dedalus":{"name":"Dedalus","shields":true,"weapons":true,"engine_power":70}}]
Sample Output:

Millennium Falcon, Dragonfly, Dedalus
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result='';
    let starships = JSON.parse(input);

    // -- ваш код начинается тут
    keys = Object.keys(starships[0]);
    for (i=0; i<keys.length; i++){
        if (starships[0][keys[i]].shields===true){
            result+=starships[0][keys[i]].name+', ';
        }
    }
    result = result.slice(0, result.length-2);
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});