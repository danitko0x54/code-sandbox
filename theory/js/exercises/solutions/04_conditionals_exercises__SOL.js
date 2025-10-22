// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor.

let myName = "Brais"
if (myName === "Brais") {
    console.log(myName)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos.

let user = "admin"
let password = "1234"
if (user === "admin" && password === "1234") {
    console.log("Acceso permitido")
} else {
    console.log("Acceso no permitido")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje.

let number = -5
if (number > 0) {
    console.log("El número es positivo")
} else if (number < 0) {
    console.log("El número es negativo")
} else {
    console.log("El número es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan.

let age = 16
if (age >= 18) {
    console.log("Puedes votar.")
} else {
    console.log(`No puedes votar, tienes que esperar ${18 - age} años más`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad.

let category = age >= 18 ? "adulto" : "menor"
console.log(category)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes".

let month = 3
if (month >= 3 && month <= 5) {
    console.log("Primavera")
} else if (month >= 6 && month <= 8) {
    console.log("Verano")
} else if (month >= 9 && month <= 11) {
    console.log("Otoño")
} else {
    console.log("Invierno")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior.

if (month === 2) {
    console.log("28 o 29 días")
} else if ([4, 6, 9, 11].includes(month)) {
    console.log("30 días")
} else {
    console.log("31 días")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.

let language = "es"
switch (language) {
    case "es":
        console.log("Hola")
        break
    case "en":
        console.log("Hello")
        break
    case "fr":
        console.log("Bonjour")
        break
    default:
        console.log("Lenguaje no soportado")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6.

switch (month) {
    case 3:
    case 4:
    case 5:
        console.log("Primavera")
        break
    case 6:
    case 7:
    case 8:
        console.log("Verano")
        break
    case 9:
    case 10:
    case 11:
        console.log("Otoño")
        break
    default:
        console.log("Invierno")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7.

switch (month) {
    case 2:
        console.log("28 o 29 días")
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 días")
        break
    default:
        console.log("31 días")
}