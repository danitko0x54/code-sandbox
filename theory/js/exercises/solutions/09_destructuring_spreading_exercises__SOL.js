// 1. Usa desestructuración para extraer los dos primeros elementos de un array.

let myArray = [10, 20, 30, 40]
let [first, second] = myArray
console.log(first)
console.log(second)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable.

let [third, fourth, fifth = 50] = myArray
console.log(third)
console.log(fourth)
console.log(fifth)

// 3. Usa desestructuración para extraer dos propiedades de un objeto.

let person = { alias: "MoureDev", age: 37, job: "Programador" }
let { alias, age } = person
console.log(alias)
console.log(age)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes.

let { name: personName, job: personJob } = person
console.log(personName)
console.log(personJob)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado.

let user = {
    username: "mouredev",
    details: {
        email: "mouredev@example.com",
        address: "Calle MoureDev"
    }
}
let { details: { email, address } } = user
console.log(email)
console.log(address)

// 6. Usa propagación para combinar dos arrays en uno nuevo.

let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let combinedArray = [...array1, ...array2]
console.log(combinedArray)

// 7. Usa propagación para crear una copia de un array.

let copiedArray = [...array1]
console.log(copiedArray)

// 8. Usa propagación para combinar dos objetos en uno nuevo.

let object1 = { a: 1, b: 2 }
let object2 = { c: 3, d: 4 }
let combinedObject = { ...object1, ...object2 }
console.log(combinedObject)

// 9. Usa propagación para crear una copia de un objeto.

let copiedObject = { ...object1 }
console.log(copiedObject)

// 10. Combina desestructuración y propagación.

let numbers = [100, 200, 300, 400, 500]
let [num1, num2, ...rest] = numbers
console.log(num1)
console.log(num2)
console.log(rest)