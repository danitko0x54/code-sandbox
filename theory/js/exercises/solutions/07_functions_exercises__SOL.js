// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios.

// 1. Crea una función que reciba dos números y devuelva su suma.

function sum(a, b) {
    return a + b
}

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos.

function findMax(numbers) {
    let max = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]
        }
    }
    return max
}

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene.

function countVowels(str) {
    let vowels = "aeiou"
    let count = 0
    let lowerCaseStr = str.toLowerCase()
    for (let char of lowerCaseStr) {
        if (vowels.includes(char)) {
            count++
        }
    }
    return count
}

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas.

function toUpperCaseArray(strings) {
    let upperCaseStrings = []
    for (let i = 0; i < strings.length; i++) {
        upperCaseStrings.push(strings[i].toUpperCase())
    }
    return upperCaseStrings
}

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario.

function isPrime(num) {
    if (num <= 1) return false
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.

function commonElements(array1, array2) {
    let common = []
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                common.push(array1[i])
                break
            }
        }
    }
    return common
}

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares.

function sumEvenNumbers(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i]
        }
    }
    return sum
}

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado.

function squareNumbers(numbers) {
    let squaredNumbers = []
    for (let i = 0; i < numbers.length; i++) {
        squaredNumbers.push(numbers[i] * numbers[i])
    }
    return squaredNumbers
}

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.

function reverseWords(sentence) {
    let words = sentence.split(" ")
    let reversedWords = []
    for (let i = words.length - 1; i >= 0; i--) {
        reversedWords.push(words[i])
    }
    return reversedWords.join(" ")
}

// 10. Crea una función que calcule el factorial de un número dado.

function factorial(num) {
    if (num === 0 || num === 1) return 1
    return num * factorial(num - 1) // Recursividad
}