
// equality and inequali test 1
console.log("equality test with strings: ", "apple" === "apple");
// equality and inequali test 2
console.log("inequali test with strings: ", ("apple" as string) != "orange");
//test using the lower case functoin test
console.log("lower case functoin test: ", "HELLO".toLowerCase() === "hello");
//numerical test inolving equality ana inquality
console.log("equality test with numbers: ", 25 === 25);
//numerical test inolving inquality
console.log("inquality test with numbers: ", (25 as Number) != 40);
//greater than test
console.log("greater than test", 10 > 5);
//less than test
console.log("less than test", 5 < 10);
//greater than ot equal to
console.log("greater than and equal to test: ", 15 >= 15);
// less then or equal to
console.log("less then or equal to test: ", 2 <= 10);
//tests using "and"  operator
console.log("and operator tests: ", 6===6 && 10 > 5);
//tests using "or"  operator
console.log("or operator tests: ", 6===6 || false);
//tests whether an item is in a array
const fruits : string[] = ['nashpati', 'banana', 'amrood'];
console.log('test "nashpati" in the array: ', fruits.includes("nashpati"));

console.log('tasting "apple" is not in array: ', !fruits.includes('apple'))