/*У вас есть переменная data, которая содержит входные пользовательские данные и передается в функцию createSecretString().

Напишите JavaScript код в функции createSecretString(), который выбирает первую букву из каждого слова в массиве и возвращает результат в виде строки.

Sample Input:

["Лия", "Макс", "Майк", "Дастин"]
Sample Output:

ЛММД

*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// -- ваш код начинается тут

function createSecretString(data) {
    result = '';
    for (let word of data){
        result += word[0];
    }
    return result;
}  

// -- ваш код заканчивается тут

rl.on('line', (input) => {
    let data = JSON.parse(input);
    console.log(createSecretString(data));
    rl.close();
});