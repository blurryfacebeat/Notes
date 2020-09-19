let animal = {
    eats: true,
    has4legs: true,
    sum() {
        return 1 + 1;
    }
};

let rabbit = {
    jumps: true,

    // Т.к. свойство есть, то оно не заменится про прототипном наследовании
    has4legs: false
};

// теперь выведет false, вместо undefined, т.к. есть свое свойство
rabbit.eats = false;

console.log(rabbit.eats);
console.log(rabbit.jumps);
console.log(rabbit.has4legs);

try {
    console.log(rabbit.sum());
} catch (e) {
    console.log('нет такой функции');
}

rabbit.__proto__ = animal;

console.log(`---------------`);

console.log(rabbit.eats);
console.log(rabbit.jumps);
console.log(rabbit.has4legs);
console.log(rabbit.sum());

/* undefined
true
false
нет такой функции
---------------
true
true
false
2 */

console.log(`----`);

let person = {
    sayAge() {
        console.log(this.age);
    },

    sayName() {
        console.log(this.name);
    }
};

let mike = {
    age: 27,
    name: 'Mike',
    __proto__: person
};

mike.sayAge();
mike.sayName();

console.log(`-----------`);

// Object.keys выведет только собственные ключи, а for...in выведет и унаследованные ключи
console.log(Object.keys(mike));
for (let key in mike) {
    // Если хотим отфильтровать и вывести только свои ключи
    if (mike.hasOwnProperty(key)) {
        console.log(`Свои ключи: ${key}: ${mike[key]}`);
    } else {
        console.log(`Унаследованные ключи: ${key}: ${mike[key]}`);
    }
}
