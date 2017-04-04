let a = 42; // global (file) scope
let b = 1; // global (file) scope


let people = [
    { name: 'Kevin', age: 21 },
    { name: 'Ivy', age: 38 },
    { name: 'Morgan', age: 32 },
]

let result = [];
for (var i = 0; i < people.length; i++) {
    debugger;
    result.push(people[i].age);
}