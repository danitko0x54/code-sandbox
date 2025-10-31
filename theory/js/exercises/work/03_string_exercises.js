//Cadenas de texto

//1.
let stringVarA = "Primera parte del texto";
let stringVarB = "segunda parte del texto";
let stringConcat = stringVarA + ", " + stringVarB;
console.log(stringConcat);

//2.
let myName = "Daniel";
console.log(myName.length);

//3.
console.log(myName[0]);
console.log(myName[myName.length - 1]);

//4.
myName = myName.toUpperCase();
console.log(myName);
myName = myName.toLowerCase();
console.log(myName);

//5.
let myParagraph = `
Quien a buen árbol se arrima,
buena sombra le cobija.
`;
console.log(myParagraph);

//6.
let country = "España";
let location = `Vivo en ${country}`;
console.log(location);

//7.
let stringWithSpaces = "Mi nombre es Dani Zapata";
let stringWithHyphens = stringWithSpaces.replace(/ /g, "-");
// syntax --> string.replace(searchValue, newValue)
// El código "/ /" sirve para marcar el término a buscar, el modificador "g" indica que será global la búsqueda. Es sistema GREP
console.log(stringWithHyphens);

//8.
let sentence = "Me gusta programar en JavaScript";
// syntax --> string.includes(searchvalue, start), "start" es opcional, es para marcar la posición: 0 sería el inicio y el valor por defecto
console.log(sentence.includes("JavaScript"));

//9.
let string1 = "hola";
let string2 = "hola";
console.log(string1 === string2);

//10.
let string3 = "hola";
let string4 = "mundo";
console.log(string3.length === string4.length);
