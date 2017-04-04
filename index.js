let a = 42; // global (file) scope
let b = 1; // global (file) scope


let people = [
    { name: 'Kevin', age: 21 },
    { name: 'Ivy', age: 38 },
    { name: 'Morgan', age: 32 },
]

/* refactored code from lines 21-24 */
let result = people.map(function (anyNameYouWant, index) {
    if (index % 2 === 0) {
        return anyNameYouWant.age;
    } 
    // return people.age is 'undefined'
})
console.log('result is', result);

/* the old way before array.map */
// for (var i = 0; i < people.length; i++) {
//     debugger;
//     result.push(people[i].age);
// }