// 1. Crea una función que retorne a otra función

function createGreeter() {
    return function(name) {
        console.log(`Hola, ${name}!`)
    }
}

const greet = createGreeter()
greet("Brais")
greet("MoureDev")

// 2. Implementa una función currificada que multiplique 3 números

function multiplyThree(a) {
    return function(b) {
        return function(c) {
            return a * b * c
        }
    }
}

const result1 = multiplyThree(2)(3)(4)
console.log(result1)

const multiplyByTwo = multiplyThree(2)
const multiplyByTwoAndThree = multiplyByTwo(3)
console.log(multiplyByTwoAndThree(5))

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

function power(base, exponent) {
    if (exponent === 0) {
        return 1
    }
    return base * power(base, exponent - 1)
}

console.log(power(2, 3))
console.log(power(5, 2))

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter(initialValue = 0) {
    let count = initialValue
    return {
        increment: function() {
            count++
            return count
        },
        decrement: function() {
            count--
            return count
        },
        getValue: function() {
            return count
        }
    }
}

const myCounter = createCounter(5)
console.log(myCounter.getValue())

myCounter.increment()
console.log(myCounter.getValue())

myCounter.decrement()
myCounter.decrement()
console.log(myCounter.getValue())

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

function sumManyTimes(multiplier, ...numbers) {
    const sum = numbers.reduce((total, num) => total + num, 0)
    return sum * multiplier
}

console.log(sumManyTimes(2, 1, 2, 3))
console.log(sumManyTimes(10, 5, 5))

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

function calculateSum(numbers, callback) {
    const sum = numbers.reduce((total, num) => total + num, 0)
    callback(sum)
}

function displayResult(result) {
    console.log(`La suma de los números es: ${result}`)
}

calculateSum([1, 2, 3, 4], displayResult)

calculateSum([5, 10, 15], function(result) {
    console.log(`El resultado es: ${result}`)
})

// Con arrow function
calculateSum([2, 4, 6, 8], (result) => {
    console.log(`Total: ${result}`)
})

// 7. Desarrolla una función parcial

function multiply(a, b, c) {
    return a * b * c
}

function multiplyByFive(b, c) {
    return multiply(5, b, c)
}

console.log(multiplyByFive(2, 3))

// Otra manera de crear una función parcial de forma dinámica

function partial(fn, ...fixedArgs) {
    return function(...remainingArgs) {
        return fn(...fixedArgs, ...remainingArgs)
    }
}

const multiplyByTen = partial(multiply, 10)
console.log(multiplyByTen(2, 3))

// 8. Implementa un ejemplo que haga uso de Spread

function joinArrays(arr1, arr2, arr3) {
    return [...arr1, ...arr2, ...arr3]
}

const fruits = ["manzana", "plátano"]
const vegetables = ["zanahoria", "tomate"]
const meats = ["pollo", "vaca"]

const allFoods = joinArrays(fruits, vegetables, meats)
console.log(allFoods)

function sum(a, b, c) {
    return a + b + c
}

const numbers = [1, 2, 3]
console.log(sum(...numbers))

// 9. Implementa un retorno implícito

const double = x => x * 2

console.log(double(5))

// Otro ejemplo con más operaciones y retorno implícito
const calculateArea = (width, height) => width * height

console.log(calculateArea(3, 4))

// 10. Haz uso del this léxico

const person = {
    name: "Brais",
    greetRegular: function() {
        console.log(`Hola, mi nombre es ${this.name}`)
    },
    greetArrow: () => {
        console.log(`Hola, mi nombre es ${this.name}`)
    },
    delayedGreet: function() {
        setTimeout(() => {
            console.log(`Hola con delay, soy ${this.name}`)
        }, 100)
    }
}

person.greetRegular()
person.greetArrow()
person.delayedGreet()