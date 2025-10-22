// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios.

// 1. Crea un bucle que imprima los números del 1 al 20.

let i = 1
while (i <= 20) {
    console.log(i)
    i++
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado.

let sum = 0
let j = 1
do {
    sum += j
    j++
} while (j <= 100)
console.log(sum)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50.

for (let i = 2; i <= 50; i += 2) {
    console.log(i)
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola.

let names = ["Brais", "Moure", "MoureDev", "Sara", "Pedro"]
for (let name of names) {
    console.log(name)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto.

let text = "Hola JAVASCRIPT"
let vowelsCount = 0
let vowels = "aeiou"
for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text.toLowerCase()[i])) {
        vowelsCount++
    }
}
console.log(vowelsCount)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto.

let numbers = [1, 2, 3, 4, 5]
let product = 1
let k = 0
while (k < numbers.length) {
    product *= numbers[k]
    k++
}
console.log(product)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5.

let m = 1
do {
    console.log(`5 x ${m} = ${5 * m}`)
    m++
} while (m <= 10)

// 8. Usa un bucle para invertir una cadena de texto.

let originalString = "JavaScript"
let reversedString = ""
for (let i = originalString.length - 1; i >= 0; i--) {
    reversedString += originalString[i]
}
console.log(reversedString)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci.

let fibonacci = [0, 1]
let n = 2
while (n < 10) {
    fibonacci.push(fibonacci[n - 1] + fibonacci[n - 2])
    n++
}
console.log(fibonacci)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10.

let numArray = [4, 12, 9, 20, 15, 7]
let greaterThanTen = []
for (let num of numArray) {
    if (num > 10) {
        greaterThanTen.push(num)
    }
}
console.log(greaterThanTen)