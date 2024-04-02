// 45. Cars: 
// Write a function that stores information about a car in an Object. The function should always 
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword 
// arguments. Call the function with the required information and two other name-value pairs, such as 
// a color or an optional feature. Print the Object that’s returned to make sure all the information was
// stored correctly

import { features } from "process";

function createCar(manufacturer: string, model:string, ...features: {[key : string]: any} []): object {
    const car = {
        manufacturer,
        model,
      ...Object.assign({}, ...features)
    };
    return car;
}

let answare = createCar('honda', 'civic', {color:'black'}, {features: ['navigatoin', 'power window']})
console.log(answare);