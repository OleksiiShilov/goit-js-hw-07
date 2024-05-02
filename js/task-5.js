const changeColorButton = document.querySelector(".change-color");
const divElement = document.querySelector(".widget");
const colorSpan = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  divElement.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});
