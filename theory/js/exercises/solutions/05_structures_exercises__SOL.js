// 1. Crea un array que almacene cinco animales.

let animals = ["perro", "gato", "elefante", "tigre", "león"]

// 2. Añade dos más. Uno al principio y otro al final.

animals.unshift("conejo")
animals.push("águila")
console.log(animals)

// 3. Elimina el que se encuentra en tercera posición.

animals.splice(2, 1)
console.log(animals)

// 4. Crea un set que almacene cinco libros.

let books = new Set(["El Hobbit", "1984", "El Señor de los Anillos", "Harry Potter", "Veinte mil leguas de viaje submarino"])

// 5. Añade dos más. Uno de ellos repetido.

books.add("El diario de Ana Frank")
books.add("1984")
console.log(books)

// 6. Elimina uno concreto a tu elección.

books.delete("Veinte mil leguas de viaje submarino")
console.log(books)

// 7. Crea un mapa que asocie el número del mes a su nombre.

let monthsMap = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor.

if (monthsMap.has(5)) {
    console.log(monthsMap.get(5))
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano.

monthsMap.set("summerMonths", ["Junio", "Julio", "Agosto"])
console.log(monthsMap.get("summerMonths"))

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map.

let fruitsArray = ["manzana", "plátano", "naranja", "manzana"]
console.log(fruitsArray)
let fruitsSet = new Set(fruitsArray)
console.log(fruitsSet)
let fruitsMap = new Map()
fruitsMap.set("fruits", fruitsSet)
console.log(fruitsMap)
console.log(fruitsMap.get("fruits"))