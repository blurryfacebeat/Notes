let path = require('path');

module.exports = {
    // Режим работы, есть так же 'production' и none, если ну нужна оптимизация кода
    mode: 'development',
    // Путь к главному файлу
    entry: './index.js',
    // Конечный файл и путь его сохранения, __dirname - корневая папка
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist/js'
    },
    // Если watch - true, то webpack запомнит файлы, которые были собраны и будет пересобирать их при каждом их сохранении
    watch: true,
    // Хранит информацию об исходном коде до минификации и т.д.
    devtool: "source-map",
    // Подключаемые дополнительные модули и их настройки
    module: {}
    // Есть свойство plugins для подключения различных плагинов
};
