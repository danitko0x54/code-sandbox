let salary = parseInt(prompt("Cual es tu sueldo?"));
let info = document.getElementById("content");

info.innerHTML = `Tu sueldo es: ` + salary + `</br>`;

switch (salary) {
  case 500:
    info.innerHTML += `Trabajas a media jornada`;
  case 1000:
    info.innerHTML += `Cobras el sueldo mínimo`;
  case 1500:
    info.innerHTML += `No está mal tu sueldo!`;
}
