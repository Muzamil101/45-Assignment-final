"use strict";
let age = 21;
//ya bataya agr age 2 sa kam hogi to ya prints krwaga person is a baby.
if (age < 2) {
    console.log("person is a baby");
}
else if (age >= 2 && age < 4) {
    console.log("person is a toddler");
}
else if (age >= 4 && age < 13) {
    console.log("person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("person is a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("person is a adult");
}
else {
    console.log("person is a elderly");
}
