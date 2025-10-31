// 1. Crea un función que utilice error correctamente.

function divideNumbers(a, b) {
    if (b === 0) {
        console.error("La división entre cero no está permitida")
    } else {
        let result = a / b
        console.log(`Resultado: ${result}`)
    }
}

divideNumbers(10, 2)
divideNumbers(10, 0)

// 2. Crea una función que utilice warn correctamente.

function checkAge(age) {
    if (age < 18) {
        console.warn("Eres menor de 18 años")
    } else {
        console.log("Eres adulto")
    }
}

checkAge(20)
checkAge(15)

// 3. Crea una función que utilice info correctamente.

function downloadFile(fileSize, downloaded) {
    if (downloaded < fileSize) {
        console.info(`Descarga en proceso: ${downloaded}/${fileSize}MB descargados`)
    } else {
        console.log("Descarga completa")
    }
}
downloadFile(100, 50)
downloadFile(100, 100)

// 4. Utiliza table.

let users = [
    { name: "Brais", age: 37 },
    { name: "Sara", age: 20 },
    { name: "Pedro", age: 46 }
]
console.table(users)

// 5. Utiliza group.

console.group("Grupo 1")
console.log("Mensaje 1")
console.log("Mensaje 2")
console.groupEnd()

console.group("Grupo 2")
console.log("Mensaje 3")
console.log("Mensaje 4")
console.groupEnd()

// 6. Utiliza time.

console.time("Timer")
for (let i = 0; i < 1000000; i++) {
    // Simulamos un proceso
}
console.timeEnd("Timer")

// 7. Valida con assert si un número es positivo.

function checkPositive(number) {
    console.assert(number > 0, `El número ${number} no es positivo`)
}

checkPositive(5)  // No muestra error
checkPositive(-3)

// 8. Utiliza count.

function countCalls() {
    console.count("Se ha llamado a la función")
}
countCalls()
countCalls()
countCalls()

// 9. Utiliza trace.

function functionOne() {
    functionTwo()
}

function functionTwo() {
    console.trace("Traza de ejecución")
}

functionOne()

// 10. Utiliza clear.

function clearConsole() {
    console.clear()
}

// clearConsole()