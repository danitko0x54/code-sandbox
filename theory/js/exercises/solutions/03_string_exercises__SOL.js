// 1. Concatena dos cadenas de texto.

let string1 = "Hello"
let string2 = "JavaScript"
let concatenated = string1 + " " + string2
console.log(concatenated)

// 2. Muestra la longitud de una cadena de texto.

let myString = "Brais Moure"
console.log(myString.length)

// 3. Muestra el primer y último carácter de un string.

console.log(myString[0])
console.log(myString[myString.length - 1])

// 4. Convierte a mayúsculas y minúsculas un string.

console.log(myString.toUpperCase())
console.log(myString.toLowerCase())

// 5. Crea una cadena de texto en varias líneas.

let multilineString = `Esta una
cadena de texto
creada en
varias líneas`
console.log(multilineString)

// 6. Interpola el valor de una variable en un string.

let language = "JavaScript"
let interpolatedString = `Estoy aprendiendo ${language}`
console.log(interpolatedString)

// 7. Reemplaza todos los espacios en blanco de un string por guiones.

let stringWithSpaces = "Mi nombre es Brais Moure"
let stringWithHyphens = stringWithSpaces.replace(/ /g, "-")
console.log(stringWithHyphens)

// 8. Comprueba si una cadena de texto contiene una palabra concreta.

let sentence = "Me gusta programar en JavaScript"
console.log(sentence.includes("JavaScript"))

// 9. Comprueba si dos strings son iguales.

let string3 = "hola"
let string4 = 'hola'
console.log(string3 === string4)

// 10. Comprueba si dos strings tienen la misma longitud.

let string5 = "hola"
let string6 = "mundo"
console.log(string5.length === string6.length)