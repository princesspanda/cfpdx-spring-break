const array = [5, 9, 10];
let initialValue = 42;

array.reduce(function(sum, currentValue){
    sum+=currentValue;
    return sum;
}, initialValue);

/* start the debugger in VS Code:
open the VS Code debugger in the sidebar and 
click the gear symbol at the top

in the terminal, enter:
node --debug-brk <fileName>

in the VS Code debugger at the top, click the 
up/down arrow next to play, select 'attach to process'

hit play button
*/