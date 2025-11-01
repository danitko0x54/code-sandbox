// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

const products = [
    { name: "Ordenador", price: 1200, inStock: true },
    { name: "Teléfono", price: 800, inStock: true },
    { name: "Tablet", price: 500, inStock: false },
    { name: "Auriculares", price: 100, inStock: true },
    { name: "Monitor", price: 300, inStock: false }
]

const availableProducts = products.filter(product => product.inStock)

const availableProductNames = availableProducts.map(product => product.name)
console.log("Productos disponibles:", availableProductNames)

const totalPrice = availableProducts.reduce((total, product) => total + product.price, 0)
console.log("Precio total de productos disponibles:", totalPrice)

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const cubeEvenNumbers = numbers
    .map(number => number ** 3)
    .filter(number => number % 2 === 0)

console.log("Números pares elevados al cubo:", cubeEvenNumbers)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

const dailyTasks = [
    ["Estudiar JavaScript", "Hacer ejercicio"],
    ["Ir de compras", "Cocinar cena", "Leer libro"],
    ["Visitar amigos"]
]

const allTasks = dailyTasks.flat()
console.log("Todas las tareas:", allTasks)

const tasksWithDay = dailyTasks.flatMap((tasks, dayIndex) => {
    return tasks.map(task => `Día ${dayIndex + 1}: ${task}`)
})
console.log("Tareas con día:", tasksWithDay)

// 4. Ordena un array de números de mayor a menor

const unsortedNumbers = [34, 7, 23, 89, 12, 42, 56, 3]

const sortedNumbers = unsortedNumbers.sort((a, b) => b - a)
console.log("Números ordenados de mayor a menor:", sortedNumbers)

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

const setA = new Set([1, 2, 3, 4, 5])
const setB = new Set([3, 4, 5, 6, 7])

const unionSet = new Set([...setA, ...setB])
console.log("Unión de conjuntos:", unionSet)

const intersectionSet = new Set([...setA].filter(element => setB.has(element)))
console.log("Intersección de conjuntos:", intersectionSet)

const differenceSetA = new Set([...setA].filter(element => !setB.has(element)))
console.log("Diferencia de conjuntos (A - B):", differenceSetA)

const differenceSetB = new Set([...setB].filter(element => !setA.has(element)))
console.log("Diferencia de conjuntos (B - A):", differenceSetB)

// 6. Itera los resultados del ejercicio anterior

console.log("\nIterando la unión:")
unionSet.forEach(element => console.log(`Elemento: ${element}`))

console.log("\nIterando la intersección:")
intersectionSet.forEach(element => console.log(`Elemento común: ${element}`))

console.log("\nIterando la diferencia A - B:")
differenceSetA.forEach(element => console.log(`Elemento único de A: ${element}`))

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

const users = new Map([
    [1, { name: "Brais", age: 25, email: "brais@ejemplo.com" }],
    [2, { name: "Moure", age: 17, email: "moure@ejemplo.com" }],
    [3, { name: "MoureDev", age: 38, email: "mouredev@ejemplo.com" }],
    [4, { name: "Brais Jr.", age: 16, email: "braisjr@ejemplo.com" }]
])

console.log("\nInformación de usuarios:")
users.forEach((data, id) => {
    console.log(`ID: ${id} | Nombre: ${data.name} | Edad: ${data.age} | Email: ${data.email}`)
})

// 8. Dado el mapa anterior, crea un array con los nombres

const userNames = [...users.values()].map(user => user.name)
console.log("\nNombres de usuarios:", userNames)

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

const adultEmails = [...users.values()]
    .filter(user => user.age >= 18)
    .map(user => user.email)

const emailsSet = new Set(adultEmails)
console.log("\nEmails de usuarios mayores de edad:", emailsSet)

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario

const usersObject = Object.fromEntries(users)
console.log("\nMapa convertido a objeto:", usersObject)

const usersByEmail = new Map()

Object.values(usersObject).forEach(user => {
    usersByEmail.set(user.email, user)
})

console.log("\nNuevo mapa con email como clave:")
usersByEmail.forEach((userData, email) => {
    console.log(`Email: ${email} | Datos:`, userData)
})