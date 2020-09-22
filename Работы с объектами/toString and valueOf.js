function rectangle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    // Когда мы работаем с объектом как со строкой, автоматически вызывается метод toString();
    this.toString = function() {
        return `Прямоугольник с координатами (${this.x};${this.y}, шириной ${this.width} и высотой ${this.height})`;
    }

    // Когда мы работаем с объектом как с числом, автоматически вызывается метод valueOf;
    this.valueOf = function() {
        return this.width * this.height;
    }
}

const rect = new rectangle(10, 20, 5, 6);

console.log(String(rect));
console.log(Number(rect));

/* 
    Прямоугольник с координатами (10;20, шириной 5 и высотой 6)
    30
*/
