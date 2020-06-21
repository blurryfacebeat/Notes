// Добавляем запись в localStorage(Ключ - Значение).
localStorage.setItem('number', 1);

// Получаем запись из localStorage.
console.log(localStorage.getItem('number'));

// Удаление записи.
localStorage.removeItem('number');

// Полностью очищаем localStorage.
// localStorage.clear();

// Сохраняем объект в localStorage.
const person = {
    name: 'Alex',
    age: 25,
    tech: ['mobile', 'notebook']
};

const personToJSON = JSON.stringify(person);
localStorage.setItem('Alex', personToJSON);

console.log(JSON.parse(localStorage.getItem('Alex')));
