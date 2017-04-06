const characters = [
    {
        name: 'Darth Vader',
        team: 'Empire'
    },
    {
        name: 'Han Solo',
        team: 'Rebels'
    },
    {
        name: 'Princess Leia',
        team: 'Rebels'
    },
    {
        name: 'Yoda',
        team: 'Rebels'
    }]

let example1 = [1,2,3].reduce(function(sum, currentVal){ // 'sum' is often called 'accumulator' or 'previous', 'currentVal' is often called 'next'
   sum += currentVal;
   return sum
}, 4); // 4 is the initial value; it becomes 0 if it's not listed

console.log(example1) // 10; 4 + 1 + 2 + 3

