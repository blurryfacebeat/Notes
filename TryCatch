const json = '{"id": 2}';

try {
    // Если бы данные не пришли, мы бы обработали ошибку
    // но программа работала бы дальше
    const user = JSON.parse(json);
    console.log(user);

    // Создаем свою ошибку, если нет нужной нам записи в объекте
    if (!user.name) {
        throw new Error('В этих данных нет имени!');
    }
} catch (error) {
    // console.error(error.name);
    // console.error(error.message);
    // console.error(error.stack);

    console.error(`Получена ошибка: ${error}`);
} finally {
    // finally выполнится всегда, это не обязательная часть
    console.log('Выполняется всегда.');
}

console.log('Софт работает дальше');
