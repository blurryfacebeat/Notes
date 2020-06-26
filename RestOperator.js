// Rest оператор собирает все оставшееся, что в него попадет
// и формирует массив
const log = function(a, b, ...rest) {
    // Могу развернуть массив, который создал rest с помощью spread
    console.log(a, b, rest);
}

log('basic', 'rest', 'ESKETIT', 'Goose', 'Milk');
