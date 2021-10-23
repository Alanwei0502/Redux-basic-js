import { compose, pipe } from 'lodash/fp';
import { Map } from 'immutable';
import { produce } from 'immer';

// Non Functional Style of Code
let input = '   JavaScript   ';
let output = '<div>' + input + '</div>';

// Functional Programming without HOF(High-Order-Function)
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const wrap = type => str => `<${type}>${str}</${type} >`; // Haskell Curry
const toLowerCase = str => str.toLowerCase();
const result = toLowerCase(wrapInDiv(trim(input)));

// lodash [compose: HOF], read-direction: <---
const transform = compose(toLowerCase, wrapInDiv, trim);
transform(input);

// lodash [pipe: HOF], read-direction --->
const transform2 = pipe(trim, toLowerCase, wrap('div'));
transform2(input);






// Pure Function:  Always return the same result | args[same] => result[same]
// 1. No random values
// 2. No current date/time
// 3. No global state (DOM, Files, DB, stc)
// 4. No mutation of parameters
// PROs: self-documenting, easily testable, concurrency, cacheable

// e.g. non-pure
function myFunction(number) {
  return number * Math.random();
}
// e.g. pure
function isEligible(age, minAge) {
  return age > minAge;
}





// Immutability
// JavaScript is not a pure functional programming language because we can mutate data
// JavaSCript is designed as a multi-paradigm language
const book = {};
book.title = '...';
// const can not reassign
// book = {}; it won't work

// Why immutability
// PROs: predictability, faster change detection, concurrency
// CONs: performance, memory overhead





// Updating Object
const person = {
  name: 'Alan',
  address: {
    countr: 'Taiwan',
    city: 'Taipei'
  }
};
// shallow copy
const updated = Object.assign({}, person, { name: 'Tina', age: 27 }); //Object,assign
updated.address.city = 'Taichung';
const updated2 = { ...person, name: 'Tina', age: 27 }; //spread operator
// deep copy
const deepUpdated = {
  ...person,
  address: {
    ...person.address,
    city: 'Taichung'
  }
};





// Updating Array
const numbers = [1, 2, 3];
// Adding
const index = numbers.indexOf(2);
const addedSpecific = [
  ...numbers.slice(0, index),
  4,
  ...numbers.slice(index),
];
const added = [0, ...numbers, 4];
// Removing
const removed = numbers.filter(n => n !== 2);
// Updating
const updated = numbers.map(n => n == 2 ? 20 : n);





// Javascript libraries for immutable JS

// 1. Immutable
// npm i immutable
let book1 = Map({ title: 'Harry Potter' });

function publish1(book) {
  return book.set('isPublished', true)
}

book1 = publish1(book1);
console.log(book1.toJS());


// 2. Immer
// npm i immer
let book2 = { title: 'Harry Potter' };

function publish2(book) {
  return produce(book, draftBook => {
    draftBook.isPublished = true;
  });
}
let updatedBook2 = publish2(book2);
console.log(updatedBook2);

// 3. Mori

