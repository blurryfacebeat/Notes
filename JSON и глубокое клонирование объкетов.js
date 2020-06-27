const person = {
    name: 'Alex',
    tel: '88005553535',
    parents: {
        mom: 'Anna',
        dad: 'Mike'
    }
};

// Превращает объекты в JSON
const json = JSON.stringify(person);
console.log(json);

// Превращает JSON в объекты
const temp = JSON.parse(json);
console.log(temp);

// Глубокие копии объектов, они не ссылаются на объект, от которого создавались
const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = 'Kate';
console.log(clone);
console.log(person);
