// Узлы, являющиеся детьми у body
console.log(document.body.childNodes);

// Получаем узлы первого ребенка внутри родителя и последнего
console.log(document.body.firstChild);
console.log(document.body.lastChild);

// Получаем первый элемент ребенка и последний
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

// Находим родительский узел, .parentNode можно использовать несколько
// раз, если мы хотим узнать узел родителя родителя.
console.log(document.querySelector('li').parentNode);

// Находим родительский элемент
console.log(document.querySelector('li').parentElement);

// Data-атрибуты
// Получаем элемент с data-атрибутом и получаем следующий от него узел
console.log(document.querySelector('[data-current="4"]').nextSibling);

// Получаем элемент с data-атрибутом и получаем предыдущий от него узел
console.log(document.querySelector('[data-current="4"]').previousSibling);

// Получаем элемент с data-атрибутом и получаем следующий от него элемент
console.log(document.querySelector('[data-current="4"]').nextElementSibling);

// Получаем элемент с data-атрибутом и получаем предыдущий от него элемент
console.log(document.querySelector('[data-current="4"]').previousElementSibling);

// Модернизируем childNodes, чтобы получать только элементы
// детей, без узлов.
console.log('-----------------------------');
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}
