// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".

function greet(name, callback) {
    setTimeout(() => {
        callback(name)
    }, 2000)
}

greet("Brais", (name) => {
    console.log(`Hola, ${name}`)
})

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.

function task1(callback) {
    setTimeout(() => {
        console.log("Tarea 1 completada")
        callback()
    }, 1000)
}

function task2(callback) {
    setTimeout(() => {
        console.log("Tarea 2 completada")
        callback()
    }, 1000)
}

function task3(callback) {
    setTimeout(() => {
        console.log("Tarea 3 completada")
        callback()
    }, 1000)
}

task1(() => {
    task2(() => {
        task3(() => {
            console.log("Todas las tareas completadas")
        })
    })
})

// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".

function checkEvenNumber(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 === 0) {
            resolve("Número par")
        } else {
            reject("Número impar")
        }
    })
}

checkEvenNumber(4)
    .then(message => console.log(message))
    .catch(error => console.log(error))

checkEvenNumber(5)
    .then(message => console.log(message))
    .catch(error => console.log(error))

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".

function firstTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Primera tarea completada")
            resolve()
        }, 1000)
    })
}

function secondTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Segunda tarea completada")
            resolve()
        }, 2000)
    })
}

function thirdTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Tercera tarea completada")
            resolve()
        }, 1500)
    })
}

firstTask()
    .then(() => secondTask())
    .then(() => thirdTask())
    .then(() => console.log("Todas las tareas completadas secuencialmente"))

// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().

async function executeTasks() {
    console.log("Iniciando tareas con async/await")
    
    await firstTask()
    await secondTask()
    await thirdTask()
    
    console.log("Todas las tareas completadas con async/await")
}

executeTasks()

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id < 5) {
                resolve({ id, name: `Usuario ${id}` })
            } else {
                reject("Usuario no encontrado")
            }
        }, 2000)
    })
}

async function fetchUser(id) {
    try {
        const user = await getUser(id)
        console.log(`Usuario encontrado:`, user)
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

fetchUser(3)
fetchUser(7)

// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
//    console.log("Inicio")
//    setTimeout(() => console.log("setTimeout ejecutado"), 0)
//    Promise.resolve().then(() => console.log("Promesa resuelta"))
//    console.log("Fin")

console.log("Inicio")
setTimeout(() => console.log("setTimeout ejecutado"), 0)
Promise.resolve().then(() => console.log("Promesa resuelta"))
console.log("Fin")

// El orden de salida será: 
// 1. "Inicio" (código síncrono)
// 2. "Fin" (código síncrono)
// 3. "Promesa resuelta" (microtarea, tiene prioridad)
// 4. "setTimeout ejecutado" (tarea)

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.

function wait1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Promesa 1 resuelta")
            resolve("Resultado 1")
        }, 2000)
    })
}

function wait2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Promesa 2 resuelta")
            resolve("Resultado 2")
        }, 1000)
    })
}

function wait3() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Promesa 3 resuelta")
            resolve("Resultado 3")
        }, 3000)
    })
}

Promise.all([wait1(), wait2(), wait3()])
    .then(results => {
        console.log("Todas las promesas resueltas")
        console.log("Resultados:", results)
    })

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.

function waitSeconds(seconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000)
    })
}

async function countdown() {
    console.log("Iniciando espera de 3 segundos...")
    await waitSeconds(3)
    console.log("Tiempo finalizado")
}

countdown()

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.

let accountBalance = 500

function checkBalance() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(accountBalance)
        }, 1000)
    })
}

function withdrawMoney(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount <= accountBalance) {
                accountBalance -= amount
                resolve(accountBalance)
            } else {
                reject("Fondos insuficientes")
            }
        }, 2000)
    })
}

async function performTransaction() {
    try {
        const initialBalance = await checkBalance()
        console.log(`Saldo disponible: ${initialBalance}$`)
        
        console.log("Retirando 300$...")
        const balanceAfterFirst = await withdrawMoney(300)
        console.log(`Operación realizada con éxito, saldo restante: ${balanceAfterFirst}$`)
        
        console.log("Retirando 300$...")
        const balanceAfterSecond = await withdrawMoney(300)
        console.log(`Operación realizada con éxito, saldo restante: ${balanceAfterSecond}$`)
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

performTransaction()