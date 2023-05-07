const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result = '';
    let data = JSON.parse(input);
    data.movies[data.movies.length] = {
      "id": 11,
      "title": "The Green Mile",
      "release_year": 1999,
      "genre": "Drama",
      "rating": 9
    }
    // -- ваш код начинается тут

    for (let i = 0; i < data.movies.length; i++){
        result += data.movies[i].title + ', ';
        
    }
    result = result.slice(0,result.length-2);
    console.log(result);
    // -- ваш код заканчивается тут

    
    rl.close();
});