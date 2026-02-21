let applyButton = document.querySelector(".applyButton");
let randomColorButton = document.querySelector(".randomColorDiv");
let colorInput = document.querySelector("#colorInput");
let superDiv = document.querySelector(".super");
let currentColorValue = document.querySelector(".currentColorValue");
let defaultColor = window.getComputedStyle(superDiv);
currentColorValue.innerText = defaultColor.backgroundColor;
// const color = [
//   "FEFFD3",
//   "6D9E51",
//   "EC8F8D",
//   "537D96",
//   "44A194",
//   "F4F0E4",
//   "DBCEA5",
//   "ECE7D1",
//   "8E977D",
//   "8A7650",
// ];
/* function randomColorGenerator() {
  const numberOfcolor = color.length;
  const loopNumber = Math.floor(Math.random() * numberOfcolor);
  return `#${color[loopNumber]}`;
  } */
function randomColorGenerator() {
  const loopNumber0 = Math.floor(Math.random() * 257);
  const loopNumber1 = Math.floor(Math.random() * 257);
  const loopNumber2 = Math.floor(Math.random() * 257);
  console.log(loopNumber0);
  console.log(loopNumber1);
  console.log(loopNumber2);

  return `rgb(${loopNumber0},${loopNumber1},${loopNumber2})`;
}
const colorChanger = (color) => {
  superDiv.style.backgroundColor = color;
  currentColorValue.innerText = color;
};
const handleApplyButton = () => {
  const color = colorInput.value;
  colorChanger(color);
};
const handleRandomButton = () => {
  const color = randomColorGenerator();
  colorChanger(color);
};

applyButton.addEventListener("click", handleApplyButton);
randomColorButton.addEventListener("click", handleRandomButton);
