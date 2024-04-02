"use strict";
// 45. Cars: 
// Write a function that stores information about a car in an Object. The function should always 
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword 
// arguments. Call the function with the required information and two other name-value pairs, such as 
// a color or an optional feature. Print the Object that’s returned to make sure all the information was
// stored correctly
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, model, ...features) {
    const car = Object.assign({ manufacturer,
        model }, Object.assign({}, ...features));
    return car;
}
let answare = createCar('honda', 'civic', { color: 'black' }, { features: ['navigatoin', 'power window'] });
console.log(answare);
