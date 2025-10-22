// 1. Escribe un comentario en una línea.

// Este es un comentario en una línea.

// 2. Escribe un comentario en varias líneas.

/*
Este es
un comentario
en varias líneas.
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos.

let stringVar = "¡Hola, JavaScript"
let numberVar = 37
let booleanVar = true
let nullVar = null
let undefinedVar
let bigIntVar = BigInt(9007199254740991)
let symbolVar = Symbol("unique")

// 4. Imprime por consola el valor de todas las variables.

console.log(stringVar)
console.log(numberVar)
console.log(booleanVar)
console.log(nullVar)
console.log(undefinedVar)
console.log(bigIntVar)
console.log(symbolVar)

// 5. Imprime por consola el tipo de todas las variables.

console.log(typeof stringVar)
console.log(typeof numberVar)
console.log(typeof booleanVar)
console.log(typeof nullVar)
console.log(typeof undefinedVar)
console.log(typeof bigIntVar)
console.log(typeof symbolVar)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo.

stringVar = "¡Adiós, JavaScript!"
numberVar = 38
booleanVar = false
nullVar = null
undefinedVar = undefined
bigIntVar = BigInt(1234567890123456)
symbolVar = Symbol("anotherUnique")

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo.

stringVar = 1000
numberVar = "Brais Moure"
booleanVar = "true"
nullVar = BigInt(1234567890123456)
undefinedVar = false
bigIntVar = 3.14159
symbolVar = null

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos.

const constString = "Soy una constante"
const constNumber = 37
const constBoolean = false
const constNull = null
const constUndefined = undefined
const constBigInt = BigInt(789654123)
const constSymbol = Symbol("constantSymbol")

// 9. A continuación, modifica los valores de las constantes.

// constString = "Nueva constante"
// constNumber = 38
// constBoolean = true
// constNull = "null"
// constUndefined = null
// constBigInt = BigInt(987654321)
// constSymbol = Symbol("newConsatntSymbol")

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse.

// Modificado en el ejercicio 9.