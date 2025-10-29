// 1. Captura una excepción utilizando try-catch.

try {
    let result = 10 / 0
    console.log(result)
} catch (error) {
    console.log("Ha ocurrido un error:", error.message)
}

// 2. Captura una excepción utilizando try-catch y finally.

try {
    let x = undefinedVariable
} catch (error) {
    console.log("Ha ocurrido un error:", error.message)
} finally {
    console.log("Este bloque de código siempre se ejecuta")
}

// 3. Lanza una excepción genérica.

try {
    throw new Error("Error genérico")
} catch (error) {
    console.log("Se ha capturado un error:", error.message)
}

// 4. Crea una excepción personalizada.

class CustomError extends Error {
    constructor(message) {
        super(message)
        this.name = "CustomError"
    }
}

// 5. Lanza una excepción personalizada.

try {
    throw new CustomError("Este es un error personalizado")
} catch (error) {
    console.log(`${error.name}: ${error.message}`)
}

// 6. Lanza varias excepciones según una lógica definida.

function checkNumber(num) {
    if (num < 0) {
        throw new Error("el número es negativo")
    } else if (num === 0) {
        throw new Error("El número es cero")
    } else if (num > 100) {
        throw new Error("El número es mayor que 100")
    }
    return "Número válido"
}

try {
    console.log(checkNumber(101))
} catch (error) {
    console.log("Error:", error.message)
}

// 7. Captura varias excepciones en un mismo try-catch.

try {
    // let num = -5
    let num = 5
    checkNumber(num)
    num.toUpperCase()
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Error de tipo:", error.message)
    } else {
        console.log("Error:", error.message)
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores.

let values = ["10.5", "abc", "20.2", "xyz"]
for (let value of values) {
    try {
        let floatValue = parseFloat(value)
        if (isNaN(floatValue)) {
            throw new Error(`"${value}" no es un número válido`)
        }
        console.log(`Valor transformado: ${floatValue}`)
    } catch (error) {
        console.log("Error:", error.message)
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada.

function checkProperty(obj, property) {
    if (!obj.hasOwnProperty(property)) {
        throw new CustomError(`La propiedad "${property}" no se ha encontrado en el objeto`)
    }
    return obj[property]
}
try {
    let person = { name: "Brais", age: 37 }
    console.log(checkProperty(person, "name"))
    console.log(checkProperty(person, "address"))
} catch (error) {
    console.log(`${error.name}: ${error.message}`)
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10.

// Ejemplo de operación que falla de manera aleatoria
function unstableOperation() {
    if (Math.random() > 0.9) { // Genera un número aleatorio entre 0 y 1 (Si no conoces "Math", el curso tiene una lección sobre módulos)
        console.log("Operación correcta")
    } else {
        throw new Error("Error inesperado")
    }
}

function retryOperation() {
    const maxRetries = 10
    let attempts = 0
    let success = false

    while (attempts < maxRetries && !success) {
        try {
            unstableOperation()
            success = true
        } catch (error) {
            attempts++
            console.log(`Intento ${attempts} fallido: ${error.message}`)
        }
    }

    if (!success) {
        console.log("Se ha alcanzado el máximo número de intentos. Operación fallida.")
    }
}

retryOperation(10)