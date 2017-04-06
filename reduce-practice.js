const characters = [
    { name: 'Darth Vader', team: 'Empire' },
    { name: 'Emperor Palpatine', team: 'Empire' },
    { name: 'Han Solo', team: 'Rebels' },
    { name: 'Princess Leia', team: 'Rebels' },
    { name: 'Yoda', team: 'Rebels' }];

/* .reduce wireframe: */
/**********************

[ ].reduce(function(accumulator, currentVal){
    // do stuff
}, initialValue); // initial value is not always required

***********************/

let example1 = [1, 2, 3].reduce(function (sum, currentVal) { // 'sum' is often called 'accumulator' or 'previous', 'currentVal' is often called 'next'
    sum += currentVal;
    return sum
}, 4); // 4 is the initial value; it defaults to the value at index[0] if it's not listed

console.log(example1) // 10; 4 + 1 + 2 + 3

let example2 = [4, 7, 9].reduce(function (product, currentVal) {
    product *= currentVal;
    return product;
}, 3);

console.log(example2); // 3*4*7*9

// make: [[0, 4], [5, 13]]
// into: [0, 4, 5, 13]
let result = [[0, 4], [5, 13]].reduce(function (acc, currentVal) {
    currentVal.forEach(function (element) {
        acc.push(element);
    })
    return acc;
}, []);

console.log(result); // [0, 4, 5, 13]

let es6Result = [[0, 4], [5, 13]].reduce((acc, currentVal) => {
    currentVal.forEach(element => acc.push(element))
    return acc;
}, []);

console.log(es6Result); // [0, 4, 5, 13]