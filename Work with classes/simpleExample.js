class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

// Наследуемость
class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, color) {
        super(height, width);
        this.text = text;
        this.color = color;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.color}`);
    }
}

const rect = new Rectangle(3, 5);
console.log(rect.calcArea());

const div = new ColoredRectangleWithText(5, 10, 'ESKETIT', 'blue');
div.showMyProps();
console.log(div.calcArea());
