'use strict'

const people = [
    { firstName: 'Kevin', lastName: 'Wong', age: 21 },
    { firstName: 'Ivy', lastName: 'Patton', age: 38 },
    { firstName: 'Morgan', lastName: 'Fogarty', age: 32 },
]

// Write a function 'isAgeOdd' 
// arguments: a person (an object with an age property)
// returns: true if the person's age is an odd number, false otherwise
function isAgeOdd(someObject){
    return (someObject.age%2 === 1);
    // or: 
    //  return (person.age%2 !== 0);
}

// Write a function 'getPeopleWithOddAges'
// arugments: an array of people (an array of objects, each object has an age property)
// returns: an array of people whose ages are odd numbers
function getPeopleWithOddAges(people){
    return people.filter(isAgeOdd);
}

// Write a function 'doesFirstNameStartWithVowel'
// arugments: a person (an object with a firstName property)
// returns: true if the first name begins with a vowel, false otherwise
function doesFirstNameStartWithVowel(person){
    let firstLetter = person.firstName.charAt(0).toLowerCase();
    return ['a', 'e', 'i', 'o', 'u'].indexOf(firstLetter) !== -1;
    // or
    //  return (firstLetter === 'a' || firstLetter === 'e' ......)
}

// Write a function 'getVowelPeople'
// arguments: an array of people objects with firstName properties
// returns: the people whose first name begins with a vowel
function getVowelPeople(people){
    return people.filter(doesFirstNameStartWithVowel);
}