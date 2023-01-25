const img = document.querySelector("#img");
const btns = document.querySelectorAll("button");
let colorIndex = 0;
let intervalID = null;

function trafficLights(event) {
  stopAutomatic();
  turnOn[event.target.id]();
}

const nextIndex = () => {
  if (colorIndex < 2) {
    colorIndex++;
  } else {
    colorIndex = 0;
  }
};

function changeColor() {
  const colors = ["red", "yellow", "green"];
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex();
}

function stopAutomatic() {
  clearInterval(intervalID);
}

const turnOn = {
  red: () => (img.src = "./img/vermelho.png"),
  yellow: () => (img.src = "./img/amarelo.png"),
  green: () => (img.src = "./img/verde.png"),
  automatic: () => (intervalID = setInterval(changeColor, 1000)),
};

btns.forEach((item) => {
  item.addEventListener("click", trafficLights);
});
