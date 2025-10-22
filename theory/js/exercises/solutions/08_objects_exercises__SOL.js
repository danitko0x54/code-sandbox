// 1. Crea un objeto con 3 propiedades.

let person = {
    name: "Brais",
    age: 37,
    job: "Programador"
}

// 2. Accede y muestra su valor.

console.log(person.name)

// 3. Agrega una nueva propiedad.

person.country = "España"
console.log(person.country)

// 4. Elimina una de las 3 primeras propiedades.

delete person.job
console.log(person)

// 5. Agrega una función e invócala.

person.greet = function () {
    console.log("Hola, mi nombre es " + this.name)
}
person.greet()

// 6. Itera las propiedades del objeto.

for (let key in person) {
    console.log(key + ": " + person[key])
}

// 7. Crea un objeto anidado.

let company = {
    name: "MoureDev",
    address: {
        country: "Galicia",
        street: "Calle MoureDev",
        number: 0
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas.

console.log(company.address.country)
console.log(company.address.street)
console.log(company.address.number)

// Con un bucle

for (let key in company.address) {
    console.log(key + ": " + company.address[key])
}

// 9. Comprueba si los dos objetos creados son iguales.

let person2 = {
    name: "Brais",
    age: 37,
    country: "España"
}

let person3 = {
    name: "Brais",
    age: 37,
    country: "España"
}

console.log(person2 === person3) // false: las referencias no son iguales

function areObjectsEqual(obj1, obj2) {

    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    // Comprobamos si tienen el mismo número de propiedades
    if (keys1.length !== keys2.length) {
        return false
    }

    // Comprobamos si cada propiedad tiene el mismo valor
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }

    return true
}

console.log(areObjectsEqual(person2, person3))


// 10. Comprueba si dos propiedades diferentes son iguales.

let isSameAgeAndCountry = person2.age === person3.country
console.log(isSameAgeAndCountry) 