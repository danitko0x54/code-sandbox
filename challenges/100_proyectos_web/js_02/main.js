let brand = "Audi",
  speed = 200,
  models = ["R8", "A3", "A7", "V6"];

let info = `Tenemos coches de la marca ${brand}, con una velocidad máxima de ${speed}km/h. Los modelos disponibles son: <br>`;

models.forEach((model) => {
  info += `- ${model} <br/>`;
});

let show_info = document.getElementById("content");

show_info.innerHTML = info;
