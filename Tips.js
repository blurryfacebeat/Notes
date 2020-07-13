// Можно создать собственную область видимости и вызвать функцию через саму себя. Первая number останется глобальной
const number = 3;

(function(){
  let number = 2;
}());

const user = (function(){
  const private = function() {
    console.log('I am private!');
  };
  
  return {
    sayHello: private
  };
}());

user.sayHello();

//
