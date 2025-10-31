// 1. Exporta una función.

// mathFunctions.js
export function add(a, b) {
    return a + b
}

// 2. Exporta una constante.

// constants.js
export const PI = 3.14159

// 3. Exporta una clase.

// Person.js
export class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hola, mi nombre es ${this.name}`)
    }
}

// 4. Importa una función.

// import { add } from './mathFunctions.js'
// console.log(add(2, 3))

// 5. Importa una constante.

// import { PI } from './constants.js'
// console.log(PI)

// 6. Importa una clase.

// import { Person } from './Person.js'

// let person = new Person("Brais", 37)
// person.greet() 

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita).

// defaultExport.js

const MY_CONSTANT = 42

function myFunction() {
    return "Mi función"
}

class MyClass {
    constructor() {
        this.name = "Mi clase"
    }
}

export default { MY_CONSTANT, myFunction, MyClass }

// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita).

// import defaultModule from './defaultExport.js'

// console.log(defaultModule.MY_CONSTANT)
// console.log(defaultModule.myFunction())

// let defaultInstance = new defaultModule.MyClass()
// console.log(defaultInstance.name)

// 9. Exporta una función, una constante y una clase desde una carpeta.

// utils/index.js

export function subtract(a, b) {
    return a - b
}

export const MAX_VALUE = 100

export class Animal {
    constructor(type) {
        this.type = type
    }
}

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior.

// import { subtract, MAX_VALUE, Animal } from './utils/index.js'

// console.log(subtract(10, 5))
// console.log(MAX_VALUE)

// let dog = new Animal("Perro")
// console.log(dog.type)