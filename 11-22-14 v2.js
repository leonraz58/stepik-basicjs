const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result= [];
    let starships = JSON.parse(input);

    // -- ваш код начинается тут

 //   result = starships.filter(item => {
           
   // })
    
    for(let i in starships[0]){
        if(starships[0][i].shields){
            result.push(starships[0][i].name)
        }
    }
    
    result = result.join(', ');
    

    // -- ваш код заканчивается тут item.filter(shipItem => shipItem.shields)

    console.log(result);
    rl.close();
});