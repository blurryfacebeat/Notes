const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

// Узнаем количество классов у элемента
console.log(btns[0].classList.length);

// Узнаем какой класс лежит под указанным порядковым номером
console.log(btns[0].classList.item(0));

// Добавляем класс .classList.add('class', ...);

// Удаляем класс .classList.remove('class', ...);

// Если класс есть на элементе, то он исчезнет, а иначе будет добавлен
btns.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('yellow');
    });
});

// Есть ли класс в элементе
console.log(btns[0].classList.contains('blue'));

// Делегирование событий
/* 
    Если вдруг на нашей страницы кнопки начнут добавляться без
    нашего ведома, то на них не будут вешаться обработчики
    для этого можно повесить обработчик на контейнер и обрабатывать
    дочерние элементы, в нашем случае кнопки
*/

// Виртуальная клавиатура (просто ради интереса)
const area = document.querySelector('textarea');

wrapper.addEventListener('click', event => {
    // Первый event.target нужен для того, чтобы проверять
    // на его существование, так как, например, у
    // <br> его просто нет.
    // У event.target так же есть метод matches(), который проверяет
    // на совпадения, например .matches('button.red') буде искать
    // кнопку с классом red
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log(event.target.textContent);
        area.textContent += event.target.textContent;
    }
});
