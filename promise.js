// Пример использования promise:
const drink = 1;

function shoot(arrow) {
  console.log('Вы сделали выстрел...');
  // resolve - обещание выполнилось, reject - обещание не выполнилось
  let promise = new Promise(function(res, rej) {
    setTimeout(function() {
      Math.random() > .5 ? res({}) : rej('Вы промахнулись!');
    }, 3000);
  });

  return promise;
}

function win() {
  console.log('Вы победили!');
  (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
  console.log('Вам купили пиво!');
}

function giveMoney() {
  console.log('Вам заплатили!');
}

function lose() {
  console.log('Вы проиграли!');
}

shoot({})
  // Успешно - resolve
  .then(mark => console.log('Вы попали в цель!'))
  .then(win)
  // Безуспешно - reject
  .catch(lose)

// Second Variant
// console.log('Запрос данных...');

// const req = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Подготовка данных...');
        
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
    
//         resolve(product);
//     }, 2000);
// });

// // then выполняется в случае положительного результата, функция resolve
// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.error('Что-то пошло не так...');
// }).finally(() => {
//     console.log('Работа завершилась!');
// });

const test = time => {
    // Если reject не нужен, можно его не указывать
    return new Promise(resolve => {
        setTimeout(() => resolve(), time)
    });
};

// Передаем функцию, которая является resolve
// test(1000).then(() => {
//     console.log('Успешно!');
// });
// test(2000).then(() => {
//     console.log('Успешно2!');
// });

// Проверяет, чтобы выполнились все закросы и только тогда выдаст результат
Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All');
});

// Выполняет все действия, когда самый первый промис отработал правильно
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
});
