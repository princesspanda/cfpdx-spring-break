'use strict'

const people = [
    { firstName: 'Kevin', lastName: 'Wong', age: 21 },
    { firstName: 'Ivy', lastName: 'Patton', age: 38 },
    { firstName: 'Morgan', lastName: 'Fogarty', age: 32 },
]
const a = 42;
// Write a function called 'getFirstName' that takes one 
// argument - a person - and returns the person's first name.
function getFirstName(person) {
    console.log(a);
    // console.log(foo);
    return person.firstName;
}
console.log(getFirstName(people[0]));
console.log(getFirstName(people[1]));

// Write a function called 'getAllFirstNames' that takes one
// argument - an array of people - and returns every person's 
// first name.
// * use a for loop 
// * use array.map
