"use strict"

/* -------------------------------------------------------
    OBJECTS
------------------------------------------------------- */

// Direkt obje tanımlamada PascalCase veya camelCase kullanabiliriz:
// const exampleObject = {
//     propertyName: 'value', // attribute, field

//     methodName: function() {
//         return 'methodName() is a method'
//     },

//     methodAlternative() {
//         return 'this is a method'
//     }
// }

// console.log(exampleObject.propertyName)
// console.log(exampleObject.methodName())

/* ------------------------------------------------------- */

// const Car = {

//     brand: 'Ford',
//     model: 'Mustang',
//     year: 1967,
//     isAutoGear: true,
//     colors: ['white', 'red'],
//     details: {
//         color1: 'white',
//         color2: 'red',
//         engineSize: 4900
//     },
//     startEngine: function(param1){
//         console.log(param1);
//         return 'Engine runned'
//     }
// }

// console.log(Car.brand);
// console.log(Car.colors);
// console.log(Car.colors[0]);
// console.log(Car.details);
// console.log(Car.details.color1);
// console.log(Car.startEngine('value'));

// Alternative Style
// console.log(Car['brand']);
// console.log(Car['colors'][0]);
// console.log(Car['details']['engineSize']);
// console.log(Car['startEngine'](0));


/* ------------------------------------------------------- */
//? 'THIS' KEYWORD

const Car = {

    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    colors: ['white', 'red'],
    details: {
        color1: 'white',
        color2: 'red',
        engineSize: 4900
    },
    startEngine: function(param1){
        console.log(param1);
        return 'Engine runned'
    },
    getDetails: function() {
        // return this
        // return this.brand + ' ' + this.model + ' ' + this.year
        return this.startEngine('selam')
    },
    arrowMethod: () => {
        //return this
        return Car.brand
    }
}
 console.log(Car.getDetails());
//  console.log(Car.arrowMethod());

/* ------------------------------------------------------- *
//? ARRAY DESTRUCTURING

const testArray = ['value0', 'value1', 'value2', 'value3', 'value4']

//? Rest Operator (Toplayıcı) (Eşittirin sol tarafında) (En sonda olmak zorunda.)
const [firstItem, secondItem, ...others] = testArray
console.log(firstItem, secondItem, others)



/* ------------------------------------------------------- *

const Car = {

    brand: 'Ford',
    model: 'Mustang',
    year: 1967,
    isAutoGear: true,
    colors: ['white', 'red'],
    details: {
        color1: 'white',
        color2: 'red',
        engineSize: 4900
    },
    startEngine: function() {
        return 'Engine Runned.'
    }
}



/* ------------------------------------------------------- */
//? CONSTRUCTORS



/* ------------------------------------------------------- */
//? "NEW" KEYWORD

/* ------------------------------------------------------- */


/* ------------------------------------------------------- */