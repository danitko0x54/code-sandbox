// Operadores

//1.
let sumVar = 3 + 5;
let substractionVar = 20 - 14;
let multiplicationVar = 7 * 8;
let divisionVar = 8 / 2;
let powerVar = 3 ** 2;
let remainderVar = 14 % 3;

//2.

let num = 5;
num += sumVar;
num -= substractionVar;
num *= multiplicationVar;
num /= divisionVar;
num %= remainderVar;

//3.
console.log(3 > 2);
console.log(5 < 8);
console.log(7 <= 8);
console.log(9 >= 9);
console.log("patata" == "patata");

//4.
console.log(3 != 3);
console.log(7 <= 5);
console.log("7" === 7);
console.log(5 > 8);
console.log(3 >= 4);

//5.
console.log(true && true);
console.log(5 > 4 && 3 < 1);

//6.

console.log(true || false);
console.log(5 > 8 || 3 == 2);

//7.
console.log((true || false) && true);

//8.
console.log((5 > 4 && 3 < 1) || !(5 > 8 || 3 == 2));

//9.
let age = 17;
age >= 18
  ? console.log("Eres mayor de edad")
  : console.log("Aún no eres mayor de edad");

//10.
let result = (5 + 3) * 2 > 10 && 4 * 2 === 8;
console.log(result);
