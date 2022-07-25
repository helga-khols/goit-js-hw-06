function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanColor = document.querySelector(".color");
const widget = document.querySelector(".widget");
const button = document.querySelector(".change-color");

button.onclick = function () {
  const color = getRandomHexColor();
  widget.style.backgroundColor = color;
  spanColor.textContent = color;
};