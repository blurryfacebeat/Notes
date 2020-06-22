const animals = ['wolf', 'cow', 'dog'];
const food = ['apple', 'bread', 'pear'];
// Выведет 2 массива
console.log(animals, food);
// Выведет каждый элемент из двух массивов
console.log(...animals, ...food);

// Еще пример. Здесь мы должны передать 3 аргумента в функцию,
// массив это один аргумент, spread-оператор разобьет его
// на отдельные составляющие
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

console.log(...num);

// Создаем копию объекта с помощью spread-оператора
const q = {
    one: 1,
    two: 2
};

console.log(q);

const obj = {...q};

console.log(obj);
