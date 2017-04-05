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
    return person.firstName;
}

// Write a function called 'getAllFirstNames' that takes one
// argument - an array of people - and returns every person's 
// first name.
// * use a for loop 
function getAllFirstNames (people) {
    let result = [];
    for (var i = 0; i < people.length; i++){
        let person = people[i];
        result.push(getFirstName(person));
    }

    return result;
}
console.log('using a for loop', getAllFirstNames(people));

// Write a function called 'getAllFirstNamesWithMap' that takes one
// argument - an array of people - and returns every person's 
// first name.
// * use array.map
function getAllFirstNamesWithMap (people){
    return people.map(getFirstName);
    // same as: 
    //  return people.map(function (person) {
    //      return person.firstName;    
    //  })
    // or:
    //  return people.map(person => person.firstName);
    // or:
    //  return people.map(person => getFirstName(person));
}
console.log('using array.map', getAllFirstNamesWithMap(people));

function getFullName (person) {
    return person.firstName + ' ' + person.lastName;
    // or:
    //  return `${person.firstName} ${person.lastName}`;
    // or:
    //  return [person.firstName, person.lastName].join(' ');
}

function getAllFullNames (people) {
    return people.map(getFullName);
}

function timeWarp(person){
    return person.age - 10;
}

function getAllAges(arr){
    return arr.map(timeWarp);
}