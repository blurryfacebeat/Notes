'use strict';

// Записываем значение в localstorage
localStorage.setItem('number', 2);
localStorage.setItem('fruit', 'apple');

// Достаем значение из localstorage
console.log(localStorage.getItem('number'));
console.log(localStorage.getItem('fruit'));

// Удаляем значение из localStorage
localStorage.removeItem('fruit');

// Полностью очищаем localStorage
// localStorage.clear();

// Работаем с формой
const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'yellow';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'yellow';
    }
});

// Помещение объекта в localStorage
const person = {
    name: 'Sanya',
    age: 30
};

const serializedPerson = JSON.stringify(person);
localStorage.setItem('Sanya', serializedPerson);
console.log(JSON.parse(localStorage.getItem('Sanya')));
