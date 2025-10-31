// Estructuras

//1.
let animalsArray = ["perro", "gato", "lagarto", "cobaya", "tortuga"];

//2.
animalsArray.unshift("hurón");
animalsArray.push("canario");
console.log(animalsArray);

//3.
animalsArray.splice(2, 1);
console.log(animalsArray);

//4.
let booksSet = new Set([
  "El Hobbit",
  "1984",
  "El Señor de los Anillos",
  "Harry Potter",
  "Veinte mil leguas de viaje submarino",
]);

//5.
booksSet.add("La Odisea");
booksSet.add("1984"); //<- El repetido no se añadirá, es la gracia del set
console.log(booksSet);

//6.
booksSet.delete("El Hobbit");
console.log(booksSet);

//7.
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
  [12, "Diciembre"],
]);
console.log(monthsMap);

//8.
if (monthsMap.has(5)) {
  console.log(monthsMap.get(5)); //<- "get" da valor a partir de la clave
}

//9.
monthsMap.set("Summer months", ["Junio", "Julio", "Agosto"]);
console.log(monthsMap);

//10.
let countries = ["Spain", "France", "Italy", "Germany"];
let europeanCountries = new Set(countries);
let worldCountries = new Map();
worldCountries.set("European Countries", europeanCountries);

console.log(worldCountries.get("European Countries"));
