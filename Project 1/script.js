let p = document.querySelector("p");

let button = document.querySelector("button");
button.addEventListener("click", () => {
  p.style.scale = "1";
});

let button0 = document.querySelector(".offButton");
button0.addEventListener("click", () => {
  p.style.scale = "0.5";
  p.style.backgroundColor = "lightgreen";
});
