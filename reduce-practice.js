const characters = [
    { name: 'Darth Vader', team: 'Empire' },
    { name: 'Emperor Palpatine', team: 'Empire' },
    { name: 'Han Solo', team: 'Rebels' },
    { name: 'Princess Leia', team: 'Rebels' },
    { name: 'Yoda', team: 'Rebels' },];

let empireOrRebels = characters.reduce(function(acc, curr){
    if(curr.team === 'Empire') {
        acc.empireCount+=1;
    }
    else if (curr.team === 'Rebels'){
        acc.rebelCount+=1;
    }
    return acc;
}, {empireCount: 0, rebelCount: 0});

console.log(empireOrRebels); // {empireCount: 2, rebelCount: 0}

const moreCharacters = [
    { name: 'Darth Vader', team: 'Empire' },
    { name: 'Sunshine bear', team: 'Carebears'},
    { name: 'Emperor Palpatine', team: 'Empire' },
    { name: 'Han Solo', team: 'Rebels' },
    { name: 'Princess Leia', team: 'Rebels' },
    { name: 'Yoda', team: 'Rebels' },
    { name: 'Rainbow pony', team: 'Brony'},
    { name: 'Wicket', team: 'Ewoks'}];

let characterCount = moreCharacters.reduce(function (acc, curr) {
    if (acc[curr.team]) {
        acc[curr.team] += 1;
    }
    else {
        acc[curr.team] = 1;
    }
    /* same thing:
    if(!acc[curr.team]){
      acc[curr.team]=0;
    } 
    acc[curr.team]+=1; 
    */
    /* same thing: 
    if(acc.hasOwnProperty(curr.team)){
        acc[curr.team] +=1;
    }
        else {
        acc[curr.team] = 0;
    }
    */

    return acc;
}, {});

console.log(characterCount); // {Empire: 2, Carebears: 1, Rebels: 3, Brony: 1, Ewoks: 1}

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