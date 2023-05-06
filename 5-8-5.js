/*
У вас есть переменная str, которая содержит входные пользовательские данные.

Напишите JavaScript код, который подсчитывает количество гласных и согласных букв в переменной str и записывает результат в переменную result.

Согласные буквы: б,в,г,д,ж,з,й,к,л,м,н,п,р,с,т,ф,х,ц,ч,ш,щ
Гласные буквы: а,у,о,ы,э,я,ю,ё,и,е
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    let result;
    let str = input;
    let vowelsCount = 0;
    let consonantsCount = 0;

    str = str.toLowerCase();

    // -- ваш код начинается тут
    const vowels = 'а,у,о,ы,э,я,ю,ё,и,е';
    for(const i of str){
        if(vowels.indexOf(i)!=-1){
            vowelsCount++;
        } else {
            consonantsCount++;
        }
    }

    result = `согласных: ${consonantsCount}, гласных: ${vowelsCount}`
    // -- ваш код заканчивается тут

    console.log(result);
    rl.close();
});