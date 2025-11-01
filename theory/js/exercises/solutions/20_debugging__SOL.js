// 1. Crea un código con un error lógico y usa VS Code para encontrarlo

function calculateDiscountPrice(price, discountPercentage) {
    const discountAmount = price * (discountPercentage / 100)
    const finalPrice = price - discountAmount
    
    return finalPrice
}

function totalShoppingCart(items) {
    let total = 0
    
    for (let i = 0; i <= items.length; i++) {
        total += items[i]
    }
    
    return total
}

const prices = [150, 300, 95, 80]

try {
    const subtotal = totalShoppingCart(prices)
    console.log(`Subtotal de la compra: ${subtotal}`)
    
    const finalPrice = calculateDiscountPrice(subtotal, 15)
    console.log(`Precio final con 15% de descuento: ${finalPrice}`)
} catch (error) {
    console.log(`Error encontrado: ${error.message}`)
    console.log("El error está en el bucle for de totalShoppingCart. La condición i <= items.length es incorrecta. Los índices van de 0 a length-1.")
}

// 2. Experimenta con breakpoints y observa cómo cambia el flujo de ejecución

function processUser(user) {
    console.log(`Procesando usuario: ${user.name}`)
    
    if (user.age >= 18) {
        console.log(`${user.name} es mayor de edad`)
        if (user.premium) {
            console.log(`${user.name} es usuario premium`)
            processPayment(user, 100)
        } else {
            console.log(`${user.name} es usuario gratuito`)
            processPayment(user, 0)
        }
    } else {
        console.log(`${user.name} es menor de edad`)
        console.log("No se permite el acceso")
    }
    
    console.log("Procesamiento finalizado\n")
}

function processPayment(user, amount) {
    if (amount > 0) {
        console.log(`Procesando pago de ${amount} euros para ${user.name}`)
        user.balance -= amount
        console.log(`Nuevo saldo: ${user.balance} euros`)
    } else {
        console.log(`No hay pago que procesar para ${user.name}`)
    }
}

const users = [
    { name: "Brais", age: 25, premium: true, balance: 500 },
    { name: "Moure", age: 17, premium: false, balance: 0 },
    { name: "MoureDev", age: 30, premium: false, balance: 200 }
]

console.log("Para usar breakpoints en VS Code:")
console.log("1. Haz clic junto al número de línea para añadir un punto rojo (breakpoint)")
console.log("2. Pulsa F5 o ve a Ejecutar > Iniciar depuración")
console.log("3. El código se detendrá en el breakpoint")
console.log("4. Usa F10 para avanzar línea a línea sin entrar en funciones")
console.log("5. Usa F11 para avanzar y entrar en las funciones")
console.log("6. Observa las variables en el panel lateral\n")

users.forEach(user => {
    processUser(user)
})
