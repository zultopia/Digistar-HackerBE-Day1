// test.js

const { greet, greetWithLodash, greetWithTime, greetWithJoke } = require('task1-hacker-azul');

console.log(greet('Azul'));
// Output: Hello, John! 

console.log(greetWithLodash('azul'));
// Output: Hello, John! 

console.log(greetWithTime('Azul'));
// Output: Hello, John! The time is now [current time]. Welcome to my awesome package.

greetWithJoke('Azul').then(console.log);
// Output: Hello, John! Here's a joke for you: [Joke from API]. Welcome to my awesome package.