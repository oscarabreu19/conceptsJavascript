// const {doSomething} = require('./exampleOne');
// const {suma} = require('./exampleTwo');
const {getCounter} = require('./exampleThree');

// doSomething();
// console.log(suma(1)(3));

let counter = getCounter();
console.log(counter());
console.log(counter());
counter = getCounter();
console.log(counter());