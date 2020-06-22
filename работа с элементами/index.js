// Получаем элементы со страницы
const elems = document.querySelectorAll('.el');

// Ищем элементы в конкретном элементе и изменяем их
const ul = document.querySelector('ul');
const esketit = ul.querySelectorAll('.esketit');
esketit.forEach(element => {
    element.style.fontStyle = 'italic';
});

// Изменяем первый элемент
elems[0].style.width = '200px';
elems[0].style.height = '100px';
elems[0].style.backgroundColor = 'red';

// Изменяем второй элемент
elems[1].style.width = '250px';
elems[1].style.height = '150px';
elems[1].style.backgroundColor = 'yellow';

// Изменяем каждый элемент и вставляем внутрь него текст
elems.forEach(item => {
    item.textContent = 'aaa';
});

// Создаем новый элемент
const div = document.createElement('div');
const div2 = document.createElement('div');

// Добавляем ему сразу несколько параметров стилей
div.style.cssText = `background-color: blue; width: 100px; height: 100px`;
div2.style.cssText = `background-color: green; width: 100px; height: 100px`;

// Отрисовываем элемент в начало body
document.body.prepend(div);

// Добавим элемент в конец контейнера напрямую
document.querySelector('.temp').append(div2);

// Добавляем классы
div.classList.add('new');

// Проверяем имеет ли элемент определенный класс
div.classList.contains('new');

// Удаляем классы
div.classList.remove('new');

// Вставить перед элементом 
// el.before(newEl);

// Вставить после элемента
// el.after(newEl);

// Удаление элемента
document.querySelector('.aaa').remove();

// Заменить элемент каким-либо другим
// el.replaceWith(newEl);

// InnetHTML позволяет вставить кусок html-кода в элемент
document.querySelector('.temp2').innerHTML = '<h1>Пример</h1>';

// Вставляем кусок html-кода в конец
const html = `
    <h2>Слава,</h2>
    <h3>Что ты сделал?</h3>
    <p>Эщкере, получается</p>
`;
document.body.insertAdjacentHTML('afterend', html);
