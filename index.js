let a = 42; // global (file) scope
let b = 1; // global (file) scope

function bar () {
    console.log('bar');
    foo(0);
}

bar();