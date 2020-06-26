// Контекст у методов объекта - сам объект
// this в конструкторах и классах - это новый экземпляр объекта

function newUser(name, age) {
    this.name = name;
    this.age = age;
}

function sayName(surname) {
    console.log(this.name + ' ' + surname);
}

let alex = new newUser('Alex', 28);

const usr = {
    name: 'John'
};

// Используется, чтобы вызвать в стороннем объекте контекст вызова
// сторонней функции
sayName.call(usr, 'Smith');
sayName.call(alex, 'Salevan');
// То же самое, но дополнительные аргументы функции передаются в массиве
sayName.apply(usr, ['Cavanna']);

// Создает новую функцию, связанную с определенный контекстом
function count(num) {
    return this * num;
}
// В данном случае 2 будет передаваться вместо this
const double = count.bind(2);
console.log(double(15));

// У стрелочной функции нет своего this, он лезет за ним к родителю
const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };

        say();
    }
};

obj.sayNumber();

const btn = document.querySelector('button');

// Так как у стрелочной функции нет своего this, то мы используем
// event.target
btn.addEventListener('click', event => {
    console.log(event.target);
});

const toDouble = a => 2 * a;
console.log(toDouble(4));
