const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const inputValue = event.target.value.trim();
  textOutput.textContent = inputValue ? inputValue : "Anonymous";
});

const h1Element = document.querySelector("h1");

const divElement = document.createElement("div");

divElement.classList.add("container");

divElement.appendChild(textInput);
divElement.appendChild(h1Element);

document.body.appendChild(divElement);

console.log(textInput);
console.log(textOutput);
