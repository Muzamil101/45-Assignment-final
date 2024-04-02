// 36. T-Shirt: 
// Write a function called make_shirt() that accepts a size and the text of a message that should 
// be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the 
// message printed on it.
//  Call the function

function make_shirt(size: string, message: string) {
    console.log(`This is a ${size} shirt with the following message: ${message}`);
}

make_shirt("large", "This is a large shirt");