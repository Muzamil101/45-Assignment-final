// 44. Sandwiches: 
// Write a function that accepts an array of items a person wants on a sandwich. The function 
// should have one parameter that collects as many items as the function call provides, and it should 
// print a summary of the sandwich that is being ordered. Call the function three times, using a different 
// number of arguments each time.


function makesandwiches (item: string[]) {
    console.log('\nmaking your sandwiches with:');
    item.forEach(Element => console.log("- " + Element));
    console.log('enjoy your sandwiches !\n');

}

makesandwiches(['hum', 'cheese', 'letuce']);

makesandwiches(['turkey', 'bascon']);

makesandwiches(['apple', 'banana', 'orange']);