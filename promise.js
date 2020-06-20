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
