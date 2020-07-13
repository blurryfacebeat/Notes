function myModule() {
    this.hello = function() {
        console.log('Hello!!');
    };

    this.goodbye = function() {
        console.log('Goodbye!!!');
    };
}

module.exports = myModule;
