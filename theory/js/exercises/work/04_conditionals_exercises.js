//Condicionales

//1.
let nameToCheck = "Daniel";

if (nameToCheck === "Daniel") {
  console.log("Your name is Daniel!");
}

let user = "Usuario123";
let pass = "12345";

//2.
if (user == "Usuario123" && pass == 12345) {
  console.log(`
        Bienvenido ${user}!
        `);
} else {
  console.log("Usuario o contraseña incorrectos");
}

//3.
let numberToCheck = 5;

if (numberToCheck > 0) {
  console.log("El número es positivo");
} else if (numberToCheck < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es 0");
}

//4.
let ageToCheck = 18;
if (ageToCheck >= 18) {
  console.log("Puedes votar");
} else {
  console.log("No puedes votar");
}

//5.
let personAge = 28;
let isAdult = personAge >= 16 ? true : false;
console.log(isAdult);

//6.
let month = 2;
if (month >= 3 && month <= 5) {
  console.log("Primavera");
} else if (month >= 6 && month <= 8) {
  console.log("Verano");
} else if (month >= 9 && month <= 11) {
  console.log("Otoño");
} else {
  console.log("Invierno");
}

//7.
if (month === 2) {
  console.log("Tiene 28 días o 29 si es año bisiesto");
} else if ([4, 6, 9, 11].includes(month)) {
  console.log("Tiene 30 días");
} else {
  console.log("Tiene 31 días");
}

//8.
let language = "ES";
switch (language) {
  case "ES":
    console.log("Hola!");
    break;
  case "FR":
    console.log("Bonjour");
    break;
  case "EN":
    console.log("Hello");
    break;
  default:
    console.log("Código de idioma inválido");
}

//9.
switch (month) {
  case 3:
  case 4:
  case 5:
    console.log("Primavera");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Verano");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Otoño");
    break;
  default:
    console.log("Invierno");
}

//10.
switch (month) {
  case 2:
    console.log("28 o 29 días");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("30 días");
    break;
  default:
    console.log("31 días");
}
