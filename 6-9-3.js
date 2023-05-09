/*У вас есть переменная data, которая содержит входные пользовательские данные и передается в функцию titles().

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
Напишите JavaScript код, который выбирает все заголовки фильмов и возвращает результат через запятую.

Sample Input:

{"movies":[{"id":1,"title":"The Shawshank Redemption","release_year":1994,"genre":"Drama","rating":9,"budget":25000000},{"id":2,"title":"The Godfather","release_year":1972,"genre":"Crime","rating":9,"budget":6500000},{"id":3,"title":"The Godfather: Part II","release_year":1974,"genre":"Crime","rating":9,"budget":13000000},{"id":4,"title":"The Dark Knight","release_year":2008,"genre":"Action","rating":9,"budget":185000000},{"id":5,"title":"12 Angry Men","release_year":1957,"genre":"Drama","rating":8,"budget":350000},{"id":6,"title":"Schindlers List","release_year":1993,"genre":"Biography","rating":8,"budget":22500000},{"id":7,"title":"Pulp Fiction","release_year":1994,"genre":"Crime","rating":8,"budget":31500000},{"id":8,"title":"The Lord of the Rings: The Return of the King","release_year":2003,"genre":"Adventure","rating":8,"budget":94000000},{"id":9,"title":"Fight Club","release_year":1999,"genre":"Drama","rating":8,"budget":63000000},{"id":10,"title":"The Good, the Bad and the Ugly","release_year":1966,"genre":"Western","rating":8}]}
Sample Output:

The Shawshank Redemption, The Godfather, The Godfather: Part II, The Dark Knight, 12 Angry Men, Schindlers List, Pulp Fiction, The Lord of the Rings: The Return of the King, Fight Club, The Good, the Bad and the Ugly
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// -- ваш код начинается тут

function titles(data) {
    result = '';
    for (let i = 0; i < data.movies.length; i++){
        result += data.movies[i].title + ', ';
    }
    result = result.slice(0,result.length-2);
    return result;
}  

// -- ваш код заканчивается тут

rl.on('line', (input) => {
    let data = JSON.parse(input);
    console.log(titles(data));
    rl.close();
});