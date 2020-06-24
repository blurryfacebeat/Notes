const box = document.querySelector('.box');
const btn = document.querySelector('button');

// Мы получили размер в пикселях без учета скролла,
// если мы пропишем box-sizing: border-box, то
// padding не добавится в переменную
const width = box.clientWidth;
const height = box.clientHeight;
console.log(width, height);

// Получаем полный размер элемента, учитывая скролл
const width1 = box.offsetWidth;
const height1 = box.offsetHeight;
console.log(width1, height1);

// Получаем размер элемента вместе с тем, что идет после прокрутки скролла
const width2 = box.scrollWidth;
const height2 = box.scrollHeight;
console.log(width2, height2);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    // Показывает, сколько сверху есть пикселей, которые
    // отлистал юзер
    console.log(box.scrollTop);
});

// Получаем все координаты элемента
console.log(box.getBoundingClientRect());

// Узнаем, какие стили уже применились к объекту
// Если бы мы хотели узнать стили псевдоэлемента, то нужно было бы
// написать его вторым аргументом
const style = window.getComputedStyle(box);
console.log(style);
console.log(style.display);

// Получить количество пикселей, которые отлистал юзер на всей странице
console.log(document.documentElement.scrollTop);

// window.scrollBy(from, to) позволяет проскроллить документ
// от текущего видимого к конечному значению
// window.scrollTo(from, to) позволяет проскроллить документ
// от начального к конечному
