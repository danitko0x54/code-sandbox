//Bucles

//* Hay varias formas de resolver, se recomienda usar diferentes formas de hacer bucles

//1.
for (let i = 0; i <= 20; i++) {
  console.log(i);
}

//2.
let result = 0;
let j = 1;
do {
  result += j;
  j++;
} while (j <= 100);
console.log(result);

//3.
for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//Alternativa
/*
for (let i = 2; i <= 50; i += 2) {
    console.log(i)
}
*/

//4.
let nameArray = ["Daniel", "David", "Javier", "Carlos"];
for (let name of nameArray) {
  console.log(name);
}

//5.
let textToCheck = "En un lugar de la Mancha cuyo nombre no quiero acordarme";
let vowels = "aeiou";
let vowelsCount = 0;

for (let i = 0; i < textToCheck.length; i++) {
  if (vowels.includes(textToCheck.toLowerCase()[i])) {
    vowelsCount++;
  }
}
// Si vocales incluye esa caracter pasado minúscula entonces incrementar contador
console.log(vowelsCount);

//6.
let numberArray = [8, 5, 6, 7, 3]
let multiplication = 1;
let k = 0;

while (k < numberArray.length) {
    multiplication *= numberArray[k]
    k++
}

console.log(multiplication)

//7.
let factor = 1;
while (factor <= 10) {
    console.log(` ${5} x ${factor} = ${5*factor} `)
    factor++
}

//8.
let textToReverse = "Jovencito empozoñado de whisky, ¡Qué figurota exhibe!"
let reversedText = ""
for (let i = textToReverse.length - 1; i >= 0; i--) {
    reversedText += textToReverse[i]
}
console.log(reversedText)

//9.
let fibonacci = [0, 1]
let n = 2

while (n < 10) {
    fibonacci.push(fibonacci[n - 1] + fibonacci[n - 2])
    n++
}
console.log(fibonacci)

//10.
let numArray = [4, 12, 9, 20, 15, 7]
let biggerNumbers = []

for (let num of numArray) {
    if (num > 10) {
        biggerNumbers.push(num)
    }
}
console.log(biggerNumbers)
