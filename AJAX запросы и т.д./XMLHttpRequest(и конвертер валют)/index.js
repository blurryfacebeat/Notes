// Запросы с помощью XMLHttpRequest(старый метод)
const inputRub = document.querySelectorAll('input')[0];
const inputUsd = document.querySelectorAll('input')[1];

inputRub.addEventListener('input', () => {
    const req = new XMLHttpRequest();

    // Собирает настройки
    // req.open(method, url, async, login, password);
    req.open('GET', './temp.json');
    req.setRequestHeader('Content-type', 'application/json; charset="utf-8"');
    // Отправляем запрос
    req.send();

    // Событие, которое отслеживает готовность запроса в данный момент, можно так же использовать readystatechange === 4
    req.addEventListener('load', () => {
        // Если текущее состояние запроса 4 и статус "успешно", то выполняем действия
        if (req.status === 200) {
            const data = JSON.parse(req.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(4);
        } else {
            // Если сервер сломался или что-то подобное
            inputUsd.value = 'Что-то пошло не так';
        }
    });

    // status - показывает стату запроса (404, 0, 200 и т.д.);
    // statusText - текстовое описание ответа от сервера(Not found и т.д.);
    // response - ответ от сервера;
    // readyState - текущее состояние запроса;
});
