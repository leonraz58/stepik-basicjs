/*
У вас есть переменная data, которая содержит входные пользовательские данные.

В data содержится объект с фильмами:

{ 
  "movies": [
    {
        "id": 1,
        "title": "The Shawshank Redemption",
        "release_year": 1994,
        "genre": "Drama",
        "rating": 9
    },
    {
        "id": 2,
        "title": "The Godfather",
        "release_year": 1972,
        "genre": "Crime",
        "rating": 9
    },
    {
        "id": 3,
        "title": "The Godfather: Part II",
        "release_year": 1974,
        "genre": "Crime",
        "rating": 9
    },
    {
        "id": 4,
        "title": "The Dark Knight",
        "release_year": 2008,
        "genre": "Action",
        "rating": 9
    },
    {
        "id": 5,
        "title": "12 Angry Men",
        "release_year": 1957,
        "genre": "Drama",
        "rating": 8
    },
    {
        "id": 6,
        "title": "Schindlers List",
        "release_year": 1993,
        "genre": "Biography",
        "rating": 8
    },
    {
        "id": 7,
        "title": "Pulp Fiction",
        "release_year": 1994,
        "genre": "Crime",
        "rating": 8
    },
    {
        "id": 8,
        "title": "The Lord of the Rings: The Return of the King",
        "release_year": 2003,
        "genre": "Adventure",
        "rating": 8
    },
    {
        "id": 9,
        "title": "Fight Club",
        "release_year": 1999,
        "genre": "Drama",
        "rating": 8,
    },
    {
        "id": 10,
        "title": "The Good, the Bad and the Ugly",
        "release_year": 1966,
        "genre": "Western",
        "rating": 8
    }
  ]
}
Напишите JavaScript код, который выбирает заголовки только тех фильмов, которые имеют рейтинг больше 8 и записывает их через запятую в переменную result.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result  = '';
    let data = JSON.parse(input);

    // -- ваш код начинается тут
    for (let i = 0; i < data.movies.length; i++){
        if (data.movies[i].rating>8){
            result += data.movies[i].title + ', ';
        }
        
    }
    result = result.slice(0,result.length-2);
    


    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});