"use strict";
// 37. Large Shirts: 
// Modify the make_shirt() function so that shirts are large by default, with a message that reads 
// I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any 
// size with a different me
function make_shirt(size = 'large', text = 'i love typescript') {
    console.log(`creating a ${size} shirt with the massage ${text}`);
}
make_shirt();
make_shirt('medium');
make_shirt('small');
