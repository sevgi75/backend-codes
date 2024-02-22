"use strict"

/* -------------------------------------------------------
    OOP & CLASSES
------------------------------------------------------- *
//? OOP: Object Oriented Programming
//? DRY: Don't Repeat Yourself
//? BLUEPRINT: Taslak (Mimarların kullandığı mavi şablon kağıdı)
//? CLASS: Obje türetmek için kullanılacak şablon.

// * Class Declaration:
// class PascalCaseClassName { ... }

//* Class Expression:



//? INSTANCE = Bir class'tan türetilen objedir

/* ------------------------------------------------------- *

class Car {

    isRunning = false

    constructor (brand, model, year) {
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('Engine runned')
        return this.isRunning
    }
}

const Ford = new Car('Ford', 'Mustang', 1967)
console.log(Ford)
// Ford.isRunning = true
// console.log(Ford)
Ford.runEngine()
console.log(Ford)

const Mercedes = new Car('Mercedes', 'CLK200', 2010)
console.log(Mercedes);
const Renault = new Car('Renault', 'Megane', 2010)
console.log(Renault);

/* ------------------------------------------------------- */
//? INHERITANCE: MirasAlma. Başka bir class'ın tüm özelliklerini/metodlarını devralma. (parent-child ilişkisi kurulur.)

class Vehicle {

    vehicleIsActive = false

    constructor(vehicleType) {
        this.vehicleType = vehicleType
    }
}
class Car extends Vehicle { // Inheritance

    isRunning = false

    // constructor (brand, model, year, vehicleType = 'Car') {
    //     super(vehicleType)
    //     this.brand = brand
    //     this.model = model
    //     this.year = year
    // }

    constructor (brand, model, year) {
        super('Car')
        this.brand = brand
        this.model = model
        this.year = year
    }

    runEngine() {
        this.isRunning = true
        console.log('Engine runned')
        return this.isRunning
    }
}

// class Truck extends Vehicle {  ... }

const Ford = new Car('Ford', 'Mustang', 1967)
console.log(Ford);
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */