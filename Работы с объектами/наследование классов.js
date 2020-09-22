class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getDistance() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    draw() {}
}

class Point extends Shape {
    draw() {
        console.log('Рисуем точку');
    }
}

class Circle extends Shape {
    constructor(x, y, r) {
        // Обращение к родительскому конструктору
        super(x, y);
        this.r = r;
    }

    draw() {
        console.log('Рисуем окружность');
    }
}

const shape = new Shape(5, 7);
const point = new Point(15, 20);
const circle = new Circle(10, 5, 30);

console.log(shape);
console.log(point);
console.log(circle);
