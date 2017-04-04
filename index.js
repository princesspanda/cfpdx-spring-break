let a = 42; // global (file) scope
let b = 1; // global (file) scope

begin = function (x) {
    function adder() {
        return a + b + x; // function scope
    }
    let sum = adder();
    console.log(sum);
    console.log("Hello, world!");    
}
begin(0);
begin(1);
begin(2);
// function adder () {
//     console.log(a + b); // function scope
// }
// let sum = adder();
// console.log(sum);
// console.log("Hello, world!");

// Check the scope and call stack in the dev tools Sources tab
// after setting a break point in the code.
// Use step over, step into, and step out to go through lines
// of code.