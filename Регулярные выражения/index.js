// Классический синтаксис для создания регулярных выражений
// new RegExp('pattern', 'flags');

// Короткий синтаксис
// /pattern/flags

/* Флаги
    i - если ищем что-то независимо от регистра
    g - ищем сразу несколько вхождений, не работает с search()
    m - многострочный режим
    * Флаги можно комбинировать *
    /./g - означает, что мы берем все элементы, которые попадут в строку
    Если мы хотим взять именно . как текст, не спецсимвол, то нужно использовать символ экранирование /\./

    Если мы хотим искать что-то конкретное, например цифры и т.д. то нужно использовать классы
    \d - ищет цифры
    \w - ищет буквы
    \s - ищет пробелы
    
    \D - ищет не цифры
    \W - ищет не буквы
    \S - ищет не пробелы
*/

const ans = prompt('Введите ваше имя.', '');

// возвращает позицию, где встречает n и N, если n или N нет, вернет -1
const reg = /n/i;
const reg2 = /n/g;

console.log(ans.search(reg));

// Получим массив с кусочком строки, позиция, строка в которой проводился поиск и groups
// Если стоит флаг g, получим массив со всеми совпадшими элементами
console.log(ans.match(reg2));

// Берем кусок строки и заменяем на другое выражение, первый аргумент - часть, которую заменяем, второй - то, на что заменяем
const pass = '123456';
console.log(pass.replace(/./g, '*'));

console.log('12-34-56'.replace(/-/g, ''));

// Метод test у регулярных выражений. Есть ли в строке, которую передаем в аргумент что-то похожее на патерн, который передается в регулярном выражении
// Возвращает либо true, либо false
const reg3 = /n/ig;
console.log(reg3.test(ans));
